// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `OperationCycleSlots?MachineId=<id>&Range=<range>` — cycle slots
// consumed by x-operationcyclebar.
//
// Slots are computed FROM the asked Range param (proportional fractions),
// so the bar always fills the requested window regardless of when the demo
// is opened.

require('./_helpers');

var PATTERNS = {
  // Machine 1 — 8 cycles cycling through 4 colors
  1: [
    [0.125, { Id: 5001, Display: 'Cycle 1', BgColor: '#0080FF', FgColor: '#FFFFFF' }],
    [0.125, { Id: 5002, Display: 'Cycle 2', BgColor: '#2E7D32', FgColor: '#FFFFFF' }],
    [0.125, { Id: 5003, Display: 'Cycle 3', BgColor: '#7B1FA2', FgColor: '#FFFFFF' }],
    [0.125, { Id: 5004, Display: 'Cycle 4', BgColor: '#FFC107', FgColor: '#000000' }],
    [0.125, { Id: 5001, Display: 'Cycle 1', BgColor: '#0080FF', FgColor: '#FFFFFF' }],
    [0.125, { Id: 5002, Display: 'Cycle 2', BgColor: '#2E7D32', FgColor: '#FFFFFF' }],
    [0.125, { Id: 5003, Display: 'Cycle 3', BgColor: '#7B1FA2', FgColor: '#FFFFFF' }],
    [0.125, { Id: 5004, Display: 'Cycle 4', BgColor: '#FFC107', FgColor: '#000000' }]
  ],
  // Machine 2 — 2 long cycles
  2: [
    [0.5, { Id: 5001, Display: 'Cycle 1', BgColor: '#0080FF', FgColor: '#FFFFFF' }],
    [0.5, { Id: 5002, Display: 'Cycle 2', BgColor: '#2E7D32', FgColor: '#FFFFFF' }]
  ],
  // Machine 3 — uniform single cycle
  3: [
    [1.0, { Id: 5003, Display: 'Cycle 3', BgColor: '#7B1FA2', FgColor: '#FFFFFF' }]
  ]
};

function buildBlocks (rangeParam, pattern) {
  var r = MOCK.rangeFromParam(rangeParam, 2);
  var lowerMs = r.lower.getTime();
  var upperMs = r.upper.getTime();
  var totalMs = upperMs - lowerMs;
  var totalFrac = pattern.reduce(function (s, p) { return s + p[0]; }, 0);
  var blocks = [];
  var cursor = lowerMs;
  for (var i = 0; i < pattern.length; i++) {
    var frac = pattern[i][0] / totalFrac;
    var tmpl = pattern[i][1];
    var blockEnd = (i === pattern.length - 1) ? upperMs : Math.round(cursor + frac * totalMs);
    var block = Object.assign({}, tmpl, {
      Range: '[' + new Date(cursor).toISOString() + ',' + new Date(blockEnd).toISOString() + ')'
    });
    blocks.push(block);
    cursor = blockEnd;
  }
  return {
    Range: '[' + r.lower.toISOString() + ',' + r.upper.toISOString() + ')',
    Blocks: blocks
  };
}

MOCK.respond('OperationCycleSlots', function (call) {
  var n = Number(call.params.MachineId);
  var pattern = PATTERNS[n] || PATTERNS[1];
  return buildBlocks(call.params.Range, pattern);
}, { delay: 400 });
