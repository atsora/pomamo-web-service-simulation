// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Reason/AllAt/Get?MachineId=<id>&At=<iso>` — every reason candidate
// at an instant, best score first. The first item is the applied reason;
// x-reasonsubdetails skips it and lists the alternatives.

require('./_helpers');

function item (display, details, color, score, source) {
  var it = { Display: display, Color: color, Score: score, Source: source };
  if (details) it.Details = details;
  return it;
}

var DEFAULT = { Default: true, Auto: false, Manual: false };
var AUTO = { Default: false, Auto: true, Manual: false };
var MANUAL = { Default: false, Auto: false, Manual: true };

var ReasonAllAtJSON1 = {
  ReasonAllAtItems: [
    item('Operator break', null, '#FFC107', 100, MANUAL),
    item('Tool change', 'Auto-detected from tool number change', '#FF9800', 80, AUTO),
    item('Short idle', null, '#FFEB3B', 50, AUTO),
    item('Unanswered', null, '#9E9E9E', 10, DEFAULT)
  ]
};
var ReasonAllAtJSON2 = {
  ReasonAllAtItems: [
    item('Setup', 'Setup of job J-1042', '#2196F3', 90, MANUAL),
    item('Awaiting material', null, '#795548', 40, AUTO),
    item('Unanswered', null, '#9E9E9E', 10, DEFAULT)
  ]
};
var ReasonAllAtJSON3 = {
  ReasonAllAtItems: [
    item('Short idle', null, '#FFEB3B', 50, AUTO),
    item('Unanswered', null, '#9E9E9E', 10, DEFAULT)
  ]
};

MOCK.respond('Reason/AllAt/Get', {
  byMachineId: { 1: ReasonAllAtJSON1, 2: ReasonAllAtJSON2, 3: ReasonAllAtJSON3 },
  default: { ReasonAllAtItems: [item('Unanswered', null, '#9E9E9E', 10, DEFAULT)] }
}, { delay: 300 });
