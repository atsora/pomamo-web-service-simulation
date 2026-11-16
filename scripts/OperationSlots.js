// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `OperationSlots?MachineId=<id>&Range=<range>` — operation slots
// consumed by x-operationslotbar and x-detailedworkinfoat.
//
// Slots are computed FROM the asked Range param (proportional fractions),
// so the bar always fills the requested window regardless of when the demo
// is opened.
//
// Each block has one detail (its slot), unless SkipDetails=true. With
// WorkInformations=true, the details also give the work informations with the
// ids (see WorkInfoDocCount: operation 1 and part 1 have documents, operation 2
// and part 2 have none).

require('./_helpers');

// Work informations of the operations, by Display
var WORK_INFORMATIONS = {
  'OP1042-A': [
    { Kind: 'WorkOrder', Value: 'WO-1042', Id: 1042 },
    { Kind: 'Part', Value: 'PART-1', Id: 1 },
    { Kind: 'Operation', Value: 'OP1042-A', Id: 1 }
  ],
  'OP1042-B': [
    { Kind: 'WorkOrder', Value: 'WO-1042', Id: 1042 },
    { Kind: 'Part', Value: 'PART-1', Id: 1 },
    { Kind: 'Operation', Value: 'OP1042-B', Id: 3 }
  ],
  'OP1043': [
    { Kind: 'WorkOrder', Value: 'WO-1043', Id: 1043 },
    { Kind: 'Part', Value: 'PART-2', Id: 2 },
    { Kind: 'Operation', Value: 'OP1043', Id: 2 }
  ]
};

function isTrue (param) {
  return (param === true) || (String(param).toLowerCase() === 'true');
}

var PATTERNS = {
  // Machine 1 — 3 operations
  1: [
    [0.375, { Id: 4001, Display: 'OP1042-A', BgColor: '#0080FF', FgColor: '#FFFFFF' }],
    [0.375, { Id: 4002, Display: 'OP1042-B', BgColor: '#2E7D32', FgColor: '#FFFFFF' }],
    [0.25,  { Id: 4003, Display: 'OP1043',   BgColor: '#FFC107', FgColor: '#000000' }]
  ],
  // Machine 2 — 2 operations
  2: [
    [0.5, { Id: 4001, Display: 'OP1042-A', BgColor: '#0080FF', FgColor: '#FFFFFF' }],
    [0.5, { Id: 4002, Display: 'OP1042-B', BgColor: '#2E7D32', FgColor: '#FFFFFF' }]
  ],
  // Machine 3 — single uniform operation
  3: [
    [1.0, { Id: 4003, Display: 'OP1043', BgColor: '#FFC107', FgColor: '#000000' }]
  ]
};

function buildBlocks (rangeParam, pattern, skipDetails, workInformations) {
  var r = MOCK.rangeFromParam(rangeParam, 8);
  var lowerMs = r.lower.getTime();
  var upperMs = r.upper.getTime();
  var totalMs = upperMs - lowerMs;
  var totalFrac = pattern.reduce(function (s, p) { return s + p[0]; }, 0);
  var blocks = [];
  var cursor = lowerMs;
  for (var i = 0; i < pattern.length; i++) {
    var frac = pattern[i][0] / totalFrac;
    var tmpl = pattern[i][1];
    var blockEnd = (i === pattern.length - 1) ? upperMs : Math.round(cursor + frac * totalMs);
    var range = '[' + new Date(cursor).toISOString() + ',' + new Date(blockEnd).toISOString() + ')';
    var block = Object.assign({}, tmpl, { Range: range });
    if (!skipDetails) {
      var detail = { Range: range, Display: tmpl.Display };
      if (workInformations) {
        detail.WorkInformations = WORK_INFORMATIONS[tmpl.Display] || [];
      }
      block.Details = [detail];
    }
    blocks.push(block);
    cursor = blockEnd;
  }
  return {
    Range: '[' + r.lower.toISOString() + ',' + r.upper.toISOString() + ')',
    Blocks: blocks
  };
}

MOCK.respond('OperationSlots', function (call) {
  var n = Number(call.params.MachineId);
  var pattern = PATTERNS[n] || PATTERNS[1];
  return buildBlocks(call.params.Range, pattern,
    isTrue(call.params.SkipDetails), isTrue(call.params.WorkInformations));
}, { delay: 400 });
