// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `ObservationStateSlots?MachineId=<id>&Range=<range>`.

require('./_helpers');

var ObservationStateSlotsJSON1 = {
  ObservationStateSlots: [
    { Range: '{{now-8h..now-6h}}', Id: 1, Display: 'Production',  BgColor: '#2E7D32', FgColor: '#FFFFFF', PatternColor: '#888888' },
    { Range: '{{now-6h..now-4h}}', Id: 2, Display: 'Setup',       BgColor: '#7B1FA2', FgColor: '#FFFFFF', PatternColor: '#CCCCCC' },
    { Range: '{{now-4h..now}}',    Id: 1, Display: 'Production',  BgColor: '#2E7D32', FgColor: '#FFFFFF', PatternColor: '#888888' }
  ]
};

var ObservationStateSlotsJSON2 = {
  ObservationStateSlots: [
    { Range: '{{now-8h..now-2h}}', Id: 1, Display: 'Production',  BgColor: '#2E7D32', FgColor: '#FFFFFF', PatternColor: '#888888' },
    { Range: '{{now-2h..now}}',    Id: 3, Display: 'Maintenance', BgColor: '#FFC107', FgColor: '#000000', PatternColor: '#888888' }
  ]
};

var ObservationStateSlotsJSON3 = {
  ObservationStateSlots: [
    { Range: '{{now-8h..now}}', Id: 1, Display: 'Production', BgColor: '#2E7D32', FgColor: '#FFFFFF', PatternColor: '#888888' }
  ]
};

MOCK.respond('ObservationStateSlots', {
  byMachineId: {
    1: ObservationStateSlotsJSON1,
    2: ObservationStateSlotsJSON2,
    3: ObservationStateSlotsJSON3
  },
  default: ObservationStateSlotsJSON1
}, { delay: 400 });
