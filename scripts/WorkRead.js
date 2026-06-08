// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `WorkRead?Kind=<X>&Id=<Y>` — full record of one node in the
// work-structure tree (used by x-workexplorer to fill the form).
//
// Returns { Id, Kind, Display, Parents, Children, Properties: [{Key, Value}] }
// Parents/Children are hierarchical neighbours; Properties carries the saved
// values that hydrate the form previously built from WorkStructure.

require('./_helpers');

(function () {
  // Per-Kind values: map of Id → { Display, Properties }
  var CATALOG = {
    WorkOrder: {
      1: { Display: 'WO-1001 (full)', Code: 'WO-1001', Name: 'Cover series 2026 Q1', Status: 'InProgress' },
      2: { Display: 'WO-1002 (planned)', Code: 'WO-1002', Name: 'Spare parts batch', Status: 'Planned' }
    },
    Project: {
      1: { Display: 'PRJ-Cover', Code: 'PRJ-COVER', Name: 'Cover programme' },
      2: { Display: 'PRJ-Spare', Code: 'PRJ-SPARE', Name: 'Spare parts programme' }
    },
    Part: {
      1: { Display: 'PART-A (cover)', Code: 'PART-A', Name: 'Cover plate v3', TargetCount: 500 },
      2: { Display: 'PART-B (housing)', Code: 'PART-B', Name: 'Housing v2', TargetCount: 200 }
    },
    Component: {
      1: { Display: 'COMP-rough', Code: 'COMP-ROUGH', Name: 'Rough blank', QuantityPerPart: 1 },
      2: { Display: 'COMP-finish', Code: 'COMP-FIN', Name: 'Finished cover', QuantityPerPart: 1 }
    },
    Operation: {
      1: { Display: 'OP-1042-A (full)', Code: 'OP-1042-A', Name: 'Roughing pass',
           MachiningDuration: 240, SetupDuration: 600, TargetCycleTime: 180, Active: true },
      2: { Display: 'OP-1042-B (sparse)', Code: 'OP-1042-B', Name: 'Finishing pass',
           MachiningDuration: 180, SetupDuration: 300, Active: false }
    }
  };

  // Relations between kinds — used by the parents/children panes.
  // Each pair (kind → otherKind) lists pre-canned related ids.
  var PARENTS_OF = {
    Operation:  function (id) { return [{ Id: 1, Kind: 'Component', Display: 'COMP-rough', Order: 1 }]; },
    Component:  function (id) { return [{ Id: 1, Kind: 'Part', Display: 'PART-A (cover)', Order: 1 }]; },
    Part:       function (id) { return [{ Id: 1, Kind: 'Project', Display: 'PRJ-Cover', Order: 1 }]; },
    Project:    function (id) { return [{ Id: 1, Kind: 'WorkOrder', Display: 'WO-1001 (full)', Order: 1 }]; },
    WorkOrder:  function (id) { return []; }
  };

  var CHILDREN_OF = {
    WorkOrder:  function (id) { return [{ Id: 1, Kind: 'Project', Display: 'PRJ-Cover', Order: 1 }]; },
    Project:    function (id) { return [{ Id: 1, Kind: 'Part', Display: 'PART-A (cover)', Order: 1 }, { Id: 2, Kind: 'Part', Display: 'PART-B (housing)', Order: 2 }]; },
    Part:       function (id) { return [{ Id: 1, Kind: 'Component', Display: 'COMP-rough', Order: 1 }, { Id: 2, Kind: 'Component', Display: 'COMP-finish', Order: 2 }]; },
    Component:  function (id) { return [{ Id: 1, Kind: 'Operation', Display: 'OP-1042-A (full)', Order: 1 }, { Id: 2, Kind: 'Operation', Display: 'OP-1042-B (sparse)', Order: 2 }]; },
    Operation:  function (id) { return []; }
  };

  function propertyValues (kind, id) {
    var record = (CATALOG[kind] || {})[id];
    if (!record) return [];
    return Object.keys(record)
      .filter(function (k) { return k !== 'Display'; })
      .map(function (k) { return { Key: k, Value: record[k] }; });
  }

  MOCK.respond('WorkRead', function (call) {
    if (!call.params.Kind) {
      return { __status: 400, body: MOCK.errorBody('Missing work kind') };
    }
    var kind = call.params.Kind;
    var id = Number(call.params.Id || '1');
    var record = (CATALOG[kind] || {})[id];
    if (!record) {
      // Unknown id: still return a minimal record so the form can render.
      return {
        Id: id, Kind: kind, Display: kind + '_' + id,
        Parents: [], Children: [], Properties: []
      };
    }
    return {
      Id: id,
      Kind: kind,
      Display: record.Display,
      Parents: (PARENTS_OF[kind] || function () { return []; })(id),
      Children: (CHILDREN_OF[kind] || function () { return []; })(id),
      Properties: propertyValues(kind, id)
    };
  }, { delay: 300 });
})();
