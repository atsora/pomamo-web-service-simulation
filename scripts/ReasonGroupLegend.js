// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `ReasonGroupLegend` — static legend grouping reasons by category.

require('./_helpers');

var ReasonGroupLegendJSON = {
  Items: [
    {
      Color: '#FFC107', Display: 'Idle', ReasonGroups: [
        { Id: 1, Display: 'Operator break', Color: '#FFC107', Reasons: [] },
        { Id: 2, Display: 'Awaiting parts', Color: '#FFC107', Reasons: [] }
      ]
    },
    {
      Color: '#2E7D32', Display: 'Running', ReasonGroups: [
        { Id: 3, Display: 'In cycle',       Color: '#2E7D32', Reasons: [] },
        { Id: 4, Display: 'Setup running',  Color: '#2E7D32', Reasons: [] }
      ]
    },
    {
      Color: '#D32F2F', Display: 'Issue', ReasonGroups: [
        { Id: 5, Display: 'Tool broken',    Color: '#D32F2F', Reasons: [] },
        { Id: 6, Display: 'Machine alarm',  Color: '#D32F2F', Reasons: [] }
      ]
    }
  ]
};

MOCK.respond('ReasonGroupLegend', { static: ReasonGroupLegendJSON }, { delay: 300 });
