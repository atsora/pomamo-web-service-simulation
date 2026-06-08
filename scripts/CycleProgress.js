// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for CycleProgress?MachineId=<id>&Light=true&IncludeEvents=true.
// Consumed by x-cycleprogressbar, x-cycleprogresspie, x-currenticonnextstop,
// x-currentsequence, x-rotationprogress.
//
// 3 hand-crafted scenarios per machine:
//   Machine 1  (1) → in SEQ2 (Drilling), active stop event (Error severity)
//   Machine 2  (2) → in SEQ3 (Finishing), imminent coming stop in 90 s (Warning, < threshold2)
//   Machine 3 (3) → in SEQ4 (Inspection), coming stop in 7 min (Warning, above thresholds)

require('./_helpers');

var CycleProgressJSON1 = {
  ConfigGroup: 'main',
  Operation: { Id: 1001, Display: 'OP-1001' },
  EstimatedCycleEndDateTime: '{{now+8m}}',
  ActiveSeconds: 240,
  EstimatedAdditionalEndDateTime: '{{now+10m}}',
  Completion: 0.33,
  ConfigKey: '',
  EstimatedNextStopDateTime: null,
  NbCyclesDone: 9,
  NbCyclesGoal: 20,
  NoEffectiveOperation: false,
  InvalidCycle: false,
  ByMachineModule: [{
    MachineModule: { Id: 1, Display: 'Module-1', Main: true },
    Current: {
      Id: 2, Order: 2, Display: 'SEQ2: Drilling', Kind: 'Machining',
      StandardDuration: 180, IsCurrent: true, IsCompleted: false,
      BeginPercent: 0.25, EndPercent: 0.5,
      Completion: 0.5,
      Begin: '{{now-3m}}'
    },
    Sequences: [
      { Id: 1, Order: 1, Display: 'SEQ1: Roughing',  Kind: 'Machining', StandardDuration: 240, IsCurrent: false, IsCompleted: true,  BeginPercent: 0,    EndPercent: 0.25 },
      { Id: 2, Order: 2, Display: 'SEQ2: Drilling',  Kind: 'Machining', StandardDuration: 180, IsCurrent: true,  IsCompleted: false, BeginPercent: 0.25, EndPercent: 0.5 },
      { Id: 3, Order: 3, Display: 'SEQ3: Finishing', Kind: 'Machining', StandardDuration: 240, IsCurrent: false, IsCompleted: false, BeginPercent: 0.5,  EndPercent: 0.75 },
      { Id: 4, Order: 4, Display: 'SEQ4: Inspection', Kind: 'Stop',     StandardDuration: 60,  IsCurrent: false, IsCompleted: false, BeginPercent: 0.75, EndPercent: 1 }
    ],
    ActiveEvents: [{
      DateTime: '{{now-4m}}',
      Severity: { Id: 4, LevelName: 'Error', LevelValue: 4, Display: 'Error' },
      Message: 'Operator action required'
    }],
    ComingEvents: []
  }],
  ActiveEvents: [{
    DateTime: '{{now-4m}}',
    Severity: { Id: 4, LevelName: 'Error', LevelValue: 4, Display: 'Error' },
    Message: 'Operator action required'
  }],
  ComingEvents: []
};

var CycleProgressJSON2 = {
  ConfigGroup: 'main',
  Operation: { Id: 1002, Display: 'OP-1002' },
  EstimatedCycleEndDateTime: '{{now+5m}}',
  ActiveSeconds: 420,
  EstimatedAdditionalEndDateTime: '{{now+7m}}',
  Completion: 0.58,
  ConfigKey: '',
  EstimatedNextStopDateTime: '{{now+90s}}',
  NbCyclesDone: 10,
  NbCyclesGoal: 20,
  NoEffectiveOperation: false,
  InvalidCycle: false,
  ByMachineModule: [{
    MachineModule: { Id: 2, Display: 'Module-2', Main: true },
    Current: {
      Id: 3, Order: 3, Display: 'SEQ3: Finishing', Kind: 'Machining',
      StandardDuration: 240, IsCurrent: true, IsCompleted: false,
      BeginPercent: 0.5, EndPercent: 0.75,
      Completion: 0.5,
      Begin: '{{now-3m}}'
    },
    Sequences: [
      { Id: 1, Order: 1, Display: 'SEQ1: Roughing',  Kind: 'Machining', StandardDuration: 240, IsCurrent: false, IsCompleted: true,  BeginPercent: 0,    EndPercent: 0.25 },
      { Id: 2, Order: 2, Display: 'SEQ2: Drilling',  Kind: 'Machining', StandardDuration: 180, IsCurrent: false, IsCompleted: true,  BeginPercent: 0.25, EndPercent: 0.5 },
      { Id: 3, Order: 3, Display: 'SEQ3: Finishing', Kind: 'Machining', StandardDuration: 240, IsCurrent: true,  IsCompleted: false, BeginPercent: 0.5,  EndPercent: 0.75 },
      { Id: 4, Order: 4, Display: 'SEQ4: Inspection', Kind: 'Stop',     StandardDuration: 60,  IsCurrent: false, IsCompleted: false, BeginPercent: 0.75, EndPercent: 1 }
    ],
    ActiveEvents: [],
    ComingEvents: [{
      DateTime: '{{now+90s}}',
      Severity: { Id: 3, LevelName: 'Warning', LevelValue: 3, Display: 'Warning' },
      Message: 'Setup change required'
    }]
  }],
  ActiveEvents: [],
  ComingEvents: [{
    DateTime: '{{now+90s}}',
    Severity: { Id: 3, LevelName: 'Warning', LevelValue: 3, Display: 'Warning' },
    Message: 'Setup change required'
  }]
};

