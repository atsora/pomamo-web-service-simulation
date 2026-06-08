// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Machine/Pie?MachineId=<id>` (or `GroupId=<id>`).
// Tells the dashboard which pie variant to use for a given machine/group.

require('./_helpers');

var MachinePieCycle = { Permanent: true, PieType: 'cycleprogresspie' };
var MachinePiePart  = { Permanent: true, PieType: 'partproductionstatuspie' };

MOCK.respond('Machine/Pie', {
  byMachineId: {
    1: MachinePieCycle, // Machine 1 → cycle progress
    2: MachinePiePart,  // Machine 2 → part production status
    3: MachinePieCycle  // Machine 3 → cycle progress
  },
  byGroupId: {
    100: MachinePiePart,
    101: MachinePieCycle,
    102: MachinePieCycle
  },
  default: MachinePieCycle
}, { delay: 200 });
