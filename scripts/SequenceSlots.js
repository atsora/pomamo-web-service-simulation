// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `SequenceSlots?MachineId=<id>&Range=<range>` — CNC sequences per
// machine module, consumed by x-sequencebar.
//
// Slots are computed FROM the asked Range param (proportional fractions),
// so the bar always fills the requested window regardless of when the demo
// is opened.

require('./_helpers');

var PATTERNS = {
  // Machine 1 — 3 sequences: roughing / tool change / finishing
  1: [
    [1/3, { Id: 1, Display: 'SEQ1: Roughing',    BgColor: '#0080FF', FgColor: '#000000' }],
    [1/3, { Id: 2, Display: 'SEQ2: Tool change', BgColor: '#FFC107', FgColor: '#000000' }],
    [1/3, { Id: 3, Display: 'SEQ3: Finishing',   BgColor: '#2E7D32', FgColor: '#FFFFFF' }]
  ],
  // Machine 2 — 2 sequences
  2: [
    [0.5, { Id: 1, Display: 'SEQ1: Roughing',  BgColor: '#0080FF', FgColor: '#000000' }],
    [0.5, { Id: 3, Display: 'SEQ3: Finishing', BgColor: '#2E7D32', FgColor: '#FFFFFF' }]
  ],
  // Machine 3 — single uniform sequence
  3: [
    [1.0, { Id: 3, Display: 'SEQ3: Finishing', BgColor: '#2E7D32', FgColor: '#FFFFFF' }]
  ]
};

function buildBlocks (rangeParam, pattern, moduleId) {
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
    var range = '[' + new Date(cursor).toISOString() + ',' + new Date(blockEnd).toISOString() + ')';
    blocks.push(Object.assign({}, tmpl, {
      Range: range,
      Details: [{ Range: range, Display: tmpl.Display }]
    }));
    cursor = blockEnd;
  }
  return {
    Range: '[' + r.lower.toISOString() + ',' + r.upper.toISOString() + ')',
    ByMachineModule: [{
      MachineModule: { Id: moduleId, Display: 'Main', Main: true },
      Blocks: blocks
    }]
  };
}

MOCK.respond('SequenceSlots', function (call) {
  var n = Number(call.params.MachineId);
  var pattern = PATTERNS[n] || PATTERNS[1];
  return buildBlocks(call.params.Range, pattern, n || 1);
}, { delay: 400 });
