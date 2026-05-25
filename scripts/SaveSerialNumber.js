// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `SaveSerialNumberV5?MachineId=<id>&Begin=<iso>&SerialNumber=<sn>`.
// Function form: needs to read user inputs (SerialNumber) and reflect the
// machine id back; the reserved ids 999/998/997 are still honoured.

require('./_helpers');

MOCK.respond('SaveSerialNumberV5', function (call) {
  if (!call.params.MachineId) {
    return { __status: 400, body: MOCK.errorBody('MachineId required') };
  }
  if (!call.params.SerialNumber) {
    return { __status: 400, body: MOCK.errorBody('SerialNumber required') };
  }
  return {
    Id: Number(call.params.MachineId),
    Message: 'Save serial number successful',
    Revision: { Id: 1, DateTime: '{{now}}' }
  };
}, { delay: 500 });
