// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `ReasonOnlySlots?MachineId=<id>&Range=<range>` — reason slots
// with the embedded MachineModes structure consumed by x-reasonslotbar.
//
// Slots are computed FROM the asked Range param (proportional fractions),
// so the bar always fills the requested window regardless of when the demo
// is opened.

require('./_helpers');

var MOTION     = { Id: 2, Display: 'Motion',         Running: true,  OverwriteRequired: false, DefaultReason: true,  BgColor: '#2E7D32', FgColor: '#FFFFFF' };
var SHORT_IDLE = { Id: 1, Display: 'Short idle',     Running: false, OverwriteRequired: false, DefaultReason: true,  BgColor: '#FFC107', FgColor: '#000000' };
var OPERATOR   = { Id: 3, Display: 'Operator break', Running: false, OverwriteRequired: false, DefaultReason: false, BgColor: '#FB8C00', FgColor: '#000000' };
var AWAITING   = { Id: 4, Display: 'Awaiting part',  Running: false, OverwriteRequired: true,  DefaultReason: false, BgColor: '#D32F2F', FgColor: '#FFFFFF' };

function makeSlot (range, p) {
  return {
    Range: range,
    Id: p.Id, Display: p.Display, Running: p.Running,
    OverwriteRequired: p.OverwriteRequired, DefaultReason: p.DefaultReason,
    BgColor: p.BgColor, FgColor: p.FgColor,
    MachineModes: [{
      Category: { Id: p.Running ? 2 : 1 },
      Id: p.Id, Display: p.Display, Range: range,
      BgColor: p.BgColor, FgColor: p.FgColor
    }],
    Description: ''
  };
}

var PATTERNS = {
  // Machine 1 — alternating motion / reasons (6 slots)
  1: [
    [1/6, MOTION],
    [1/6, SHORT_IDLE],
    [1/6, MOTION],
    [1/6, AWAITING],
    [1/6, MOTION],
    [1/6, OPERATOR]
  ],
  // Machine 2 — mostly motion with scattered reasons
  2: [
    [0.5,   MOTION],
    [0.125, SHORT_IDLE],
    [0.25,  MOTION],
    [0.125, OPERATOR]
  ],
  // Machine 3 — one long motion + final overwrite-required stop
  3: [
    [0.875, MOTION],
    [0.125, AWAITING]
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
    var p = pattern[i][1];
    var slotEnd = (i === pattern.length - 1) ? upperMs : Math.round(cursor + frac * totalMs);
    var range = '[' + new Date(cursor).toISOString() + ',' + new Date(slotEnd).toISOString() + ')';
    slots.push(makeSlot(range, p));
    cursor = slotEnd;
  }
  return { ReasonOnlySlots: slots };
}

MOCK.respond('ReasonOnlySlots', function (call) {
  var n = Number(call.params.MachineId);
  var pattern = PATTERNS[n] || PATTERNS[1];
  return buildSlots(call.params.Range, pattern);
}, { delay: 400 });
