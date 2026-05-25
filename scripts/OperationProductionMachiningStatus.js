// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Operation/ProductionMachiningStatus?MachineId=<id>` — current
// shift counters + work info + events.

require('./_helpers');

MOCK.respond('Operation/ProductionMachiningStatus', {
  byMachineId: {
    1: {
      NbPiecesDoneDuringShift: 48,
      GoalNowShift: 200,
      GoalCurrentShift: 250,
      Day: '2026-05-21',
      Shift: { Id: 2, Display: 'Day shift', Color: '#0080C0' },
      WorkInformations: [
        { Kind: 'WorkOrder', Value: 'WO-1001' },
        { Kind: 'Part',      Value: 'PART-1' },
        { Kind: 'Operation', Value: 'OP-1-A' }
      ],
      ComingEvents: [], ActiveEvents: []
    },
    2: {
      NbPiecesDoneDuringShift: 109,
      GoalNowShift: 200,
      GoalCurrentShift: 250,
      Day: '2026-05-21',
      Shift: { Id: 2, Display: 'Day shift', Color: '#0080C0' },
      WorkInformations: [
        { Kind: 'WorkOrder', Value: 'WO-1002' },
        { Kind: 'Part',      Value: 'PART-2' },
        { Kind: 'Operation', Value: 'OP-2-A' }
      ],
      ComingEvents: [], ActiveEvents: []
    },
    3: {
      NbPiecesDoneDuringShift: 198,
      GoalNowShift: 200,
      GoalCurrentShift: 250,
      Day: '2026-05-21',
      Shift: { Id: 2, Display: 'Day shift', Color: '#0080C0' },
      WorkInformations: [
        { Kind: 'WorkOrder', Value: 'WO-1003' },
        { Kind: 'Part',      Value: 'PART-3' },
        { Kind: 'Operation', Value: 'OP-3-A' }
      ],
      ComingEvents: [], ActiveEvents: []
    }
  },
  default: {
    NbPiecesDoneDuringShift: 0,
    GoalNowShift: 0,
    GoalCurrentShift: 0,
    Day: '2026-05-25',
    Shift: { Id: 2, Display: 'Day shift', Color: '#0080C0' },
    WorkInformations: [],
    ComingEvents: [], ActiveEvents: []
  }
}, { delay: 400 });
