// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `SequenceSlots?MachineId=<id>&Range=<range>` — CNC sequences
// running over the last 2 hours.

require('./_helpers');

var SequenceSlotsJSON1 = {
  Range: '{{now-2h..now}}',
  ByMachineModule: [{
    MachineModule: { Id: 1, Display: 'Main', Main: true },
    Blocks: [
      { Range: '{{now-2h..now-1h20m}}', Id: 1, Display: 'SEQ1: Roughing',    BgColor: '#0080FF', FgColor: '#000000', Details: [{ Range: '{{now-2h..now-1h20m}}', Display: 'SEQ1: Roughing' }] },
      { Range: '{{now-1h20m..now-40m}}', Id: 2, Display: 'SEQ2: Tool change', BgColor: '#FFC107', FgColor: '#000000', Details: [{ Range: '{{now-1h20m..now-40m}}', Display: 'SEQ2: Tool change' }] },
      { Range: '{{now-40m..now}}',       Id: 3, Display: 'SEQ3: Finishing',   BgColor: '#2E7D32', FgColor: '#FFFFFF', Details: [{ Range: '{{now-40m..now}}', Display: 'SEQ3: Finishing' }] }
    ]
  }]
};

var SequenceSlotsJSON2 = {
  Range: '{{now-2h..now}}',
  ByMachineModule: [{
    MachineModule: { Id: 2, Display: 'Main', Main: true },
    Blocks: [
      { Range: '{{now-2h..now-1h}}', Id: 1, Display: 'SEQ1: Roughing',  BgColor: '#0080FF', FgColor: '#000000', Details: [{ Range: '{{now-2h..now-1h}}', Display: 'SEQ1: Roughing' }] },
      { Range: '{{now-1h..now}}',    Id: 3, Display: 'SEQ3: Finishing', BgColor: '#2E7D32', FgColor: '#FFFFFF', Details: [{ Range: '{{now-1h..now}}', Display: 'SEQ3: Finishing' }] }
    ]
  }]
};

var SequenceSlotsJSON3 = {
  Range: '{{now-2h..now}}',
  ByMachineModule: [{
    MachineModule: { Id: 3, Display: 'Main', Main: true },
    Blocks: [
      { Range: '{{now-2h..now}}', Id: 3, Display: 'SEQ3: Finishing', BgColor: '#2E7D32', FgColor: '#FFFFFF', Details: [{ Range: '{{now-2h..now}}', Display: 'SEQ3: Finishing' }] }
    ]
  }]
};

MOCK.respond('SequenceSlots', {
  byMachineId: {
    1: SequenceSlotsJSON1,
    2: SequenceSlotsJSON2,
    3: SequenceSlotsJSON3
  },
  default: SequenceSlotsJSON1
}, { delay: 400 });
