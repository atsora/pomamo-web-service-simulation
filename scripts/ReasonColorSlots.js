// Copyright (C) 2009-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `ReasonColorSlots?MachineId=<id>&Range=<range>` — coloured reason
// slots consumed by x-reasonslotbar.
//
// Slots are computed FROM the asked Range param (proportional fractions),
// so the bar always fills the requested window regardless of when the demo
// is opened. `MotionDuration` and `NotRunningDuration` are recomputed from
// the green-share each pattern declares (see `isMotion` flag).

require('./_helpers');

var PATTERNS = {
  // Machine 1 — alternating green / interruption colors (50% motion)
  1: [
    [1/6, { Color: '#2E7D32', isMotion: true }],
    [1/6, { Color: '#FFC107', isMotion: false }],
    [1/6, { Color: '#2E7D32', isMotion: true }],
    [1/6, { Color: '#D32F2F', isMotion: false }],
    [1/6, { Color: '#2E7D32', isMotion: true }],
    [1/6, { Color: '#FB8C00', isMotion: false }]
  ],
  // Machine 2 — mostly green with scattered interruptions (75% motion)
  2: [
    [0.50, { Color: '#2E7D32', isMotion: true }],
    [0.125, { Color: '#FFC107', isMotion: false }],
    [0.125, { Color: '#2E7D32', isMotion: true }],
    [0.125, { Color: '#7B1FA2', isMotion: false }],
    [0.125, { Color: '#2E7D32', isMotion: true }]
  ],
  // Machine 3 — clean run with red start and yellow mid (62.5% motion)
  3: [
    [0.125, { Color: '#D32F2F', isMotion: false }],
    [0.25,  { Color: '#2E7D32', isMotion: true }],
    [0.25,  { Color: '#FFC107', isMotion: false }],
    [0.375, { Color: '#2E7D32', isMotion: true }]
  ]
};

function buildBlocks (rangeParam, pattern) {
  var r = MOCK.rangeFromParam(rangeParam, 8);
  var lowerMs = r.lower.getTime();
  var upperMs = r.upper.getTime();
  var totalMs = upperMs - lowerMs;
  var totalFrac = pattern.reduce(function (s, p) { return s + p[0]; }, 0);
  var blocks = [];
  var motionMs = 0;
  var cursor = lowerMs;
  for (var i = 0; i < pattern.length; i++) {
    var frac = pattern[i][0] / totalFrac;
    var tmpl = pattern[i][1];
    var blockEnd = (i === pattern.length - 1) ? upperMs : Math.round(cursor + frac * totalMs);
    blocks.push({
      Range: '[' + new Date(cursor).toISOString() + ',' + new Date(blockEnd).toISOString() + ')',
      Color: tmpl.Color
    });
    if (tmpl.isMotion) motionMs += (blockEnd - cursor);
    cursor = blockEnd;
  }
  var totalSec = Math.round(totalMs / 1000);
  var motionSec = Math.round(motionMs / 1000);
  return {
    Range: '[' + r.lower.toISOString() + ',' + r.upper.toISOString() + ')',
    MotionDuration: motionSec,
    NotRunningDuration: totalSec - motionSec,
    Blocks: blocks
  };
}

MOCK.respond('ReasonColorSlots', function (call) {
  var n = Number(call.params.MachineId);
  var pattern = PATTERNS[n] || PATTERNS[1];
  return buildBlocks(call.params.Range, pattern);
}, { delay: 400 });
