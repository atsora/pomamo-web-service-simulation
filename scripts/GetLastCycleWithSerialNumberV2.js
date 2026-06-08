// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `GetLastCycleWithSerialNumberV2/<machineId>` — last completed
// cycle. The machine id sits at the path end (no query param).

require('./_helpers');

MOCK.respond('GetLastCycleWithSerialNumberV2', {
  byMachineId: {
    1: {
      Begin: '{{now-15m}}', End: '{{now-2m}}',
      EstimatedBegin: false, EstimatedEnd: false,
      CycleId: 600001, SerialNumber: 'SN-1-0013', DataMissing: false
    },
    2: {
      Begin: '{{now-12m}}', End: '{{now-1m}}',
      EstimatedBegin: false, EstimatedEnd: false,
      CycleId: 600002, SerialNumber: 'SN-2-0026', DataMissing: false
    },
    3: {
      Begin: '{{now-20m}}', End: '{{now-3m}}',
      EstimatedBegin: false, EstimatedEnd: false,
      CycleId: 600003, SerialNumber: 'SN-3-0039', DataMissing: false
    }
  },
  default: { DataMissing: true }
}, { delay: 300 });
