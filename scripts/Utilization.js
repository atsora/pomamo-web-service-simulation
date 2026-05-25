// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

MOCK.respond('Utilization/Get', function (call) {
  if (!call.params.MachineId) {
    return { __status: 400, body: MOCK.errorBody('MachineId required') };
  }
  var range = MOCK.rangeFromParam(call.params.Range, 8);
  var total = (range.upper - range.lower) / 1000;
  var motion = Math.round(total * 0.6);
  return { MotionDuration: motion, NotRunningDuration: Math.round(total - motion) };
}, { delay: 400 });
