// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `CncAlarm/Color?MachineId=<id>&Range=<range>` — colour slots
// consumed by x-cncalarmbar.
//
// Blocks are computed FROM the asked Range so they always fit inside the bar
// regardless of the time of day at which the demo is opened.

require('./_helpers');

// [fraction, color] tuples — green=ok, yellow=warning, blue=info, red=error.
var PATTERNS = {
  1: [
    [0.125, '#2E7D32'], [0.25, '#FFC107'], [0.25, '#2E7D32'],
    [0.125, '#D32F2F'], [0.25, '#2E7D32']
  ],
  2: [
    [0.25, '#2E7D32'], [0.25, '#0080FF'], [0.25, '#2E7D32'], [0.25, '#FFC107']
  ],
  3: [
    [0.875, '#2E7D32'], [0.125, '#D32F2F']
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

MOCK.respond('CncAlarm/Color', function (call) {
  var n = Number(call.params.MachineId);
  var pattern = PATTERNS[n] || PATTERNS[1];
  return buildBlocks(call.params.Range, pattern);
}, { delay: 400 });
