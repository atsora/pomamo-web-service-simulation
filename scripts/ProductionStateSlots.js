// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `ProductionStateSlots?MachineId=<id>|GroupId=<gid>&Range=<range>`.

require('./_helpers');

var ProductionStateSlotsJSON1 = {
  Range: '{{now-8h..now}}',
  ProductionStateSlots: [
    { Range: '{{now-8h..now-6h}}', Id: 1, Display: 'Production',    BgColor: '#0080FF', FgColor: '#FFFFFF' },
    { Range: '{{now-6h..now-5h}}', Id: 2, Display: 'No production', BgColor: '#D32F2F', FgColor: '#FFFFFF' },
    { Range: '{{now-5h..now-2h}}', Id: 1, Display: 'Production',    BgColor: '#0080FF', FgColor: '#FFFFFF' },
    { Range: '{{now-2h..now-1h}}', Id: 2, Display: 'No production', BgColor: '#D32F2F', FgColor: '#FFFFFF' },
    { Range: '{{now-1h..now}}',    Id: 1, Display: 'Production',    BgColor: '#0080FF', FgColor: '#FFFFFF' }
  ]
};

var ProductionStateSlotsJSON2 = {
  Range: '{{now-8h..now}}',
  ProductionStateSlots: [
    { Range: '{{now-8h..now-3h}}', Id: 1, Display: 'Production',    BgColor: '#0080FF', FgColor: '#FFFFFF' },
    { Range: '{{now-3h..now}}',    Id: 2, Display: 'No production', BgColor: '#D32F2F', FgColor: '#FFFFFF' }
  ]
};

var ProductionStateSlotsJSON3 = {
  Range: '{{now-8h..now}}',
  ProductionStateSlots: [
    { Range: '{{now-8h..now}}', Id: 1, Display: 'Production', BgColor: '#0080FF', FgColor: '#FFFFFF' }
  ]
};

MOCK.respond('ProductionStateSlots', {
  byMachineId: {
    1: ProductionStateSlotsJSON1,
    2: ProductionStateSlotsJSON2,
    3: ProductionStateSlotsJSON3
  },
  byGroupId: {
    100: ProductionStateSlotsJSON1,
    101: ProductionStateSlotsJSON1,
    102: ProductionStateSlotsJSON3
  },
  default: ProductionStateSlotsJSON1
}, { delay: 400 });
