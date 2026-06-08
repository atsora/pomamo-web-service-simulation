// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `CncAlarm/At?MachineId=<id>&At=<iso>` — alarms active at a given
// instant.

require('./_helpers');

var CncAlarmAtJSON1 = {
  At: '{{now}}',
  ByMachineModule: [{
    MachineModule: { Id: 1, Display: 'Module-1', Main: true },
    CncAlarms: [{
      Range: '{{now-5m..now+5m}}',
      Display: 'MACHINE STOPPED', Color: '#D32F2F',
      CncInfo: 'Mock', Type: 'CRITICAL', Number: '4',
      Message: 'Mock alarm: machine stopped',
      Properties: {},
      Severity: 'Critical', SeverityDescription: '',
      Stop: 'Yes', Focus: true
    }]
  }]
};

var CncAlarmAtJSON2 = {
  At: '{{now}}',
  ByMachineModule: [{
    MachineModule: { Id: 2, Display: 'Module-2', Main: true },
    CncAlarms: [{
      Range: '{{now-15m..now+5m}}',
      Display: 'Door open', Color: '#9E9E9E',
      CncInfo: 'Mock', Type: 'Warning', Number: '2010',
      Message: 'Door open during cycle',
      Properties: {},
      Severity: 'Warning', SeverityDescription: '',
      Stop: 'No', Focus: false
    }]
  }]
};

var CncAlarmAtJSON3 = {
  At: '{{now}}',
  ByMachineModule: [{
    MachineModule: { Id: 3, Display: 'Module-3', Main: true },
    CncAlarms: []
  }]
};

MOCK.respond('CncAlarm/At', {
  byMachineId: {
    1: CncAlarmAtJSON1,
    2: CncAlarmAtJSON2,
    3: CncAlarmAtJSON3
  },
  default: CncAlarmAtJSON3
}, { delay: 400 });
