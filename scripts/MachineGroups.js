// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Machine/Groups` — the boot fetch that populates the group tree
// inside x-machineselection. Built from the shared scenario.

require('./_helpers');
require('./scenario');

(function () {
  function singleMachineGroup (m, sortPriority) {
    return {
      Id: String(m.id),
      Display: m.id + ': ' + m.name,
      TreeName: m.id + ': ' + m.name,
      SingleMachine: true,
      MachineId: m.id,
      Dynamic: false,
      SortPriority: sortPriority,
      SortKind: 1,
      SortKindTip: 'minor'
    };
  }

  function cellGroup (id, display, sortPriority) {
    return {
      Id: id,
      Display: display,
      TreeName: display,
      SingleMachine: false,
      Dynamic: false,
      SortPriority: sortPriority,
      SortKind: 1,
      SortKindTip: 'minor'
    };
  }

  var singles = SCENARIO.MACHINES.map(function (m, idx) {
    return singleMachineGroup(m, idx + 1);
  });

  var response = {
    GroupCategories: [
      {
        Display: 'All machines',
        SortPriority: 1,
        OmitGroupCategory: true,
        Groups: [
          {
            Id: String(SCENARIO.MAIN_GROUP),
            Display: 'All machines',
            TreeName: 'All machines',
            SingleMachine: false,
            Dynamic: false,
            SortPriority: 0,
            SortKind: 1,
            SortKindTip: 'minor'
          }
        ]
      },
      {
        Display: 'Cells',
        SortPriority: 5,
        OmitGroupCategory: false,
        Groups: [
          Object.assign(cellGroup(String(SCENARIO.MILL_GROUP), 'Milling cell', 1), {
            Zoom: [singles[0], singles[1]]
          }),
          Object.assign(cellGroup(String(SCENARIO.LATHE_GROUP), 'Lathe cell', 2), {
            Zoom: [singles[2]]
          })
        ]
      },
      {
        Display: 'Single machines',
        SortPriority: 11,
        OmitGroupCategory: false,
        Groups: singles
      },
      {
        Display: 'Dynamic samples',
        SortPriority: 20,
        OmitGroupCategory: false,
        Groups: [
          {
            Id: 'Random',
            Display: 'Random (refreshes)',
            TreeName: 'Random (refreshes)',
            SingleMachine: false,
            Dynamic: true,
            SortPriority: 0,
            SortKind: 1,
            SortKindTip: 'minor'
          }
        ]
      }
    ]
  };

  // x-machineselection consumes both GroupCategories (the tree) and MachineList
  // (the flat fallback used by the machines search tab and by _storeDisplays
  // to back-fill any single-machine groups missing from the tree).
  response.MachineList = SCENARIO.MACHINES.map(function (m, idx) {
    return {
      Id: m.id,
      Display: m.id + ': ' + m.name,
      MonitoredMachine: m.monitored,
      DisplayPriority: idx + 1
    };
  });

  MOCK.respond('Machine/Groups', function () { return response; }, { delay: 400 });
})();
