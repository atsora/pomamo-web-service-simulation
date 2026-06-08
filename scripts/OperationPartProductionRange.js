// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Operation/PartProductionRange?MachineId|GroupId=<id>&Range=<range>`.

require('./_helpers');

// The endpoint is GroupId-based: x-detailedpartsat sends `?GroupId=<machine-id>`
// (the `machine-id` attribute name is legacy). We register the per-machine payloads
// under BOTH byMachineId and byGroupId so callers using either form match.
var BY_ID = {
  1: { Range: '{{now-1h..now}}', NbPieces: 48,  Goal: 60, InProgress: true },
  2: { Range: '{{now-1h..now}}', NbPieces: 33,  Goal: 60, InProgress: true },
  3: { Range: '{{now-1h..now}}', NbPieces: 57,  Goal: 60, InProgress: true }
};
var BY_GROUP = {
  1: BY_ID[1], 2: BY_ID[2], 3: BY_ID[3],
  100: { Range: '{{now-1h..now}}', NbPieces: 138, Goal: 180, InProgress: true },
  101: { Range: '{{now-1h..now}}', NbPieces:  81, Goal: 120, InProgress: true },
  102: { Range: '{{now-1h..now}}', NbPieces:  57, Goal:  60, InProgress: true }
};

MOCK.respond('Operation/PartProductionRange', {
  byMachineId: BY_ID,
  byGroupId: BY_GROUP,
  default: { Range: '{{now-1h..now}}', NbPieces: 0, Goal: 60, InProgress: false }
}, { delay: 400 });
