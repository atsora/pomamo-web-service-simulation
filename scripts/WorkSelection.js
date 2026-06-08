// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

(function () {
  // Full catalog the mock can filter through.
  var FULL = [
    {
      Display: 'WorkOrder', Kind: 'WorkOrder',
      Items: [
        { Display: 'WO-1001', Kind: 'WorkOrder', Id: 1 },
        { Display: 'WO-1002', Kind: 'WorkOrder', Id: 2 },
        { Display: 'WO-1003', Kind: 'WorkOrder', Id: 3 },
        { Display: 'WO-2042-special', Kind: 'WorkOrder', Id: 4 }
      ]
    },
    {
      Display: 'Part', Kind: 'Part',
      Items: [
        { Display: 'PART-A', Kind: 'Part', Id: 11 },
        { Display: 'PART-B', Kind: 'Part', Id: 12 },
        { Display: 'PART-special-X42', Kind: 'Part', Id: 13 }
      ]
    },
    {
      Display: 'Operation', Kind: 'Operation',
      Items: [
        { Display: 'OP-1', Kind: 'Operation', Id: 21 },
        { Display: 'OP-2', Kind: 'Operation', Id: 22 },
        { Display: 'OP-special-finish', Kind: 'Operation', Id: 23 }
      ]
    }
  ];

  function filterCatalog (query) {
    if (!query) return FULL;
    // Support "Kind:home" → default page (return everything)
    if (/^kind:home$/i.test(query)) return FULL;
    // Support "kind:WorkOrder" → only that group
    var kindMatch = /^kind:(\w+)/i.exec(query);
    if (kindMatch) {
      var kind = kindMatch[1].toLowerCase();
      return FULL.filter(function (g) { return g.Kind.toLowerCase() === kind; });
    }
    // Otherwise: case-insensitive substring match on Display
    var q = query.toLowerCase();
    return FULL
      .map(function (g) {
        return Object.assign({}, g, {
          Items: g.Items.filter(function (i) { return i.Display.toLowerCase().indexOf(q) !== -1; })
        });
      })
      .filter(function (g) { return g.Items.length > 0; });
  }

  MOCK.respond('WorkSelection', function (call) {
    return { WorkInfoGroup: filterCatalog(call.params.Search) };
  }, { delay: 300 });
})();
