// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

MOCK.respond('ReasonSave/Post', function (call) {
  if (!call.params.MachineId) {
    return { __status: 400, body: MOCK.errorBody('MachineId required') };
  }
  return { Revision: { Id: 3 }, Message: 'Ok' };
}, { delay: 500, method: 'post' });
