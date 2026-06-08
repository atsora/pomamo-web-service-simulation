// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `ToolLivesByMachine?MachineId=<id>` — tool life status for the
// currently mounted tools on the machine's main module.

require('./_helpers');

var ToolLivesByMachineJSON1 = {
  Operation: { Id: 1001, Display: 'OP-1' },
  Tools: [
    { Group: false, Display: 'T1', ToolNumber: 1, RemainingCycles: 22, ExpirationDateTimeRange: '{{now+22m..now+28m}}', Expired: false, Warning: false, ActiveSisterTool: false, ValidSisterTools: false },
    { Group: false, Display: 'T2', ToolNumber: 2, RemainingCycles: 8,  ExpirationDateTimeRange: '{{now+8m..now+14m}}',  Expired: false, Warning: true,  ActiveSisterTool: false, ValidSisterTools: false },
    { Group: false, Display: 'T3', ToolNumber: 3, RemainingCycles: 0,  ExpirationDateTimeRange: '{{now-1m..now+5m}}',    Expired: true,  Warning: false, ActiveSisterTool: false, ValidSisterTools: false },
    { Group: false, Display: 'T7', ToolNumber: 7, RemainingCycles: 45, ExpirationDateTimeRange: '{{now+45m..now+51m}}', Expired: false, Warning: false, ActiveSisterTool: false, ValidSisterTools: false }
  ],
  DateTime: '{{now}}'
};

var ToolLivesByMachineJSON2 = {
  Operation: { Id: 1002, Display: 'OP-2' },
  Tools: [
    { Group: false, Display: 'T1', ToolNumber: 1, RemainingCycles: 50, ExpirationDateTimeRange: '{{now+50m..now+56m}}', Expired: false, Warning: false, ActiveSisterTool: false, ValidSisterTools: false },
    { Group: false, Display: 'T5', ToolNumber: 5, RemainingCycles: 12, ExpirationDateTimeRange: '{{now+12m..now+18m}}', Expired: false, Warning: false, ActiveSisterTool: false, ValidSisterTools: false }
  ],
  DateTime: '{{now}}'
};

var ToolLivesByMachineJSON3 = {
  Operation: { Id: 1003, Display: 'OP-3' },
  Tools: [
    { Group: false, Display: 'TURN-A', ToolNumber: 11, RemainingCycles: 5,  ExpirationDateTimeRange: '{{now+5m..now+11m}}',  Expired: false, Warning: true,  ActiveSisterTool: false, ValidSisterTools: false },
    { Group: false, Display: 'TURN-B', ToolNumber: 12, RemainingCycles: 0,  ExpirationDateTimeRange: '{{now-1m..now+5m}}',    Expired: true,  Warning: false, ActiveSisterTool: false, ValidSisterTools: false }
  ],
  DateTime: '{{now}}'
};

MOCK.respond('ToolLivesByMachine', {
  byMachineId: {
    1: ToolLivesByMachineJSON1,
    2: ToolLivesByMachineJSON2,
    3: ToolLivesByMachineJSON3
  },
  default: { Operation: null, Tools: [], DateTime: '{{now}}' }
}, { delay: 400 });
