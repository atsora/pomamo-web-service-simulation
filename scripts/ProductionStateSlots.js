// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `ProductionStateSlots?MachineId=<id>|GroupId=<gid>&Range=<range>` —
// alternating Production / No-production slots consumed by x-productionstatebar.
//
// Slots are computed FROM the asked Range param (proportional fractions),
// so the bar always fills the requested window regardless of when the demo
// is opened.

require('./_helpers');

var PROD     = { Id: 1, Display: 'Production',    BgColor: '#0080FF', FgColor: '#FFFFFF' };
var NO_PROD  = { Id: 2, Display: 'No production', BgColor: '#D32F2F', FgColor: '#FFFFFF' };

var PATTERNS = {
  // Machine 1 — 5 alternating slots
  1: [
    [0.25,  PROD],
    [0.125, NO_PROD],
    [0.375, PROD],
    [0.125, NO_PROD],
    [0.125, PROD]
  ],
  // Machine 2 — 2 slots: long production + extended stop
  2: [
    [0.625, PROD],
    [0.375, NO_PROD]
  ],
  // Machine 3 — single uniform production block
  3: [
    [1.0, PROD]
  ]
};

function buildSlots (rangeParam, pattern) {
  var r = MOCK.rangeFromParam(rangeParam, 8);
  var lowerMs = r.lower.getTime();
  var upperMs = r.upper.getTime();
  var totalMs = upperMs - lowerMs;
  var totalFrac = pattern.reduce(function (s, p) { return s + p[0]; }, 0);
  var slots = [];
  var cursor = lowerMs;
  for (var i = 0; i < pattern.length; i++) {
    var frac = pattern[i][0] / totalFrac;
    var tmpl = pattern[i][1];
    var slotEnd = (i === pattern.length - 1) ? upperMs : Math.round(cursor + frac * totalMs);
    slots.push(Object.assign({}, tmpl, {
      Range: '[' + new Date(cursor).toISOString() + ',' + new Date(slotEnd).toISOString() + ')'
    }));
    cursor = slotEnd;
  }
  return {
    Range: '[' + r.lower.toISOString() + ',' + r.upper.toISOString() + ')',
    ProductionStateSlots: slots
  };
}

MOCK.respond('ProductionStateSlots', function (call) {
  var n = Number(call.params.MachineId || call.params.GroupId);
  // Map both machine and group ids to a shared pattern set.
  var pattern;
  if (call.params.GroupId === '102') pattern = PATTERNS[3];
  else if (call.params.GroupId) pattern = PATTERNS[1];
  else pattern = PATTERNS[n] || PATTERNS[1];
  return buildSlots(call.params.Range, pattern);
}, { delay: 400 });
