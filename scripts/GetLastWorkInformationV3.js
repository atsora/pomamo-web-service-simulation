// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `GetLastWorkInformationV3/<machineId>` — work info of the last
// operation slot. The path id is parsed by MOCK.respond as a MachineId.

require('./_helpers');

var GetLastWorkInformationV3JSON1 = {
  SlotMissing: false,
  Begin: '{{now-45m}}',
  End: '{{now-3m}}',
  WorkInformations: [
    { Kind: 'WorkOrder',  Value: 'WO-1001'   },
    { Kind: 'Part',       Value: 'PART-A1'   },
    { Kind: 'Operation',  Value: 'OP-1001-A' }
  ],
  Config: { IsEditable: false, OperationFromCnc: false, OnePartPerWorkOrder: false }
};

var GetLastWorkInformationV3JSON2 = {
  SlotMissing: false,
  Begin: '{{now-60m}}',
  End: '{{now-5m}}',
  WorkInformations: [
    { Kind: 'WorkOrder',  Value: 'WO-1002'   },
    { Kind: 'Part',       Value: 'PART-B2'   },
    { Kind: 'Operation',  Value: 'OP-1002-B' }
  ],
  Config: { IsEditable: false, OperationFromCnc: false, OnePartPerWorkOrder: false }
};

// Machine 3: work info partially missing — exercises the "?" UI for empty fields.
var GetLastWorkInformationV3JSON3 = {
  SlotMissing: false,
  Begin: '{{now-30m}}',
  End: '{{now-1m}}',
  WorkInformations: [
    { Kind: 'WorkOrder',  Value: 'WO-1003' },
    { Kind: 'Part',       Value: ''        },
    { Kind: 'Operation',  Value: ''        }
  ],
  Config: { IsEditable: true, OperationFromCnc: true, OnePartPerWorkOrder: false }
};

MOCK.respond('GetLastWorkInformationV3', {
  byMachineId: {
    1: GetLastWorkInformationV3JSON1,
    2: GetLastWorkInformationV3JSON2,
    3: GetLastWorkInformationV3JSON3
  },
  default: { SlotMissing: true }
}, { delay: 400 });
