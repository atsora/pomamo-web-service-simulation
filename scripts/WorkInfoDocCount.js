// Copyright (C) 2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Doc/WorkInfoDocCount?OperationId=<id>&ComponentId=<id>` — number of distinct
// documents of an operation (its active revision) and/or of a component (or part, same
// id). Used by x-workinfodocs, shown only when DocCount > 0.
//
// Scenario (ids of GetLastWorkInformationV3): machine 1 works on operation 1 / part 1,
// which have documents (one shared); machine 2 on operation 2 / part 2, which have none.

require('./_helpers');

var OPERATION_DOCS = { 1: [1, 2] };
var COMPONENT_DOCS = { 1: [2, 3] };

MOCK.respond('WorkInfoDocCount', function (call) {
  var operationId = call.params.OperationId;
  var componentId = call.params.ComponentId;
  if (!operationId && !componentId) {
    return { __status: 400, body: MOCK.errorBody('OperationId or ComponentId required') };
  }
  var docs = {};
  (OPERATION_DOCS[operationId] || []).forEach(function (id) { docs[id] = true; });
  (COMPONENT_DOCS[componentId] || []).forEach(function (id) { docs[id] = true; });
  return { DocCount: Object.keys(docs).length };
}, { delay: 300 });
