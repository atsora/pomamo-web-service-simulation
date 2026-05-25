// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `RunningSlots?MachineId=<id>&Range=<range>` — alternating
// running/not-running slots over an 8-hour window.

require('./_helpers');

// Machine 1: 4× running + 4× not-running alternating → 4h motion / 4h not.
var RunningSlotsJSON1 = {
  Range: '{{now-8h..now}}',
  MotionDuration: 14400,
  NotRunningDuration: 14400,
  TotalDuration: 28800,
  Blocks: [
    { Range: '{{now-8h..now-7h}}', Running: false, NotRunning: true },
    { Range: '{{now-7h..now-6h}}', Running: true,  NotRunning: false },
    { Range: '{{now-6h..now-5h}}', Running: false, NotRunning: true },
    { Range: '{{now-5h..now-4h}}', Running: true,  NotRunning: false },
    { Range: '{{now-4h..now-3h}}', Running: false, NotRunning: true },
    { Range: '{{now-3h..now-2h}}', Running: true,  NotRunning: false },
    { Range: '{{now-2h..now-1h}}', Running: false, NotRunning: true },
    { Range: '{{now-1h..now}}',    Running: true,  NotRunning: false }
  ]
};

// Machine 2: 6h running / 2h not → 75% motion.
var RunningSlotsJSON2 = {
  Range: '{{now-8h..now}}',
  MotionDuration: 21600,
  NotRunningDuration: 7200,
  TotalDuration: 28800,
  Blocks: [
    { Range: '{{now-8h..now-6h}}', Running: true,  NotRunning: false },
    { Range: '{{now-6h..now-5h}}', Running: false, NotRunning: true },
    { Range: '{{now-5h..now-2h}}', Running: true,  NotRunning: false },
    { Range: '{{now-2h..now-1h}}', Running: false, NotRunning: true },
    { Range: '{{now-1h..now}}',    Running: true,  NotRunning: false }
  ]
};

// Machine 3: 5h running / 3h not → 62.5% motion.
var RunningSlotsJSON3 = {
  Range: '{{now-8h..now}}',
  MotionDuration: 18000,
  NotRunningDuration: 10800,
  TotalDuration: 28800,
  Blocks: [
    { Range: '{{now-8h..now-7h}}', Running: false, NotRunning: true },
    { Range: '{{now-7h..now-5h}}', Running: true,  NotRunning: false },
    { Range: '{{now-5h..now-3h}}', Running: false, NotRunning: true },
    { Range: '{{now-3h..now}}',    Running: true,  NotRunning: false }
  ]
};

MOCK.respond('RunningSlots', {
  byMachineId: {
    1: RunningSlotsJSON1,
    2: RunningSlotsJSON2,
    3: RunningSlotsJSON3
  },
  default: RunningSlotsJSON1
}, { delay: 400 });
