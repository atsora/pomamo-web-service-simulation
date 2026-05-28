// Copyright (C) 2009-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `ProductionState/ColorSlots?MachineId|GroupId=<id>&Range=<range>` —
// colored production-state slots consumed by x-productionstatebar.
//
// Slots are computed FROM the asked Range param (proportional fractions),
// so the bar always fills the requested window regardless of when the demo
// is opened.

require('./_helpers');

var PATTERNS = {
  // Machine 1 — production / no-prod / production / unknown / production / no-prod
  1: {
    blocks: [
      [0.25,  '#0080FF', true],
      [0.125, '#D32F2F', false],
      [0.25,  '#0080FF', true],
      [0.125, '',        false],
      [0.125, '#0080FF', true],
      [0.125, '#D32F2F', false]
    ]
  },
  // Machine 2 — long production then stop (75% production)
  2: {
    blocks: [
      [0.75, '#0080FF', true],
      [0.25, '#D32F2F', false]
    ]
  },
  // Machine 3 — uniform production (100%)
  3: {
    blocks: [
      [1.0, '#0080FF', true]
    ]
  }
};

function buildBlocks (rangeParam, pattern) {
  var r = MOCK.rangeFromParam(rangeParam, 8);
  var lowerMs = r.lower.getTime();
  var upperMs = r.upper.getTime();
  var totalMs = upperMs - lowerMs;
  var totalFrac = pattern.blocks.reduce(function (s, p) { return s + p[0]; }, 0);
  var blocks = [];
  var rateMs = 0;
  var cursor = lowerMs;
  for (var i = 0; i < pattern.blocks.length; i++) {
    var frac = pattern.blocks[i][0] / totalFrac;
    var color = pattern.blocks[i][1];
    var isProd = pattern.blocks[i][2];
    var blockEnd = (i === pattern.blocks.length - 1) ? upperMs : Math.round(cursor + frac * totalMs);
    blocks.push({
      Range: '[' + new Date(cursor).toISOString() + ',' + new Date(blockEnd).toISOString() + ')',
      Color: color
    });
    if (isProd) rateMs += (blockEnd - cursor);
    cursor = blockEnd;
  }
  var totalSec = Math.round(totalMs / 1000);
  var rateSec = Math.round(rateMs / 1000);
  return {
    Range: '[' + r.lower.toISOString() + ',' + r.upper.toISOString() + ')',
    Blocks: blocks,
    TotalDuration: totalSec,
    ProductionRateDuration: rateSec,
    AverageProductionRate: totalSec ? rateSec / totalSec : 0
  };
}

MOCK.respond('ProductionState/ColorSlots', function (call) {
  var n = Number(call.params.MachineId);
  var pattern;
  if (call.params.GroupId === '102') pattern = PATTERNS[3];
  else if (call.params.GroupId) pattern = PATTERNS[1];
  else pattern = PATTERNS[n] || PATTERNS[1];
  return buildBlocks(call.params.Range, pattern);
}, { delay: 400 });
