// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `CurrentMachineStateTemplateOperation?MachineId=<id>` — name of
// the running operation and its state template.

require('./_helpers');

MOCK.respond('CurrentMachineStateTemplateOperation', {
  byMachineId: {
    1: {
      MachineStateTemplate: { Id: 7 },
      Operation: { Display: 'OP-1042 Roughing' },
      Since: '{{now-45m}}'
    },
    2: {
      MachineStateTemplate: { Id: 7 },
      Operation: { Display: 'OP-1042 Finishing' },
      Since: '{{now-45m}}'
    },
    3: {
      MachineStateTemplate: { Id: 7 },
      Operation: { Display: 'OP-2200 Turning' },
      Since: '{{now-45m}}'
    }
  },
  default: {
    MachineStateTemplate: { Id: 7 },
    Operation: { Display: '' },
    Since: '{{now-45m}}'
  }
}, { delay: 300 });
