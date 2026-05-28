// Copyright (C) 2009-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `OperationSlots?MachineId=<id>&Range=<range>` — operation slots
// consumed by x-operationslotbar.
//
// Slots are computed FROM the asked Range param (proportional fractions),
// so the bar always fills the requested window regardless of when the demo
// is opened.

require('./_helpers');

var PATTERNS = {
  // Machine 1 — 3 operations
  1: [
    [0.375, { Id: 4001, Display: 'OP1042-A', BgColor: '#0080FF', FgColor: '#FFFFFF' }],
    [0.375, { Id: 4002, Display: 'OP1042-B', BgColor: '#2E7D32', FgColor: '#FFFFFF' }],
    [0.25,  { Id: 4003, Display: 'OP1043',   BgColor: '#FFC107', FgColor: '#000000' }]
  ],
  // Machine 2 — 2 operations
  2: [
    [0.5, { Id: 4001, Display: 'OP1042-A', BgColor: '#0080FF', FgColor: '#FFFFFF' }],
    [0.5, { Id: 4002, Display: 'OP1042-B', BgColor: '#2E7D32', FgColor: '#FFFFFF' }]
  ],
  // Machine 3 — single uniform operation
  3: [
    [1.0, { Id: 4003, Display: 'OP1043', BgColor: '#FFC107', FgColor: '#000000' }]
  ]
};

function buildBlocks (rangeParam, pattern) {
  var r = MOCK.rangeFromParam(rangeParam, 8);
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
    blocks.push(Object.assign({}, tmpl, {
      Range: '[' + new Date(cursor).toISOString() + ',' + new Date(blockEnd).toISOString() + ')'
    }));
    cursor = blockEnd;
  }
  return {
    Range: '[' + r.lower.toISOString() + ',' + r.upper.toISOString() + ')',
    Blocks: blocks
  };
}

MOCK.respond('OperationSlots', function (call) {
  var n = Number(call.params.MachineId);
  var pattern = PATTERNS[n] || PATTERNS[1];
  return buildBlocks(call.params.Range, pattern);
}, { delay: 400 });
