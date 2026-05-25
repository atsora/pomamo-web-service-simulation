// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `GetCyclesWithWorkInformationsInPeriodV2?Id=<id>&Range=<range>` —
// 1-5 cycles with their work info across the last 4 hours.

require('./_helpers');

var GetCyclesWIPJSON1 = {
  Begin: '{{now-4h}}', End: '{{now}}',
  List: [
    { CycleId: 7010, Range: '{{now-4h..now-3h12m}}',    SerialNumber: 'SN-1-1', WorkInformations: [{ Kind: 'WorkOrder', Value: 'WO-10' }, { Kind: 'Part', Value: 'PART-1' }, { Kind: 'Operation', Value: 'OP-1-1' }] },
    { CycleId: 7011, Range: '{{now-3h12m..now-2h24m}}', SerialNumber: 'SN-1-2', WorkInformations: [{ Kind: 'WorkOrder', Value: 'WO-11' }, { Kind: 'Part', Value: 'PART-1' }, { Kind: 'Operation', Value: 'OP-1-2' }] },
    { CycleId: 7012, Range: '{{now-2h24m..now-1h36m}}', SerialNumber: 'SN-1-3', WorkInformations: [{ Kind: 'WorkOrder', Value: 'WO-12' }, { Kind: 'Part', Value: 'PART-1' }, { Kind: 'Operation', Value: 'OP-1-3' }] },
    { CycleId: 7013, Range: '{{now-1h36m..now-48m}}',   SerialNumber: 'SN-1-4', WorkInformations: [{ Kind: 'WorkOrder', Value: 'WO-13' }, { Kind: 'Part', Value: 'PART-1' }, { Kind: 'Operation', Value: 'OP-1-4' }] },
    { CycleId: 7014, Range: '{{now-48m..now}}',         SerialNumber: 'SN-1-5', WorkInformations: [{ Kind: 'WorkOrder', Value: 'WO-14' }, { Kind: 'Part', Value: 'PART-1' }, { Kind: 'Operation', Value: 'OP-1-5' }] }
  ]
};

var GetCyclesWIPJSON2 = {
  Begin: '{{now-4h}}', End: '{{now}}',
  List: [
    { CycleId: 7020, Range: '{{now-4h..now-2h}}', SerialNumber: 'SN-2-1', WorkInformations: [{ Kind: 'WorkOrder', Value: 'WO-20' }, { Kind: 'Part', Value: 'PART-2' }, { Kind: 'Operation', Value: 'OP-2-1' }] },
    { CycleId: 7021, Range: '{{now-2h..now}}',    SerialNumber: 'SN-2-2', WorkInformations: [{ Kind: 'WorkOrder', Value: 'WO-21' }, { Kind: 'Part', Value: 'PART-2' }, { Kind: 'Operation', Value: 'OP-2-2' }] }
  ]
};

var GetCyclesWIPJSON3 = {
  Begin: '{{now-4h}}', End: '{{now}}',
  List: [
    { CycleId: 7030, Range: '{{now-4h..now}}', SerialNumber: 'SN-3-1', WorkInformations: [{ Kind: 'WorkOrder', Value: 'WO-30' }, { Kind: 'Part', Value: 'PART-3' }, { Kind: 'Operation', Value: 'OP-3-1' }] }
  ]
};

MOCK.respond('GetCyclesWithWorkInformationsInPeriodV2', {
  byMachineId: {
    1: GetCyclesWIPJSON1,
    2: GetCyclesWIPJSON2,
    3: GetCyclesWIPJSON3
  },
  byId: {
    1: GetCyclesWIPJSON1,
    2: GetCyclesWIPJSON2,
    3: GetCyclesWIPJSON3
  },
  default: { Begin: '{{now-4h}}', End: '{{now}}', List: [] }
}, { delay: 400 });
