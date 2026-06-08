// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `RunningSlots?MachineId=<id>&Range=<range>` — alternating
// running/not-running slots consumed by x-barstack and friends.
//
// Slots are computed FROM the asked Range param (proportional fractions),
// so the bar always fills the requested window regardless of when the demo
// is opened.

require('./_helpers');

var PATTERNS = {
  // Machine 1: 8 alternating slots (50% motion)
  1: [
    [0.125, { Running: false, NotRunning: true }],
    [0.125, { Running: true,  NotRunning: false }],
    [0.125, { Running: false, NotRunning: true }],
    [0.125, { Running: true,  NotRunning: false }],
    [0.125, { Running: false, NotRunning: true }],
    [0.125, { Running: true,  NotRunning: false }],
    [0.125, { Running: false, NotRunning: true }],
    [0.125, { Running: true,  NotRunning: false }]
  ],
  // Machine 2: 75% motion, scattered stops
  2: [
    [0.25,   { Running: true,  NotRunning: false }],
    [0.125,  { Running: false, NotRunning: true }],
    [0.375,  { Running: true,  NotRunning: false }],
    [0.125,  { Running: false, NotRunning: true }],
    [0.125,  { Running: true,  NotRunning: false }]
  ],
  // Machine 3: 62.5% motion
  3: [
    [0.125, { Running: false, NotRunning: true }],
    [0.25,  { Running: true,  NotRunning: false }],
    [0.25,  { Running: false, NotRunning: true }],
    [0.375, { Running: true,  NotRunning: false }]
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
    var block = Object.assign({}, tmpl, {
      Range: '[' + new Date(cursor).toISOString() + ',' + new Date(blockEnd).toISOString() + ')'
    });
    if (tmpl.Running) motionMs += (blockEnd - cursor);
    blocks.push(block);
    cursor = blockEnd;
  }
  var totalSec = Math.round(totalMs / 1000);
  var motionSec = Math.round(motionMs / 1000);
  return {
    Range: '[' + r.lower.toISOString() + ',' + r.upper.toISOString() + ')',
    MotionDuration: motionSec,
    NotRunningDuration: totalSec - motionSec,
    TotalDuration: totalSec,
    Blocks: blocks
  };
}

MOCK.respond('RunningSlots', function (call) {
  var n = Number(call.params.MachineId);
  var pattern = PATTERNS[n] || PATTERNS[1];
  return buildBlocks(call.params.Range, pattern);
}, { delay: 400 });
