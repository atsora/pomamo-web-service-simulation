// Copyright (C) 2025 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Reason/OverwriteRequiredSlots?MachineId=<id>&Range=<range>`.

require('./_helpers');

MOCK.respond('Reason/OverwriteRequiredSlots', {
  byMachineId: {
    1: {
      Range: '{{now-8h..now}}',
      Blocks: [
        { Range: '{{now-3h36m..now-2h48m}}', Color: '#D32F2F', BgColor: '#D32F2F' }
      ]
    },
    2: {
      Range: '{{now-8h..now}}',
      Blocks: []
    },
    3: {
      Range: '{{now-8h..now}}',
      Blocks: [
        { Range: '{{now-4h..now-3h12m}}', Color: '#D32F2F', BgColor: '#D32F2F' }
      ]
    }
  },
  default: { Range: '{{now-8h..now}}', Blocks: [] }
}, { delay: 400 });
