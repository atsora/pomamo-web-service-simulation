// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `IsoFileSlots?MachineId=<id>&Range=<range>` — ISO-file slots
// over the last 8 hours.

require('./_helpers');

var IsoFileSlotsJSON1 = {
  Range: '{{now-8h..now}}',
  IsoFileSlots: [
    { Range: '{{now-8h..now-6h}}', Display: 'IsoFile_A',                       BgColor: '#2E7D32', FgColor: '#FFFFFF' },
    { Range: '{{now-6h..now-4h}}', Display: 'IsoFile_B (long display name)',   BgColor: '#0080FF', FgColor: '#FFFFFF' },
    { Range: '{{now-4h..now-2h}}', Display: 'IsoFile_C',                       BgColor: '#7B1FA2', FgColor: '#FFFFFF' },
    { Range: '{{now-2h..now}}',    Display: 'IsoFile_D',                       BgColor: '#FFC107', FgColor: '#000000' }
  ]
};

var IsoFileSlotsJSON2 = {
  Range: '{{now-8h..now}}',
  IsoFileSlots: [
    { Range: '{{now-8h..now-4h}}', Display: 'IsoFile_A', BgColor: '#2E7D32', FgColor: '#FFFFFF' },
    { Range: '{{now-4h..now}}',    Display: 'IsoFile_B', BgColor: '#0080FF', FgColor: '#FFFFFF' }
  ]
};

var IsoFileSlotsJSON3 = {
  Range: '{{now-8h..now}}',
  IsoFileSlots: [
    { Range: '{{now-8h..now}}', Display: 'IsoFile_LATHE', BgColor: '#7B1FA2', FgColor: '#FFFFFF' }
  ]
};

MOCK.respond('IsoFileSlots', {
  byMachineId: {
    1: IsoFileSlotsJSON1,
    2: IsoFileSlotsJSON2,
    3: IsoFileSlotsJSON3
  },
  default: IsoFileSlotsJSON1
}, { delay: 400 });
