// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `CncValueColor?MachineId=<id>&Range=<range>` — colour slots
// consumed by x-cncvaluebar.
//
// Blocks are computed FROM the asked Range param (proportional fractions)
// so they always fit inside the bar, regardless of the time of day at which
// the demo is opened. Previously the mock returned `{{now-8h..now}}` slots,
// which collapsed to negative widths when the asked window didn't overlap
// with `[now-8h, now]`.

require('./_helpers');

// Each pattern is an array of [fractionOfRange, color] segments.
var PATTERNS = {
  // Machine 1 — busy, multi-state (5 slots)
  1: [
    [0.20, '#2E7D32'], // green
    [0.20, '#FFC107'], // yellow
    [0.20, '#2E7D32'], // green
    [0.20, '#D32F2F'], // red
    [0.20, '#2E7D32']  // green
  ],
  // Machine 2 — moderate (3 slots)
  2: [
    [0.625, '#2E7D32'],
    [0.250, '#FFC107'],
    [0.125, '#2E7D32']
  ],
  // Machine 3 — uniform single block
  3: [
    [1.0, '#2E7D32']
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
    var color = pattern[i][1];
    var blockEnd = (i === pattern.length - 1) ? upperMs : Math.round(cursor + frac * totalMs);
    blocks.push({
      Range: '[' + new Date(cursor).toISOString() + ',' + new Date(blockEnd).toISOString() + ')',
      Color: color
    });
    cursor = blockEnd;
  }
  return {
    Range: '[' + r.lower.toISOString() + ',' + r.upper.toISOString() + ')',
    Blocks: blocks
  };
}

MOCK.respond('CncValueColor', function (call) {
  var n = Number(call.params.MachineId);
  var pattern = PATTERNS[n] || PATTERNS[1];
  return buildBlocks(call.params.Range, pattern);
}, { delay: 300 });
