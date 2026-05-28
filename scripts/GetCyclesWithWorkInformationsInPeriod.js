// Copyright (C) 2009-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `GetCyclesWithWorkInformationsInPeriodV2?Id=<id>&Begin=<begin>&End=<end>`
// — 1-5 cycles with their work info across the last 4 hours.
// Each cycle item carries explicit `Begin` / `End` (x-cyclesinperiod reads
// these directly to build the row range).

require('./_helpers');

function cycle (id, beginOff, endOff, sn, wo, op) {
  return {
    CycleId: id,
    Begin: '{{now' + beginOff + '}}',
    End:   '{{now' + endOff + '}}',
    SerialNumber: sn,
    WorkInformations: [
      { Kind: 'WorkOrder', Value: wo },
      { Kind: 'Part',      Value: 'PART-' + sn.split('-')[1] },
      { Kind: 'Operation', Value: op }
    ]
  };
}

var GetCyclesWIPJSON1 = {
  Begin: '{{now-4h}}', End: '{{now}}',
  List: [
    cycle(7010, '-4h',    '-3h12m', 'SN-1-1', 'WO-10', 'OP-1-1'),
    cycle(7011, '-3h12m', '-2h24m', 'SN-1-2', 'WO-11', 'OP-1-2'),
    cycle(7012, '-2h24m', '-1h36m', 'SN-1-3', 'WO-12', 'OP-1-3'),
    cycle(7013, '-1h36m', '-48m',   'SN-1-4', 'WO-13', 'OP-1-4'),
    cycle(7014, '-48m',   '',    'SN-1-5', 'WO-14', 'OP-1-5')
  ]
};

var GetCyclesWIPJSON2 = {
  Begin: '{{now-4h}}', End: '{{now}}',
  List: [
    cycle(7020, '-4h', '-2h', 'SN-2-1', 'WO-20', 'OP-2-1'),
    cycle(7021, '-2h', '', 'SN-2-2', 'WO-21', 'OP-2-2')
  ]
};

var GetCyclesWIPJSON3 = {
  Begin: '{{now-4h}}', End: '{{now}}',
  List: [
    cycle(7030, '-4h', '', 'SN-3-1', 'WO-30', 'OP-3-1')
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
