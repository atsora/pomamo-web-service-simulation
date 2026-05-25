// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `ProductionState/ColorSlots?MachineId|GroupId=<id>&Range=<range>`.

require('./_helpers');

var ProductionStateColorSlotsJSON1 = {
  Range: '{{now-8h..now}}',
  Blocks: [
    { Range: '{{now-8h..now-6h}}', Color: '#0080FF' },
    { Range: '{{now-6h..now-5h}}', Color: '#D32F2F' },
    { Range: '{{now-5h..now-3h}}', Color: '#0080FF' },
    { Range: '{{now-3h..now-2h}}', Color: ''        },
    { Range: '{{now-2h..now-1h}}', Color: '#0080FF' },
    { Range: '{{now-1h..now}}',    Color: '#D32F2F' }
  ],
  TotalDuration:          28800,
  ProductionRateDuration: 14400,
  AverageProductionRate:  0.5
};

var ProductionStateColorSlotsJSON2 = {
  Range: '{{now-8h..now}}',
  Blocks: [
    { Range: '{{now-8h..now-2h}}', Color: '#0080FF' },
    { Range: '{{now-2h..now}}',    Color: '#D32F2F' }
  ],
  TotalDuration:          28800,
  ProductionRateDuration: 21600,
  AverageProductionRate:  0.75
};

var ProductionStateColorSlotsJSON3 = {
  Range: '{{now-8h..now}}',
  Blocks: [
    { Range: '{{now-8h..now}}', Color: '#0080FF' }
  ],
  TotalDuration:          28800,
  ProductionRateDuration: 28800,
  AverageProductionRate:  1
};

MOCK.respond('ProductionState/ColorSlots', {
  byMachineId: {
    1: ProductionStateColorSlotsJSON1,
    2: ProductionStateColorSlotsJSON2,
    3: ProductionStateColorSlotsJSON3
  },
  byGroupId: {
    100: ProductionStateColorSlotsJSON1,
    101: ProductionStateColorSlotsJSON1,
    102: ProductionStateColorSlotsJSON3
  },
  default: ProductionStateColorSlotsJSON1
}, { delay: 400 });
