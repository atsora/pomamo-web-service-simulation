// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `ObservationStateSlots?MachineId=<id>&Range=<range>` —
// observation-state slots consumed by x-observationstatebar.
//
// Slots are computed FROM the asked Range param (proportional fractions),
// so the bar always fits regardless of the time of day the demo is opened.

require('./_helpers');

var PATTERNS = {
  // Machine 1 — 3 slots: production / setup / production
  1: [
    [0.25, { Id: 1, Display: 'Production',  BgColor: '#2E7D32', FgColor: '#FFFFFF', PatternColor: '#888888' }],
    [0.25, { Id: 2, Display: 'Setup',       BgColor: '#7B1FA2', FgColor: '#FFFFFF', PatternColor: '#CCCCCC' }],
    [0.50, { Id: 1, Display: 'Production',  BgColor: '#2E7D32', FgColor: '#FFFFFF', PatternColor: '#888888' }]
  ],
  // Machine 2 — 2 slots: production + maintenance
  2: [
    [0.75, { Id: 1, Display: 'Production',  BgColor: '#2E7D32', FgColor: '#FFFFFF', PatternColor: '#888888' }],
    [0.25, { Id: 3, Display: 'Maintenance', BgColor: '#FFC107', FgColor: '#000000', PatternColor: '#888888' }]
  ],
  // Machine 3 — uniform single block
  3: [
    [1.0, { Id: 1, Display: 'Production', BgColor: '#2E7D32', FgColor: '#FFFFFF', PatternColor: '#888888' }]
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
    var slot = Object.assign({}, tmpl, {
      Range: '[' + new Date(cursor).toISOString() + ',' + new Date(slotEnd).toISOString() + ')'
    });
    slots.push(slot);
    cursor = slotEnd;
  }
  return { ObservationStateSlots: slots };
}

MOCK.respond('ObservationStateSlots', function (call) {
  var n = Number(call.params.MachineId);
  var pattern = PATTERNS[n] || PATTERNS[1];
  return buildSlots(call.params.Range, pattern);
}, { delay: 400 });
