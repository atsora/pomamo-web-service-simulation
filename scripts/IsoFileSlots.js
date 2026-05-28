// Copyright (C) 2009-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `IsoFileSlots?MachineId=<id>&Range=<range>` — ISO-file slots
// consumed by x-isofileslotbar.
//
// Slots are computed FROM the asked Range param (proportional fractions),
// so the bar always fills the requested window regardless of when the demo
// is opened.

require('./_helpers');

var PATTERNS = {
  // Machine 1 — 4 ISO files
  1: [
    [0.25, { Display: 'IsoFile_A',                     BgColor: '#2E7D32', FgColor: '#FFFFFF' }],
    [0.25, { Display: 'IsoFile_B (long display name)', BgColor: '#0080FF', FgColor: '#FFFFFF' }],
    [0.25, { Display: 'IsoFile_C',                     BgColor: '#7B1FA2', FgColor: '#FFFFFF' }],
    [0.25, { Display: 'IsoFile_D',                     BgColor: '#FFC107', FgColor: '#000000' }]
  ],
  // Machine 2 — 2 ISO files
  2: [
    [0.5, { Display: 'IsoFile_A', BgColor: '#2E7D32', FgColor: '#FFFFFF' }],
    [0.5, { Display: 'IsoFile_B', BgColor: '#0080FF', FgColor: '#FFFFFF' }]
  ],
  // Machine 3 — single uniform ISO file
  3: [
    [1.0, { Display: 'IsoFile_LATHE', BgColor: '#7B1FA2', FgColor: '#FFFFFF' }]
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
    IsoFileSlots: slots
  };
}

MOCK.respond('IsoFileSlots', function (call) {
  var n = Number(call.params.MachineId);
  var pattern = PATTERNS[n] || PATTERNS[1];
  return buildSlots(call.params.Range, pattern);
}, { delay: 400 });
