// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `ReasonColorSlots?MachineId=<id>&Range=<range>` — coloured reason
// slots over the requested range. 6 hand-crafted slots per machine.
//
// `MotionDuration` and `NotRunningDuration` (in seconds) are read by
// x-reasonslotbar to dispatch the `motionChangeEvent` consumed by
// x-motionpercentage. Set them to match the slot palette so the percentage
// label stays in sync with the visible bar.

require('./_helpers');

// Machine 1: 3× green (motion) + 1 yellow + 1 red + 1 orange in an 8h window
// → motion 4h = 14400s, not-running 4h = 14400s → 50% motion.
var ReasonColorSlotsJSON1 = {
  Range: '{{now-8h..now}}',
  MotionDuration: 14400,
  NotRunningDuration: 14400,
  Blocks: [
    { Range: '{{now-8h..now-6h40m}}',    Color: '#2E7D32' },
    { Range: '{{now-6h40m..now-5h20m}}', Color: '#FFC107' },
    { Range: '{{now-5h20m..now-4h}}',    Color: '#2E7D32' },
    { Range: '{{now-4h..now-2h40m}}',    Color: '#D32F2F' },
    { Range: '{{now-2h40m..now-1h20m}}', Color: '#2E7D32' },
    { Range: '{{now-1h20m..now}}',       Color: '#FB8C00' }
  ]
};

// Machine 2: 2× green (5h) + 1 yellow + 1 setup + 1 green (1h) → 6h motion,
// 2h not-running → 75% motion.
var ReasonColorSlotsJSON2 = {
  Range: '{{now-8h..now}}',
  MotionDuration: 21600,
  NotRunningDuration: 7200,
  Blocks: [
    { Range: '{{now-8h..now-4h}}', Color: '#2E7D32' },
    { Range: '{{now-4h..now-3h}}', Color: '#FFC107' },
    { Range: '{{now-3h..now-2h}}', Color: '#2E7D32' },
    { Range: '{{now-2h..now-1h}}', Color: '#7B1FA2' },
    { Range: '{{now-1h..now}}',    Color: '#2E7D32' }
  ]
};

// Machine 3: 1× red + 2× green + 1 yellow + 1 green → 5h motion, 3h not-running → 62.5%.
var ReasonColorSlotsJSON3 = {
  Range: '{{now-8h..now}}',
  MotionDuration: 18000,
  NotRunningDuration: 10800,
  Blocks: [
    { Range: '{{now-8h..now-7h}}', Color: '#D32F2F' },
    { Range: '{{now-7h..now-5h}}', Color: '#2E7D32' },
    { Range: '{{now-5h..now-3h}}', Color: '#FFC107' },
    { Range: '{{now-3h..now}}',    Color: '#2E7D32' }
  ]
};

MOCK.respond('ReasonColorSlots', {
  byMachineId: {
    1: ReasonColorSlotsJSON1,
    2: ReasonColorSlotsJSON2,
    3: ReasonColorSlotsJSON3
  },
  default: ReasonColorSlotsJSON1
}, { delay: 400 });
