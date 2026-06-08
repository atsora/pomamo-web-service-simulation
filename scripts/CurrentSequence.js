// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Operation/CurrentSequence?MachineId=<id>` — currently running
// CNC sequence on the machine's main module.

require('./_helpers');

var CurrentSequenceJSON1 = {
  TooOld: false,
  ByMachineModule: [{
    MachineModule: { Id: 1, Display: 'Module-1', Main: true },
    Sequence: { Id: 2, Display: 'SEQ2: Drilling', Kind: 'Machining' }
  }]
};

var CurrentSequenceJSON2 = {
  TooOld: false,
  ByMachineModule: [{
    MachineModule: { Id: 2, Display: 'Module-2', Main: true },
    Sequence: { Id: 3, Display: 'SEQ3: Finishing', Kind: 'Machining' }
  }]
};

var CurrentSequenceJSON3 = {
  TooOld: false,
  ByMachineModule: [{
    MachineModule: { Id: 3, Display: 'Module-3', Main: true },
    Sequence: { Id: 4, Display: 'SEQ4: Inspection', Kind: 'Stop' }
  }]
};

MOCK.respond('Operation/CurrentSequence', {
  byMachineId: {
    1: CurrentSequenceJSON1,
    2: CurrentSequenceJSON2,
    3: CurrentSequenceJSON3
  },
  default: CurrentSequenceJSON1
}, { delay: 300 });
