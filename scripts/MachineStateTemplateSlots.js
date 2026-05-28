// Copyright (C) 2009-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `MachineStateTemplateSlots?MachineId=<id>&Range=<range>` —
// segmented production-state slots consumed by x-machinestatebar.
//
// Slots are computed FROM the asked Range param (proportional fractions),
// so the bar always fits regardless of the time of day the demo is opened.

require('./_helpers');

// Each pattern is an array of [fraction, slotTemplate] segments. The slot
// template omits Range (filled in from the proportional cursor).
var PATTERNS = {
  // Machine 1 — 3 slots: production / maintenance / production
  1: [
    [0.50, { Id: 1, Display: 'Production',  BgColor: '#2E7D32', FgColor: '#FFFFFF' }],
    [0.25, { Id: 2, Display: 'Maintenance', BgColor: '#FFC107', FgColor: '#000000', PatternName: 'dots-3', PatternColor: '#ededed' }],
    [0.25, { Id: 1, Display: 'Production',  BgColor: '#2E7D32', FgColor: '#FFFFFF' }]
  ],
  // Machine 2 — 2 slots: long production + final stop
  2: [
    [0.875, { Id: 1, Display: 'Production', BgColor: '#2E7D32', FgColor: '#FFFFFF' }],
    [0.125, { Id: 3, Display: 'Off',        BgColor: '#9E9E9E', FgColor: '#FFFFFF', PatternName: 'diagonal-stripe-1', PatternColor: '#ededed' }]
  ],
  // Machine 3 — uniform single block
  3: [
    [1.0, { Id: 1, Display: 'Production', BgColor: '#2E7D32', FgColor: '#FFFFFF' }]
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
    var slot = Object.assign({}, tmpl, {
      Range: '[' + new Date(cursor).toISOString() + ',' + new Date(slotEnd).toISOString() + ')'
    });
    slots.push(slot);
    cursor = slotEnd;
  }
  return { MachineStateTemplateSlots: slots };
}

MOCK.respond('MachineStateTemplateSlots', function (call) {
  var n = Number(call.params.MachineId);
  var pattern = PATTERNS[n] || PATTERNS[1];
  return buildSlots(call.params.Range, pattern);
}, { delay: 400 });
