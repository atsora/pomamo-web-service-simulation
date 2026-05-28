// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');
require('./scenario');

(function () {
  // Numeric scenario groups → real machine children
  var MAP = {};
  MAP[SCENARIO.MAIN_GROUP]  = { children: ['1','2','3','4'], single: [true,true,true,true] };
  MAP[SCENARIO.MILL_GROUP]  = { children: ['1','2'], single: [true,true] };
  MAP[SCENARIO.LATHE_GROUP] = { children: ['3'], single: [true] };

  // Synthetic "G<n>" groups for the x-groupsingroup demo: n children whose
  // first slots are the scenario machines (so the boxtoclone template renders
  // real x-machinedisplay tiles) and the rest are nested non-machine sub-groups.
  function syntheticGroup (size) {
    var children = [];
    var single = [];
    var machines = SCENARIO.MACHINES;
    for (var i = 0; i < size; i++) {
      if (i < machines.length) {
        children.push(String(machines[i].id));
        single.push(true);
      } else {
        children.push('G' + size + '.' + (i + 1));
        single.push(false);
      }
    }
    return { children: children, single: single };
  }

  MOCK.respond('Machine/GroupZoomIn', function (call) {
    if (!call.params.GroupId) {
      return { __status: 400, body: MOCK.errorBody('GroupId required') };
    }
    var gidRaw = String(call.params.GroupId);
    var info;
    var n = Number(gidRaw);
    if (!isNaN(n) && MAP[n]) {
      info = MAP[n];
    } else if (/^G(\d+)\.\d+$/i.test(gidRaw)) {
      // Nested sub-group (G<size>.<index>) — terminal leaf, no further expansion.
      // Without this guard, the wildcard regex below would recurse infinitely.
      info = { children: [], single: [] };
    } else {
      var m = /^G(\d+)$/i.exec(gidRaw);
      info = m ? syntheticGroup(Number(m[1])) : { children: [], single: [] };
    }
    return {
      Dynamic: false,
      Children: info.children,
      ChildrenDetails: info.single.map(function (b) { return { SingleMachine: b }; })
    };
  }, { delay: 300 });
})();
