// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

MOCK.respond('SaveMachineStateTemplate', function (call) {
  if (!call.params.Id && !call.params.MachineId) {
    return { __status: 400, body: MOCK.errorBody('Id required') };
  }
  return { Id: 3, Message: 'Ok' };
}, { delay: 500 });

MOCK.respond('MachineStateTemplateMachineAssociation/Save', function (call) {
  if (!call.params.MachineId) {
    return { __status: 400, body: MOCK.errorBody('MachineId required') };
  }
  return { Revision: { Id: 3 } };
}, { delay: 400 });
