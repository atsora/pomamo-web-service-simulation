// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `GetListOfOperationSlotV2?Id|MachineId=<id>&Range=<range>` —
// 3 operation slots over the last 4 hours.

require('./_helpers');

var GetListOfOperationSlotV2JSON1 = {
  Begin: '{{now-4h}}',
  End:   '{{now}}',
  List: [
    { OperationSlotId: 4010, Begin: '{{now-4h}}', End: '{{now-3h}}', WorkInformations: [{ Kind: 'WorkOrder', Value: 'WO-1001-1' }, { Kind: 'Part', Value: 'PART-1' }, { Kind: 'Operation', Value: 'OP-1-1' }] },
    { OperationSlotId: 4011, Begin: '{{now-3h}}', End: '{{now-2h}}', WorkInformations: [{ Kind: 'WorkOrder', Value: 'WO-1001-2' }, { Kind: 'Part', Value: 'PART-1' }, { Kind: 'Operation', Value: 'OP-1-2' }] },
    { OperationSlotId: 4012, Begin: '{{now-2h}}', End: '{{now-1h}}', WorkInformations: [{ Kind: 'WorkOrder', Value: 'WO-1001-3' }, { Kind: 'Part', Value: 'PART-1' }, { Kind: 'Operation', Value: 'OP-1-3' }] }
  ]
};

var GetListOfOperationSlotV2JSON2 = {
  Begin: '{{now-4h}}',
  End:   '{{now}}',
  List: [
    { OperationSlotId: 4020, Begin: '{{now-4h}}',  End: '{{now-2h}}', WorkInformations: [{ Kind: 'WorkOrder', Value: 'WO-1002-1' }, { Kind: 'Part', Value: 'PART-2' }, { Kind: 'Operation', Value: 'OP-2-1' }] },
    { OperationSlotId: 4021, Begin: '{{now-2h}}',  End: '{{now}}',    WorkInformations: [{ Kind: 'WorkOrder', Value: 'WO-1002-2' }, { Kind: 'Part', Value: 'PART-2' }, { Kind: 'Operation', Value: 'OP-2-2' }] }
  ]
};

var GetListOfOperationSlotV2JSON3 = {
  Begin: '{{now-4h}}',
  End:   '{{now}}',
  List: [
    { OperationSlotId: 4030, Begin: '{{now-4h}}', End: '{{now}}', WorkInformations: [{ Kind: 'WorkOrder', Value: 'WO-1003' }, { Kind: 'Part', Value: 'PART-3' }, { Kind: 'Operation', Value: 'OP-3' }] }
  ]
};

MOCK.respond('GetListOfOperationSlotV2', {
  byMachineId: {
    1: GetListOfOperationSlotV2JSON1,
    2: GetListOfOperationSlotV2JSON2,
    3: GetListOfOperationSlotV2JSON3
  },
  byId: {
    1: GetListOfOperationSlotV2JSON1,
    2: GetListOfOperationSlotV2JSON2,
    3: GetListOfOperationSlotV2JSON3
  },
  default: { Begin: '{{now-4h}}', End: '{{now}}', List: [] }
}, { delay: 400 });