var CycleProgressJSON3 = {
  ConfigGroup: 'main',
  Operation: { Id: 1003, Display: 'OP-1003' },
  EstimatedCycleEndDateTime: '{{now+1m}}',
  ActiveSeconds: 660,
  EstimatedAdditionalEndDateTime: '{{now+3m}}',
  Completion: 0.92,
  ConfigKey: '',
  EstimatedNextStopDateTime: '{{now+7m}}',
  NbCyclesDone: 11,
  NbCyclesGoal: 20,
  NoEffectiveOperation: false,
  InvalidCycle: false,
  ByMachineModule: [{
    MachineModule: { Id: 3, Display: 'Module-3', Main: true },
    Current: {
      Id: 4, Order: 4, Display: 'SEQ4: Inspection', Kind: 'Stop',
      StandardDuration: 60, IsCurrent: true, IsCompleted: false,
      BeginPercent: 0.75, EndPercent: 1,
      Completion: 0.5,
      Begin: '{{now-3m}}'
    },
    Sequences: [
      { Id: 1, Order: 1, Display: 'SEQ1: Roughing',  Kind: 'Machining', StandardDuration: 240, IsCurrent: false, IsCompleted: true, BeginPercent: 0,    EndPercent: 0.25 },
      { Id: 2, Order: 2, Display: 'SEQ2: Drilling',  Kind: 'Machining', StandardDuration: 180, IsCurrent: false, IsCompleted: true, BeginPercent: 0.25, EndPercent: 0.5 },
      { Id: 3, Order: 3, Display: 'SEQ3: Finishing', Kind: 'Machining', StandardDuration: 240, IsCurrent: false, IsCompleted: true, BeginPercent: 0.5,  EndPercent: 0.75 },
      { Id: 4, Order: 4, Display: 'SEQ4: Inspection', Kind: 'Stop',     StandardDuration: 60,  IsCurrent: true,  IsCompleted: false, BeginPercent: 0.75, EndPercent: 1 }
    ],
    ActiveEvents: [],
    ComingEvents: [{
      DateTime: '{{now+7m}}',
      Severity: { Id: 3, LevelName: 'Warning', LevelValue: 3, Display: 'Warning' },
      Message: 'Tool change scheduled'
    }]
  }],
  ActiveEvents: [],
  ComingEvents: [{
    DateTime: '{{now+7m}}',
    Severity: { Id: 3, LevelName: 'Warning', LevelValue: 3, Display: 'Warning' },
    Message: 'Tool change scheduled'
  }]
};

// Default for Machine 4 (id 4) and any other unknown machine: idle, no events.
var CycleProgressDefault = {
  ConfigGroup: 'main',
  Operation: null,
  EstimatedCycleEndDateTime: null,
  ActiveSeconds: 0,
  EstimatedAdditionalEndDateTime: null,
  Completion: 0,
  ConfigKey: '',
  EstimatedNextStopDateTime: null,
  NbCyclesDone: 0,
  NbCyclesGoal: 0,
  NoEffectiveOperation: true,
  InvalidCycle: false,
  ByMachineModule: [],
  ActiveEvents: [],
  ComingEvents: []
};

MOCK.respond('CycleProgress', {
  byMachineId: {
    1: CycleProgressJSON1,
    2: CycleProgressJSON2,
    3: CycleProgressJSON3
  },
  default: CycleProgressDefault
}, { delay: 400 });
