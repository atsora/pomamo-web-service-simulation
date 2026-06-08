// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Utilization/Get?MachineId=<id>&Range=<range>` — motion duration
// and not-running duration over a range. Used by x-performancebar,
// x-performancegauge.
//
// 3 hand-crafted scenarios per machine:
//   Machine 1 → 80 % motion  (busy, on track)
//   Machine 2 → 45 % motion  (under-performing)
//   Machine 3 → 60 % motion  (average)

require('./_helpers');

var RATIOS = { 1: 0.80, 2: 0.45, 3: 0.60 };

MOCK.respond('Utilization/Get', function (call) {
  if (!call.params.MachineId) {
    return { __status: 400, body: MOCK.errorBody('MachineId required') };
  }
  var range = MOCK.rangeFromParam(call.params.Range, 8);
  var total = (range.upper - range.lower) / 1000;
  var ratio = RATIOS[Number(call.params.MachineId)] || 0.60;
  var motion = Math.round(total * ratio);
  return { MotionDuration: motion, NotRunningDuration: Math.round(total - motion) };
}, { delay: 400 });
