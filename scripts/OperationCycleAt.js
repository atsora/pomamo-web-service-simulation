// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `OperationCycleAt?MachineId=<id>&At=<iso>` — operation cycle
// active at a given instant + the parts it delivered.

require('./_helpers');

MOCK.respond('OperationCycleAt', {
  byMachineId: {
    1: {
      Range: '{{now-25m}};{{now-5m}}',
      EstimatedStart: false,
      EstimatedEnd: false,
      DeliverablePieces: [
        { CountValue: 1, SerialNumber: 'SN-1-A' },
        { CountValue: 1, SerialNumber: 'SN-1-B' }
      ]
    },
    2: {
      Range: '{{now-20m}};{{now-3m}}',
      EstimatedStart: false,
      EstimatedEnd: false,
      DeliverablePieces: [
        { CountValue: 1, SerialNumber: 'SN-2-A' }
      ]
    },
    3: {
      Range: '{{now-18m}};{{now-1m}}',
      EstimatedStart: false,
      EstimatedEnd: false,
      DeliverablePieces: [
        { CountValue: 1, SerialNumber: 'SN-3-A' },
        { CountValue: 1, SerialNumber: 'SN-3-B' },
        { CountValue: 1, SerialNumber: 'SN-3-C' }
      ]
    }
  },
  default: { Range: '{{now-15m}};{{now-1m}}', EstimatedStart: true, EstimatedEnd: true, DeliverablePieces: [] }
}, { delay: 300 });
