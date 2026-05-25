// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

MOCK.respond('ReasonScrapSelection/Name', function (call) {
  if (!call.params.MachineId) {
    return { __status: 400, body: MOCK.errorBody('MachineId required') };
  }
  return [
    { NonConformanceColor: '#D32F2F', NonConformanceReasonId: 1, NonConformanceDisplay: 'Tool wear', NonConformanceCategory: 'Scrap' },
    { NonConformanceColor: '#FB8C00', NonConformanceReasonId: 2, NonConformanceDisplay: 'Dimension out', NonConformanceCategory: 'Remachining' },
    { NonConformanceColor: '#7B1FA2', NonConformanceReasonId: 3, NonConformanceDisplay: 'Surface defect', NonConformanceCategory: 'Scrap' }
  ];
}, { delay: 300 });
