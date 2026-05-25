// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `MachineStateTemplateSlots?MachineId=<id>&Range=<range>`.

require('./_helpers');

var MachineStateTemplateSlotsJSON1 = {
  MachineStateTemplateSlots: [
    { Range: '{{now-8h..now-4h}}', Id: 1, Display: 'Production',  BgColor: '#2E7D32', FgColor: '#FFFFFF' },
    { Range: '{{now-4h..now-2h}}', Id: 2, Display: 'Maintenance', BgColor: '#FFC107', FgColor: '#000000', PatternName: 'dots-3',            PatternColor: '#ededed' },
    { Range: '{{now-2h..now}}',    Id: 1, Display: 'Production',  BgColor: '#2E7D32', FgColor: '#FFFFFF' }
  ]
};

var MachineStateTemplateSlotsJSON2 = {
  MachineStateTemplateSlots: [
    { Range: '{{now-8h..now-1h}}', Id: 1, Display: 'Production',  BgColor: '#2E7D32', FgColor: '#FFFFFF' },
    { Range: '{{now-1h..now}}',    Id: 3, Display: 'Off',         BgColor: '#9E9E9E', FgColor: '#FFFFFF', PatternName: 'diagonal-stripe-1', PatternColor: '#ededed' }
  ]
};

var MachineStateTemplateSlotsJSON3 = {
  MachineStateTemplateSlots: [
    { Range: '{{now-8h..now}}', Id: 1, Display: 'Production', BgColor: '#2E7D32', FgColor: '#FFFFFF' }
  ]
};

MOCK.respond('MachineStateTemplateSlots', {
  byMachineId: {
    1: MachineStateTemplateSlotsJSON1,
    2: MachineStateTemplateSlotsJSON2,
    3: MachineStateTemplateSlotsJSON3
  },
  default: MachineStateTemplateSlotsJSON1
}, { delay: 400 });
