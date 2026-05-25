// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Operation/PartProductionRange?MachineId|GroupId=<id>&Range=<range>`.

require('./_helpers');

MOCK.respond('Operation/PartProductionRange', {
  byMachineId: {
    1: { Range: '{{now-1h..now}}', NbPieces: 48,  Goal: 60, InProgress: true },
    2: { Range: '{{now-1h..now}}', NbPieces: 33,  Goal: 60, InProgress: true },
    3: { Range: '{{now-1h..now}}', NbPieces: 57,  Goal: 60, InProgress: true }
  },
  byGroupId: {
    100: { Range: '{{now-1h..now}}', NbPieces: 138, Goal: 180, InProgress: true },
    101: { Range: '{{now-1h..now}}', NbPieces:  81, Goal: 120, InProgress: true },
    102: { Range: '{{now-1h..now}}', NbPieces:  57, Goal:  60, InProgress: true }
  },
  default: { Range: '{{now-1h..now}}', NbPieces: 0, Goal: 60, InProgress: false }
}, { delay: 400 });
