// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock plumbing for every script in this folder. The public surface is small
// on purpose — each mock file owns its own data and routes via the wrapper.
//
//   MOCK.respond(endpoint, builder|declarative, opts)
//     URL convention `/Endpoint(/<seg>)?(?…)?`, reserved-id handling, sentinel
//     resolution, deep-clone of declarative payloads.
//
//   MOCK.errorBody(message, status)
//     Builds a Pulse-shaped error payload.
//
//   MOCK.rangeFromParam(p, fallbackHours)
//     Parses an incoming `Range=` URL param to `{ lower, upper, str }`.
//
// Scenario data (machines, groups, reserved ids) lives in scenario.js.

require('./scenario');

(function (global) {
  if (global.MOCK) return; // idempotent — multiple requires share the same instance

  // Anchor time for the whole page: every range / slot computed downstream is
  // relative to this. Frozen at load so different mocks stay coherent.
  var ANCHOR = new Date();

  function pad (n) { return n < 10 ? '0' + n : '' + n; }

  function isoUTC (d) {
    return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate())
      + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + 'Z';
  }

  function rangeStr (lower, upper, lowerInclusive, upperInclusive) {
    var lb = (lowerInclusive === false) ? '(' : '[';
    var ub = (upperInclusive === true) ? ']' : ')';
    return lb + isoUTC(lower) + ',' + isoUTC(upper) + ub;
  }

  function shiftHours (d, h) { return new Date(d.getTime() + h * 3600 * 1000); }
  function shiftMinutes (d, m) { return new Date(d.getTime() + m * 60 * 1000); }

  // scenario.js owns the data (machines, groups, reserved ids). We read
  // the global lazily below in case the modules are loaded in a different order.
  function scenario () { return global.SCENARIO; }

  function errorBody (message, status) {
    return { ErrorMessage: message || 'Invalid request', Status: status || 'WrongRequestParameter' };
  }

  // Parse the URL + (for POST) the body of an intercepted call.
  // Returns { endpoint: 'ProductionTracker', params: { GroupId: '18', Range: '[...)' } }
  // Body fields are merged into params so endpoint mocks can stay URL-style.
  function parseCall (urlString, settings) {
    var qIdx = urlString.indexOf('?');
    var path = qIdx === -1 ? urlString : urlString.substring(0, qIdx);
    var query = qIdx === -1 ? '' : urlString.substring(qIdx + 1);
    var segs = path.split('/');
    var endpoint = segs[segs.length - 1];
    var params = {};
    if (query) {
      query.split('&').forEach(function (kv) {
        var i = kv.indexOf('=');
        if (i === -1) params[decodeURIComponent(kv)] = '';
        else params[decodeURIComponent(kv.substring(0, i))] = decodeURIComponent(kv.substring(i + 1));
      });
    }
    // POST body (JSON-encoded by pulseService.postAjax)
    if (settings && settings.data) {
      var data = settings.data;
      if (typeof data === 'string') {
        try { data = JSON.parse(data); } catch (e) { data = null; }
      }
      if (data && typeof data === 'object') {
        Object.keys(data).forEach(function (k) {
          if (params[k] === undefined) params[k] = data[k];
        });
      }
    }
    return { endpoint: endpoint, params: params };
  }

  // Detect "reserved ID" semantics in any param of the call.
  // Recognised param names: MachineId, GroupId, Id, ParentGroupId.
  // ParentGroupId is added so x-chartreservecapacity (which sends
  // ?ParentGroupId=<id>) participates in the 999/998/997 convention.
  function reservedIdFromCall (call) {
    var s = scenario();
    if (!s) return null;
    var checkValues = ['MachineId', 'GroupId', 'Id', 'ParentGroupId'];
    for (var k = 0; k < checkValues.length; k++) {
      var v = call.params[checkValues[k]];
      if (v === undefined) continue;
      var n = Number(v);
      if (n === s.ERROR_ID) return 'error';
      if (n === s.SLOW_ID) return 'slow';
      if (n === s.EMPTY_ID) return 'empty';
    }
    return null;
  }

  // ─── URL regex ───────────────────────────────────────────────────────────
  // Match `/<endpoint>?...` or `/<endpoint>/<segment>?...` regardless of host.
  // (Used by GetLastWorkInformationV3/<id>, Time/CurrentRange/<spec>, …)
  function endpointRegex (endpoint) {
    return new RegExp('\\/' + endpoint + '(\\/[^?]*)?(\\?.*)?$', 'i');
  }

  // ─── Sentinel resolution ─────────────────────────────────────────────────
  // Strings inside a declarative payload can carry time templates that the
  // wrapper resolves at delivery time:
  //   '{{now}}'             → ISO of new Date()
  //   '{{now-45m}}'         → ISO 45 minutes ago         (units: s, m, h)
  //   '{{now+12s}}'         → ISO 12 seconds from now
  //   '{{now-8h..now}}'     → '[ISOa,ISOb)' range string
  //   '{{now-3h..now-1h}}'  → idem, both ends shifted
  // Plain strings without `{{` are returned untouched.
  // Offset grammar: one or more <digits><unit> chunks, with an optional
  // leading sign. Inner chunks inherit the previous sign unless overridden.
  //   "+5m"      → +5 min
  //   "-1h"      → -1 hour
  //   "-1h20m"   → -1h -20m  (sign sticky)
  //   "+1h-20m"  → +1h -20m
  //   "+5m30s"   → +5m +30s
  var UNIT_MS = { s: 1000, m: 60 * 1000, h: 3600 * 1000 };
  function shiftIso (now, offsetSpec) {
    if (!offsetSpec) return now.toISOString();
    var delta = 0;
    var sign = 1;
    var i = 0;
    while (i < offsetSpec.length) {
      var c = offsetSpec.charAt(i);
      if (c === '+') { sign = 1; i++; continue; }
      if (c === '-') { sign = -1; i++; continue; }
      var j = i;
      while (j < offsetSpec.length && offsetSpec.charAt(j) >= '0' && offsetSpec.charAt(j) <= '9') j++;
      if (j === i) { i++; continue; } // skip stray char
      var num = Number(offsetSpec.substring(i, j));
      var unit = offsetSpec.charAt(j);
      if (UNIT_MS[unit] !== undefined) {
        delta += sign * num * UNIT_MS[unit];
      }
      i = j + 1;
    }
    return new Date(now.getTime() + delta).toISOString();
  }
  // Outer sentinel grammar uses an offset suffix matched loosely; shiftIso
  // does the heavy lifting on the offset content itself.
  var OFFSET_BODY = '(?:[+-]?\\d+[smh])*';
  var INSTANT_RE = new RegExp('^now(' + OFFSET_BODY + ')$');
  var RANGE_RE   = new RegExp('^now(' + OFFSET_BODY + ')\\.\\.now(' + OFFSET_BODY + ')$');
  function resolveSentinel (str, now) {
    if (str.indexOf('{{') === -1) return str;
    return str.replace(/\{\{([^}]+)\}\}/g, function (full, body) {
      var rangeMatch = RANGE_RE.exec(body);
      if (rangeMatch) {
        return '[' + shiftIso(now, rangeMatch[1]) + ',' + shiftIso(now, rangeMatch[2]) + ')';
      }
      var instantMatch = INSTANT_RE.exec(body);
      if (instantMatch) {
        return shiftIso(now, instantMatch[1]);
      }
      return full;
    });
  }
  // Deep-clone + resolve sentinels in every string field.
  function materialise (value, now) {
    if (value === null || value === undefined) return value;
    if (typeof value === 'string') return resolveSentinel(value, now);
    if (Array.isArray(value)) return value.map(function (v) { return materialise(v, now); });
    if (typeof value === 'object') {
      var out = {};
      Object.keys(value).forEach(function (k) { out[k] = materialise(value[k], now); });
      return out;
    }
    return value;
  }

  // ─── Declarative form ────────────────────────────────────────────────────
  // The `definition` arg of respond() may be a function or one of:
  //   { byMachineId: { 1: JSON1, 2: JSON2, ... }, default: <JSON|null> }
  //   { byGroupId:   { 100: JSON100, ... },        default: ... }
  //   { byId:        { 1: JSON1, ... },            default: ... }
  //   { static:      <JSON> }
  function isDeclarative (def) {
    return def && typeof def === 'object'
      && (def.byMachineId || def.byGroupId || def.byId || def.static);
  }
  function pickFromMap (map, raw) {
    if (raw === undefined || raw === null) return undefined;
    var n = Number(raw);
    if (!isNaN(n) && map[n] !== undefined) return map[n];
    if (map[raw] !== undefined) return map[raw];
    return undefined;
  }
  function pickFromDeclarative (def, call) {
    if (def.static !== undefined) return def.static;
    // Try every key/map pair in priority order; first hit wins.
    // Endpoints can declare several maps simultaneously (e.g. Machine/Name
    // answers for MachineId AND GroupId).
    var attempts = [
      { map: def.byMachineId, key: 'MachineId' },
      { map: def.byGroupId,   key: 'GroupId' },
      { map: def.byId,        key: 'Id' }
    ];
    for (var i = 0; i < attempts.length; i++) {
      var a = attempts[i];
      if (!a.map) continue;
      var raw = call.params[a.key];
      if (raw === undefined && i === 0 /* MachineId */) {
        // Fall back to last path segment (e.g. /GetLastWorkInformationV3/1)
        var pathBits = (call.urlString || '').replace(/\?.*$/, '').split('/');
        raw = pathBits[pathBits.length - 1];
      }
      var hit = pickFromMap(a.map, raw);
      if (hit !== undefined) return hit;
    }
    return def.default !== undefined ? def.default : null;
  }

  // ─── Fetch interceptor (replaces mockjax) ────────────────────────────────
  // pulse.service.js migrated from $.ajax to native fetch — mockjax's monkey-
  // patch on $.ajax is dead. We register each MOCK.respond() into a list and
  // intercept `window.fetch` once: requests matching a registered regex are
  // served from the builder; others fall through to native fetch. Keeps the
  // existing MOCK.respond declarations and the builder ergonomics (`this.status`,
  // `this.responseText`, `this.responseTime`) verbatim.
  var _handlers = [];           // [{ regex, type, defaultDelay, run(call, ctx) }]
  var _fetchInstalled = false;
  var _nativeFetch = global.fetch ? global.fetch.bind(global) : null;

  function _installFetchInterceptor () {
    if (_fetchInstalled || !global.fetch) return;
    _fetchInstalled = true;
    _nativeFetch = global.fetch.bind(global);

    global.fetch = function (input, init) {
      var url = typeof input === 'string' ? input : (input && input.url) || '';
      var method = (init && init.method) || (input && input.method) || 'GET';
      method = String(method).toUpperCase();

      for (var i = 0; i < _handlers.length; i++) {
        var h = _handlers[i];
        if (h.type && String(h.type).toUpperCase() !== method) continue;
        if (!h.regex.test(url)) continue;

        // Build a mockjax-compatible call descriptor.
        var settings = {
          url: url,
          type: method,
          data: init ? init.body : undefined
        };
        var ctx = { status: 200, responseText: '', responseTime: h.defaultDelay };
        h.run(settings, ctx);

        var delay = ctx.responseTime || 0;
        return new Promise(function (resolve) {
          setTimeout(function () {
            var body = ctx.responseText;
            if (typeof body !== 'string') {
              try { body = JSON.stringify(body); }
              catch (e) { body = String(body); }
            }
            resolve(new Response(body, {
              status: ctx.status || 200,
              statusText: ctx.status >= 400 ? 'Error' : 'OK',
              headers: { 'Content-Type': 'application/json' }
            }));
          }, delay);
        });
      }

      // No handler matched — fall through to native fetch.
      return _nativeFetch(input, init);
    };
  }

  // ─── Register a mock handler ─────────────────────────────────────────────
  // Forms:
  //   MOCK.respond('ProductionTracker', function (call) { return {...}; }, { delay: 300 })
  //   MOCK.respond('CncAlarm/Current', { byMachineId: { 1: JSON1, 2: JSON2, 3: JSON3 } })
  //   MOCK.respond('I18N/Catalog', { static: CATALOG })
  function respond (endpoint, definition, opts) {
    opts = opts || {};
    _installFetchInterceptor();
    var re = endpointRegex(endpoint);
    var declarative = isDeclarative(definition);
    var defaultDelay = opts.delay !== undefined ? opts.delay : 200;

    function run (settings, ctx) {
      var call = parseCall(settings.url, settings);
      call.settings = settings;
      call.urlString = settings.url;

      var reserved = opts.honourReservedIds === false ? null : reservedIdFromCall(call);
      if (reserved === 'error') {
        ctx.status = 400;
        ctx.responseText = errorBody('Reserved error id', 'WrongRequestParameter');
        return;
      }
      if (reserved === 'slow') {
        ctx.responseTime = 5000;
      }
      if (reserved === 'empty' && opts.emptyBuilder) {
        ctx.responseText = opts.emptyBuilder(call);
        return;
      }

      var result;
      try {
        if (declarative) {
          var picked = pickFromDeclarative(definition, call);
          if (picked === null || picked === undefined) {
            ctx.status = opts.notFoundStatus || 404;
            ctx.responseText = errorBody('No mock data for this id', 'NotFound');
            return;
          }
          result = materialise(picked, new Date());
        } else {
          result = materialise(definition(call), new Date());
        }
      } catch (e) {
        console.error('[MOCK] builder threw for', endpoint, e);
        ctx.status = 500;
        ctx.responseText = errorBody(String(e && e.message), 'InternalError');
        return;
      }
      if (result && typeof result === 'object' && '__status' in result) {
        ctx.status = result.__status;
        ctx.responseText = result.body;
      } else {
        ctx.responseText = result;
      }
    }

    _handlers.push({
      regex: re,
      type: opts.method || null,
      defaultDelay: defaultDelay,
      run: run
    });
  }

  // Useful range helpers — every duration is in hours unless noted.
  function nowRange (durationHours, opts) {
    opts = opts || {};
    var anchor = opts.anchor || ANCHOR;
    var alignTo = opts.alignToHour === false ? null : 'hour';
    var upper = new Date(anchor);
    if (alignTo === 'hour') {
      upper.setMinutes(0, 0, 0);
    }
    var lower = shiftHours(upper, -durationHours);
    return { lower: lower, upper: upper, str: rangeStr(lower, upper) };
  }

  function rangeFromParam (param, fallbackHours) {
    if (!param) return nowRange(fallbackHours || 8);
    // Accept both `,` and `;` separators (the codebase uses both interchangeably).
    var m = /^[\[\(]([^,;]+)[,;]([^\]\)]+)[\]\)]$/.exec(param);
    if (!m) return nowRange(fallbackHours || 8);
    var lower = new Date(m[1]);
    var upper = new Date(m[2]);
    if (isNaN(lower.getTime()) || isNaN(upper.getTime())) return nowRange(fallbackHours || 8);
    return { lower: lower, upper: upper, str: param };
  }

  // ─── Low-level escape hatch for mockjax-style handlers ────────────────────
  // Used by mocks that have a custom URL match (full URL, regex, or POST with
  // body parsing) and want to keep the mockjax `this.responseText` / `this.status`
  // API verbatim. The handler is called with `settings = { url, type, data }`
  // and `this` set to the response context.
  function respondRaw (urlMatcher, handler, opts) {
    opts = opts || {};
    _installFetchInterceptor();
    var re;
    if (urlMatcher instanceof RegExp) {
      re = urlMatcher;
    } else {
      // String → exact-match regex (escape special chars).
      var escaped = String(urlMatcher).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      re = new RegExp(escaped + '(\\?.*)?$');
    }
    var defaultDelay = opts.delay !== undefined ? opts.delay : 200;
    _handlers.push({
      regex: re,
      type: opts.method || null,
      defaultDelay: defaultDelay,
      run: function (settings, ctx) {
        // Bind `this` to ctx so existing mockjax-style handlers work unchanged.
        handler.call(ctx, settings);
      }
    });
  }

  global.MOCK = {
    respond:        respond,
    respondRaw:     respondRaw,
    errorBody:      errorBody,
    rangeFromParam: rangeFromParam
  };
})(typeof window !== 'undefined' ? window : this);
