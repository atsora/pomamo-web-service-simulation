// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `OperationProgress?MachineId=<id>` — full operation progress with
// sequences + active/coming events.

require('./_helpers');

var OperationProgressJSON1 = {
  DataTime: '{{now}}',
  Operation: { Id: 9001, Display: 'OP-1', MachiningDuration: 2000, UnloadingLoadingDuration: 60 },
  ByMachineModule: [{
    MachineModule: { Id: 1, Display: 'Module-1', Main: true },
    Current: {
      Id: 3, Order: 3, Display: 'SEQ3: Finishing', Kind: 'Machining',
      StandardDuration: 700, IsCurrent: true, IsCompleted: false,
      BeginPercent: 0.6, EndPercent: 0.9,
      Completion: 0.7, Begin: '{{now-8m}}'
    },
    Sequences: [
      { Id: 1, Order: 1, Display: 'SEQ1: Roughing',  Kind: 'Machining', StandardDuration: 600, IsCurrent: false, IsCompleted: true,  BeginPercent: 0,   EndPercent: 0.3 },
      { Id: 2, Order: 2, Display: 'SEQ2: Drilling',  Kind: 'Machining', StandardDuration: 500, IsCurrent: false, IsCompleted: true,  BeginPercent: 0.3, EndPercent: 0.6 },
      { Id: 3, Order: 3, Display: 'SEQ3: Finishing', Kind: 'Machining', StandardDuration: 700, IsCurrent: true,  IsCompleted: false, BeginPercent: 0.6, EndPercent: 0.9 },
      { Id: 4, Order: 4, Display: 'SEQ4: Inspection', Kind: 'Stop',     StandardDuration: 200, IsCurrent: false, IsCompleted: false, BeginPercent: 0.9, EndPercent: 1.0 }
    ]
  }],
  ComingEvents: [{ Message: 'END in', DateTime: '{{now+8m}}', Severity: { Name: 'Info', LevelName: 'Info', LevelValue: 80 } }],
  ActiveEvents: [],
  OperationStartDateTime: '{{now-25m}}',
  EstimatedOperationEndDateTime: '{{now+10m}}',
  EstimatedCycleEndDateTime: '{{now+10m}}',
  Completion: 0.65,
  Errors: [], Warnings: [], Notices: [],
  Running: true
};

var OperationProgressJSON2 = {
  DataTime: '{{now}}',
  Operation: { Id: 9002, Display: 'OP-2', MachiningDuration: 1500, UnloadingLoadingDuration: 90 },
  ByMachineModule: [{
    MachineModule: { Id: 2, Display: 'Module-2', Main: true },
    Current: {
      Id: 2, Order: 2, Display: 'SEQ2: Drilling', Kind: 'Machining',
      StandardDuration: 400, IsCurrent: true, IsCompleted: false,
      BeginPercent: 0.3, EndPercent: 0.6,
      Completion: 0.3, Begin: '{{now-4m}}'
    },
    Sequences: [
      { Id: 1, Order: 1, Display: 'SEQ1: Roughing',  Kind: 'Machining', StandardDuration: 500, IsCurrent: false, IsCompleted: true,  BeginPercent: 0,   EndPercent: 0.3 },
      { Id: 2, Order: 2, Display: 'SEQ2: Drilling',  Kind: 'Machining', StandardDuration: 400, IsCurrent: true,  IsCompleted: false, BeginPercent: 0.3, EndPercent: 0.6 },
      { Id: 3, Order: 3, Display: 'SEQ3: Finishing', Kind: 'Machining', StandardDuration: 500, IsCurrent: false, IsCompleted: false, BeginPercent: 0.6, EndPercent: 0.9 },
      { Id: 4, Order: 4, Display: 'SEQ4: Inspection', Kind: 'Stop',     StandardDuration: 100, IsCurrent: false, IsCompleted: false, BeginPercent: 0.9, EndPercent: 1.0 }
    ]
  }],
  ComingEvents: [],
  ActiveEvents: [],
  OperationStartDateTime: '{{now-12m}}',
  EstimatedOperationEndDateTime: '{{now+22m}}',
  EstimatedCycleEndDateTime: '{{now+22m}}',
  Completion: 0.35,
  Errors: [], Warnings: [], Notices: [],
  Running: true
};

var OperationProgressJSON3 = {
  DataTime: '{{now}}',
  Operation: { Id: 9003, Display: 'OP-3', MachiningDuration: 2400, UnloadingLoadingDuration: 60 },
  ByMachineModule: [{
    MachineModule: { Id: 3, Display: 'Module-3', Main: true },
    Current: {
      Id: 4, Order: 4, Display: 'SEQ4: Inspection', Kind: 'Stop',
      StandardDuration: 200, IsCurrent: true, IsCompleted: false,
      BeginPercent: 0.9, EndPercent: 1.0,
      Completion: 0.4, Begin: '{{now-2m}}'
    },
    Sequences: [
      { Id: 1, Order: 1, Display: 'SEQ1: Roughing',  Kind: 'Machining', StandardDuration: 600, IsCurrent: false, IsCompleted: true,  BeginPercent: 0,   EndPercent: 0.3 },
      { Id: 2, Order: 2, Display: 'SEQ2: Drilling',  Kind: 'Machining', StandardDuration: 500, IsCurrent: false, IsCompleted: true,  BeginPercent: 0.3, EndPercent: 0.6 },
      { Id: 3, Order: 3, Display: 'SEQ3: Finishing', Kind: 'Machining', StandardDuration: 700, IsCurrent: false, IsCompleted: true,  BeginPercent: 0.6, EndPercent: 0.9 },
      { Id: 4, Order: 4, Display: 'SEQ4: Inspection', Kind: 'Stop',     StandardDuration: 200, IsCurrent: true,  IsCompleted: false, BeginPercent: 0.9, EndPercent: 1.0 }
    ]
  }],
  ComingEvents: [{ Message: 'END in', DateTime: '{{now+2m}}', Severity: { Name: 'Warning', LevelName: 'Warning', LevelValue: 60 } }],
  ActiveEvents: [],
  OperationStartDateTime: '{{now-38m}}',
  EstimatedOperationEndDateTime: '{{now+2m}}',
  EstimatedCycleEndDateTime: '{{now+2m}}',
  Completion: 0.93,
  Errors: [], Warnings: [], Notices: [],
  Running: true
};

MOCK.respond('OperationProgress', {
  byMachineId: {
    1: OperationProgressJSON1,
    2: OperationProgressJSON2,
    3: OperationProgressJSON3
  },
  default: OperationProgressJSON1
}, { delay: 400 });
