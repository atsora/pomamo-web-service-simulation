// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `CncValueAt?MachineId=<id>&At=<iso>` — CNC field readings at a
// given instant.

require('./_helpers');

MOCK.respond('CncValueAt', {
  byMachineId: {
    1: {
      At: '{{now}}',
      ByMachineModule: [{
        MachineModule: { Id: 1, Display: 'Module-1', Main: true },
        ByField: [
          { Field: { Id: 101, Display: 'Spindle speed (RPM)' },   Value: 2750, Color: '#2B60DE', PerformanceField: true  },
          { Field: { Id: 109, Display: 'Program name' },          Value: 'PROG_1.NC', Color: '', PerformanceField: false },
          { Field: { Id: 170, Display: 'Execution mode' },        Value: 'Automatic', Color: '', PerformanceField: false },
          { Field: { Id: 103, Display: 'Feedrate override (%)' }, Value: 100, Color: '#2E7D32', PerformanceField: false }
        ]
      }]
    },
    2: {
      At: '{{now}}',
      ByMachineModule: [{
        MachineModule: { Id: 2, Display: 'Module-2', Main: true },
        ByField: [
          { Field: { Id: 101, Display: 'Spindle speed (RPM)' },   Value: 3000, Color: '#2B60DE', PerformanceField: true  },
          { Field: { Id: 109, Display: 'Program name' },          Value: 'PROG_2.NC', Color: '', PerformanceField: false },
          { Field: { Id: 170, Display: 'Execution mode' },        Value: 'Manual',    Color: '#FFC107', PerformanceField: false },
          { Field: { Id: 103, Display: 'Feedrate override (%)' }, Value: 80,          Color: '#FFC107', PerformanceField: false }
        ]
      }]
    },
    3: {
      At: '{{now}}',
      ByMachineModule: [{
        MachineModule: { Id: 3, Display: 'Module-3', Main: true },
        ByField: [
          { Field: { Id: 101, Display: 'Spindle speed (RPM)' },   Value: 1200, Color: '#2B60DE', PerformanceField: true  },
          { Field: { Id: 109, Display: 'Program name' },          Value: 'PROG_3.MPF', Color: '', PerformanceField: false },
          { Field: { Id: 170, Display: 'Execution mode' },        Value: 'Automatic',  Color: '', PerformanceField: false },
          { Field: { Id: 103, Display: 'Feedrate override (%)' }, Value: 100,          Color: '#2E7D32', PerformanceField: false }
        ]
      }]
    }
  },
  default: { At: '{{now}}', ByMachineModule: [] }
}, { delay: 400 });
