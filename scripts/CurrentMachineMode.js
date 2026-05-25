// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `CurrentMachineMode?MachineId=<id>` — minimal machine-mode snapshot.

require('./_helpers');

var CurrentMachineModeJSON1 = {
  DateTime: '{{now}}',
  MachineMode: { Color: '#2E7D32', Category: { Id: 2 }, Running: true }
};

var CurrentMachineModeJSON2 = {
  DateTime: '{{now}}',
  MachineMode: { Color: '#FFC107', Category: { Id: 1 }, Running: false }
};

var CurrentMachineModeJSON3 = {
  DateTime: '{{now}}',
  MachineMode: { Color: '#D32F2F', Category: { Id: 3 }, Running: false }
};

MOCK.respond('CurrentMachineMode', {
  byMachineId: {
    1: CurrentMachineModeJSON1,
    2: CurrentMachineModeJSON2,
    3: CurrentMachineModeJSON3
  },
  default: CurrentMachineModeJSON1
}, { delay: 300 });
