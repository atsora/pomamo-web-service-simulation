// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

MOCK.respond('UtilizationTarget/Get', function (call) {
  if (!call.params.MachineId && !call.params.GroupId) {
    return { __status: 400, body: MOCK.errorBody('MachineId or GroupId required') };
  }
  return { TargetPercentage: 0.75 };
}, { delay: 200 });
