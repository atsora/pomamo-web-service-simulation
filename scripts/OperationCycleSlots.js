// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `OperationCycleSlots?MachineId=<id>&Range=<range>` — cycle slots
// over the last 2 hours.

require('./_helpers');

var OperationCycleSlotsJSON1 = {
  Range: '{{now-2h..now}}',
  Blocks: [
    { Range: '{{now-2h..now-1h45m}}',    Id: 5001, Display: 'Cycle 1', BgColor: '#0080FF', FgColor: '#FFFFFF' },
    { Range: '{{now-1h45m..now-1h30m}}', Id: 5002, Display: 'Cycle 2', BgColor: '#2E7D32', FgColor: '#FFFFFF' },
    { Range: '{{now-1h30m..now-1h15m}}', Id: 5003, Display: 'Cycle 3', BgColor: '#7B1FA2', FgColor: '#FFFFFF' },
    { Range: '{{now-1h15m..now-1h}}',    Id: 5004, Display: 'Cycle 4', BgColor: '#FFC107', FgColor: '#000000' },
    { Range: '{{now-1h..now-45m}}',      Id: 5001, Display: 'Cycle 1', BgColor: '#0080FF', FgColor: '#FFFFFF' },
    { Range: '{{now-45m..now-30m}}',     Id: 5002, Display: 'Cycle 2', BgColor: '#2E7D32', FgColor: '#FFFFFF' },
    { Range: '{{now-30m..now-15m}}',     Id: 5003, Display: 'Cycle 3', BgColor: '#7B1FA2', FgColor: '#FFFFFF' },
    { Range: '{{now-15m..now}}',         Id: 5004, Display: 'Cycle 4', BgColor: '#FFC107', FgColor: '#000000' }
  ]
};

var OperationCycleSlotsJSON2 = {
  Range: '{{now-2h..now}}',
  Blocks: [
    { Range: '{{now-2h..now-1h}}', Id: 5001, Display: 'Cycle 1', BgColor: '#0080FF', FgColor: '#FFFFFF' },
    { Range: '{{now-1h..now}}',    Id: 5002, Display: 'Cycle 2', BgColor: '#2E7D32', FgColor: '#FFFFFF' }
  ]
};

var OperationCycleSlotsJSON3 = {
  Range: '{{now-2h..now}}',
  Blocks: [
    { Range: '{{now-2h..now}}', Id: 5003, Display: 'Cycle 3', BgColor: '#7B1FA2', FgColor: '#FFFFFF' }
  ]
};

MOCK.respond('OperationCycleSlots', {
  byMachineId: {
    1: OperationCycleSlotsJSON1,
    2: OperationCycleSlotsJSON2,
    3: OperationCycleSlotsJSON3
  },
  default: OperationCycleSlotsJSON1
}, { delay: 400 });
