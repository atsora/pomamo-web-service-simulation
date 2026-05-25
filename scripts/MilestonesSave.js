// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

MOCK.respond('MilestonesSave', function (call) {
  if (!call.params.GroupId && !call.params.MachineId) {
    return { __status: 400, body: MOCK.errorBody('GroupId or MachineId required') };
  }
  return { Message: 'Ok', Id: 7 };
}, { delay: 500 });
