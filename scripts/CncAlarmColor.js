// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `CncAlarm/Color?MachineId=<id>&Range=<range>` — colour slots
// consumed by x-cncalarmbar.

require('./_helpers');

var CncAlarmColorJSON1 = {
  Range: '{{now-8h..now}}',
  Blocks: [
    { Range: '{{now-8h..now-7h}}', Color: '#2E7D32' },
    { Range: '{{now-7h..now-5h}}', Color: '#FFC107' },
    { Range: '{{now-5h..now-3h}}', Color: '#2E7D32' },
    { Range: '{{now-3h..now-2h}}', Color: '#D32F2F' },
    { Range: '{{now-2h..now}}',    Color: '#2E7D32' }
  ]
};

var CncAlarmColorJSON2 = {
  Range: '{{now-8h..now}}',
  Blocks: [
    { Range: '{{now-8h..now-6h}}', Color: '#2E7D32' },
    { Range: '{{now-6h..now-4h}}', Color: '#0080FF' },
    { Range: '{{now-4h..now-2h}}', Color: '#2E7D32' },
    { Range: '{{now-2h..now}}',    Color: '#FFC107' }
  ]
};

var CncAlarmColorJSON3 = {
  Range: '{{now-8h..now}}',
  Blocks: [
    { Range: '{{now-8h..now-1h}}', Color: '#2E7D32' },
    { Range: '{{now-1h..now}}',    Color: '#D32F2F' }
  ]
};

MOCK.respond('CncAlarm/Color', {
  byMachineId: {
    1: CncAlarmColorJSON1,
    2: CncAlarmColorJSON2,
    3: CncAlarmColorJSON3
  },
  default: CncAlarmColorJSON1
}, { delay: 400 });
