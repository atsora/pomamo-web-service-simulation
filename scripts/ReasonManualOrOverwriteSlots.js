// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Reason/ManualOrOverwriteSlots?MachineId=<id>&Range=<range>`.

require('./_helpers');

MOCK.respond('Reason/ManualOrOverwriteSlots', {
  byMachineId: {
    1: {
      Range: '{{now-8h..now}}',
      Blocks: [
        { Range: '{{now-5h36m..now-4h24m}}', Color: '#FB8C00', BgColor: '#FB8C00' },
        { Range: '{{now-2h24m..now-1h12m}}', Color: '#7B1FA2', BgColor: '#7B1FA2' }
      ]
    },
    2: {
      Range: '{{now-8h..now}}',
      Blocks: [
        { Range: '{{now-4h..now-3h}}', Color: '#FB8C00', BgColor: '#FB8C00' }
      ]
    },
    3: {
      Range: '{{now-8h..now}}',
      Blocks: []
    }
  },
  default: { Range: '{{now-8h..now}}', Blocks: [] }
}, { delay: 400 });
