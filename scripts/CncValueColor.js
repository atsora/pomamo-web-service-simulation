// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `CncValueColor?MachineId=<id>&Range=<range>` — colour slots
// consumed by x-cncvaluebar.

require('./_helpers');

var CncValueColorJSON1 = {
  Range: '{{now-8h..now}}',
  Blocks: [
    { Range: '{{now-8h..now-6h}}', Color: '#2E7D32' },
    { Range: '{{now-6h..now-5h}}', Color: '#FFC107' },
    { Range: '{{now-5h..now-2h}}', Color: '#2E7D32' },
    { Range: '{{now-2h..now-1h}}', Color: '#D32F2F' },
    { Range: '{{now-1h..now}}',    Color: '#2E7D32' }
  ]
};

var CncValueColorJSON2 = {
  Range: '{{now-8h..now}}',
  Blocks: [
    { Range: '{{now-8h..now-3h}}', Color: '#2E7D32' },
    { Range: '{{now-3h..now-1h}}', Color: '#FFC107' },
    { Range: '{{now-1h..now}}',    Color: '#2E7D32' }
  ]
};

var CncValueColorJSON3 = {
  Range: '{{now-8h..now}}',
  Blocks: [
    { Range: '{{now-8h..now}}', Color: '#2E7D32' }
  ]
};

MOCK.respond('CncValueColor', {
  byMachineId: {
    1: CncValueColorJSON1,
    2: CncValueColorJSON2,
    3: CncValueColorJSON3
  },
  default: CncValueColorJSON1
}, { delay: 300 });
