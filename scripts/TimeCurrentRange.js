// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Time/CurrentRange/<N>_<week|day|shift|hour>` — current range of
// N units covering "now". Function form because the spec is in the path.

require('./_helpers');

function parseSpec (suffix) {
  var m = /^(\d+)_(week|day|shift|hour)/i.exec(suffix || '');
  if (!m) return { size: 1, type: 'day' };
  return { size: Number(m[1]), type: m[2].toLowerCase() };
}

MOCK.respond('Time/CurrentRange', function (call) {
  var pathBits = call.urlString.replace(/\?.*$/, '').split('/');
  var spec = parseSpec(pathBits[pathBits.length - 1]);
  var hoursPerUnit = spec.type === 'week' ? 168 : spec.type === 'shift' ? 8 : spec.type === 'hour' ? 1 : 24;
  var upper = new Date();
  var lower = new Date(upper.getTime() - hoursPerUnit * spec.size * 3600000);
  var lowerIso = lower.toISOString();
  var upperIso = upper.toISOString();
  return {
    UtcDateTimeRange: '[' + lowerIso + ',' + upperIso + ')',
    DayRange: '[' + lowerIso.substring(0, 10) + ',' + upperIso.substring(0, 10) + ')'
  };
}, { delay: 200 });
