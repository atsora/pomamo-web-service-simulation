// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `MachinesFromGroups?GroupIds=<id[,id,...]>` — resolves a group
// list (possibly comma-separated) to its current machine ids.
//
// Kept as a function because the endpoint aggregates an arbitrary list of
// groups; the declarative form covers a single key.

require('./_helpers');
require('./scenario');

var GROUP_TO_MACHINES = {};
GROUP_TO_MACHINES[SCENARIO.MAIN_GROUP]  = [1, 2, 3, 4];
GROUP_TO_MACHINES[SCENARIO.MILL_GROUP]  = [1, 2];
GROUP_TO_MACHINES[SCENARIO.LATHE_GROUP] = [3];

MOCK.respond('MachinesFromGroups', function (call) {
  var ids = (call.params.GroupIds || '').split(',').filter(Boolean);
  if (ids.length === 0) {
    return { __status: 400, body: MOCK.errorBody('GroupIds required') };
  }
  var machineIds = [];
  var dynamic = false;
  ids.forEach(function (gid) {
    var n = Number(gid);
    if (GROUP_TO_MACHINES[n]) {
      machineIds = machineIds.concat(GROUP_TO_MACHINES[n]);
    } else if (gid === 'Random') {
      var pool = [1, 2, 3, 4];
      pool.sort(function () { return Math.random() - 0.5; });
      machineIds = machineIds.concat(pool.slice(0, 2));
      dynamic = true;
    } else if (!isNaN(n) && n >= 1 && n <= 4) {
      // Plain machine id (1..4)
      machineIds.push(n);
    }
  });
  var dedup = [];
  machineIds.forEach(function (id) { if (dedup.indexOf(id) === -1) dedup.push(id); });
  return { MachineIds: dedup, Dynamic: dynamic };
}, { delay: 600 });
