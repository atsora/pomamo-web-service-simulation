// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Machine/Name?MachineId=<id>` and `Machine/Name?GroupId=<id>`.
// One declarative map per key (MachineId / GroupId). The wrapper resolves
// whichever param the caller provided.

require('./_helpers');
require('./scenario');

var GetMachineByMachineId = {
  1: { Id: '1', Display: 'Machine 1',   MonitoredMachine: true  },
  2: { Id: '2', Display: 'Machine 2',   MonitoredMachine: true  },
  3: { Id: '3', Display: 'Machine 3',  MonitoredMachine: true  },
  4: { Id: '4', Display: 'Machine 4', MonitoredMachine: false }
};

var GetMachineByGroupId = {};
GetMachineByGroupId[SCENARIO.MAIN_GROUP]  = { Id: String(SCENARIO.MAIN_GROUP),  Display: 'All machines' };
GetMachineByGroupId[SCENARIO.MILL_GROUP]  = { Id: String(SCENARIO.MILL_GROUP),  Display: 'Milling cell' };
GetMachineByGroupId[SCENARIO.LATHE_GROUP] = { Id: String(SCENARIO.LATHE_GROUP), Display: 'Lathe cell'   };

MOCK.respond('Machine/Name', {
  byMachineId: GetMachineByMachineId,
  byGroupId:   GetMachineByGroupId,
  // Default kicks in for unknown IDs — keeps demos from breaking when they
  // request an ID outside the scenario (e.g. machine 18 from a legacy demo).
  default: { Id: '?', Display: 'Unknown' }
}, { delay: 200 });
