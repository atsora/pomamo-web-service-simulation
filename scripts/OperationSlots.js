// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `OperationSlots?MachineId=<id>&Range=<range>` — operation slots
// over the last 8 hours.

require('./_helpers');

var OperationSlotsJSON1 = {
  Range: '{{now-8h..now}}',
  Blocks: [
    { Range: '{{now-8h..now-5h}}', Id: 4001, Display: 'OP1042-A', BgColor: '#0080FF', FgColor: '#FFFFFF' },
    { Range: '{{now-5h..now-2h}}', Id: 4002, Display: 'OP1042-B', BgColor: '#2E7D32', FgColor: '#FFFFFF' },
    { Range: '{{now-2h..now}}',    Id: 4003, Display: 'OP1043',   BgColor: '#FFC107', FgColor: '#000000' }
  ]
};

var OperationSlotsJSON2 = {
  Range: '{{now-8h..now}}',
  Blocks: [
    { Range: '{{now-8h..now-4h}}', Id: 4001, Display: 'OP1042-A', BgColor: '#0080FF', FgColor: '#FFFFFF' },
    { Range: '{{now-4h..now}}',    Id: 4002, Display: 'OP1042-B', BgColor: '#2E7D32', FgColor: '#FFFFFF' }
  ]
};

var OperationSlotsJSON3 = {
  Range: '{{now-8h..now}}',
  Blocks: [
    { Range: '{{now-8h..now}}', Id: 4003, Display: 'OP1043', BgColor: '#FFC107', FgColor: '#000000' }
  ]
};

MOCK.respond('OperationSlots', {
  byMachineId: {
    1: OperationSlotsJSON1,
    2: OperationSlotsJSON2,
    3: OperationSlotsJSON3
  },
  default: OperationSlotsJSON1
}, { delay: 400 });
