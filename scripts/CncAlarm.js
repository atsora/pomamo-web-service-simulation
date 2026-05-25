// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for CncAlarm/Current?MachineId=<id>.
// Response shape consumed by x-currenticoncncalarm / x-cncalarmbar.
//
// `Focus` drives the icon variant on x-currenticoncncalarm:
//   true     → focused (orange/red)
//   false    → ignored (grey)
//   undefined→ unknown
//
// To change a demo case: edit one of the JSON below, or add a 4th variable
// and link it in the byMachineId map at the bottom.

require('./_helpers');

var CncAlarmJSON1 = {
  DateTime: '{{now}}',
  MachineId: 1,
  ByMachineModule: [{
    MachineModule: { Id: 1, Display: 'Module-1', Main: true },
    CncAlarms: [{
      MachineModuleId: 1,
      DateTime: '{{now}}',
      Display: 'Spindle overheat (4001)',
      Focus: true,
      Color: '#D32F2F',
      Type: 'Error',
      Number: '4001',
      Message: 'Spindle temperature high — operator action required',
      CncInfo: 'Fanuc',
      CncSubInfo: 'Mock',
      Properties: {}
    }]
  }]
};

var CncAlarmJSON2 = {
  DateTime: '{{now}}',
  MachineId: 2,
  ByMachineModule: [{
    MachineModule: { Id: 2, Display: 'Module-2', Main: true },
    CncAlarms: [{
      MachineModuleId: 2,
      DateTime: '{{now}}',
      Display: 'Door open (2010)',
      Focus: false,
      Color: '#9E9E9E',
      Type: 'Warning',
      Number: '2010',
      Message: 'Door open during cycle — ignored after operator override',
      CncInfo: 'Fanuc',
      CncSubInfo: 'Mock',
      Properties: {}
    }]
  }]
};

var CncAlarmJSON3 = {
  DateTime: '{{now}}',
  MachineId: 3,
  ByMachineModule: [{
    MachineModule: { Id: 3, Display: 'Module-3', Main: true },
    CncAlarms: [{
      MachineModuleId: 3,
      DateTime: '{{now}}',
      // Focus omitted on purpose → triggers the "unknown" variant
      Display: 'Probe contact (?)',
      Color: '#607D8B',
      Type: 'Info',
      Number: '7100',
      Message: 'Alarm raised by the controller without a focus annotation',
      CncInfo: 'Fanuc',
      CncSubInfo: 'Mock',
      Properties: {}
    }]
  }]
};

// Default for any other machine id: no alarm.
var CncAlarmJSONDefault = {
  DateTime: '{{now}}',
  ByMachineModule: [{
    MachineModule: { Id: 0, Display: 'Module-?', Main: true },
    CncAlarms: []
  }]
};

MOCK.respond('CncAlarm/Current', {
  byMachineId: {
    1: CncAlarmJSON1,
    2: CncAlarmJSON2,
    3: CncAlarmJSON3
  },
  default: CncAlarmJSONDefault
}, { delay: 300 });
