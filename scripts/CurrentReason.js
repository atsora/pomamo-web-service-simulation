// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `CurrentReason?MachineId=<id>` — current MachineMode + Reason.
// 3 hand-crafted states per machine:
//   Machine 1  (1) → running (Motion / green)
//   Machine 2  (2) → idle (yellow), stopped 12 min ago
//   Machine 3 (3) → error (red), stopped 12 min ago

require('./_helpers');

var CurrentReasonJSON1 = {
  AutoReasonNumber: 1,
  CurrentDateTime: '{{now}}',
  DateTime: '{{now}}',
  PeriodStart: null,
  MachineMode: { Id: 2, Color: '#2E7D32', Running: true, Category: { Id: 2, Display: 'Active' } },
  Reason: { Id: 2, Display: 'Motion', Color: '#2E7D32', LongDisplay: 'Motion - ', Text: 'Motion' },
  ReasonScore: 90,
  ReasonSource: { UnsafeAutoReasonNumber: false, UnsafeManualFlag: false, Auto: true, Default: true, Manual: false }
};

var CurrentReasonJSON2 = {
  AutoReasonNumber: 1,
  CurrentDateTime: '{{now}}',
  DateTime: '{{now}}',
  PeriodStart: '{{now-12m}}',
  MachineMode: { Id: 1, Color: '#FFC107', Running: false, Category: { Id: 1, Display: 'Inactive' } },
  Reason: { Id: 1, Display: 'Idle', Color: '#FFC107', LongDisplay: 'Idle - ', Text: 'Idle' },
  ReasonScore: 70,
  ReasonSource: { UnsafeAutoReasonNumber: false, UnsafeManualFlag: false, Auto: true, Default: true, Manual: false }
};

var CurrentReasonJSON3 = {
  AutoReasonNumber: 1,
  CurrentDateTime: '{{now}}',
  DateTime: '{{now}}',
  PeriodStart: '{{now-12m}}',
  MachineMode: { Id: 3, Color: '#D32F2F', Running: false, Category: { Id: 3, Display: 'Error' } },
  Reason: { Id: 3, Display: 'Error', Color: '#D32F2F', LongDisplay: 'Error - ', Text: 'Error' },
  ReasonScore: 60,
  ReasonSource: { UnsafeAutoReasonNumber: false, UnsafeManualFlag: false, Auto: true, Default: false, Manual: false }
};

MOCK.respond('CurrentReason', {
  byMachineId: {
    1: CurrentReasonJSON1,
    2: CurrentReasonJSON2,
    3: CurrentReasonJSON3
  },
  // Fall back to idle so demos that ask for unknown IDs still render something.
  default: CurrentReasonJSON2
}, { delay: 200 });
