// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `GetLastMachineStatusV2?Id=<machineId>`.

require('./_helpers');

var GetLastMachineStatusV2JSON1 = {
  MachineStatus: {
    ReasonSlot: {
      Reason: { Text: 'Motion', Color: '#2E7D32' },
      Begin: '{{now-8m}}',
      OverwriteRequired: false
    },
    MachineObservationState: { Id: 2, Text: 'Maintenance', Color: '#FFC107', Display: 'Maintenance' },
    MachineMode: { Display: 'Running', Color: '#2E7D32' }
  }
};

var GetLastMachineStatusV2JSON2 = {
  MachineStatus: {
    ReasonSlot: {
      Reason: { Text: 'Idle', Color: '#FFC107' },
      Begin: '{{now-8m}}',
      OverwriteRequired: false
    },
    MachineObservationState: { Id: 3, Text: 'Off', Color: '#9E9E9E', Display: 'Off' },
    MachineMode: { Display: 'Stopped', Color: '#FFC107' }
  }
};

var GetLastMachineStatusV2JSON3 = {
  MachineStatus: {
    ReasonSlot: {
      Reason: { Text: 'Error', Color: '#D32F2F' },
      Begin: '{{now-8m}}',
      OverwriteRequired: true
    },
    MachineObservationState: { Id: 1, Text: 'Production', Color: '#2E7D32', Display: 'Production' },
    MachineMode: { Display: 'Error', Color: '#D32F2F' }
  }
};

MOCK.respond('GetLastMachineStatusV2', {
  byMachineId: {
    1: GetLastMachineStatusV2JSON1,
    2: GetLastMachineStatusV2JSON2,
    3: GetLastMachineStatusV2JSON3
  },
  byId: {
    1: GetLastMachineStatusV2JSON1,
    2: GetLastMachineStatusV2JSON2,
    3: GetLastMachineStatusV2JSON3
  },
  default: GetLastMachineStatusV2JSON1
}, { delay: 400 });
