// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

MOCK.respond('MachineModeCategoryLegend', function () {
  return {
    Items: [
      { Id: 1, Display: 'Inactive' },
      { Id: 2, Display: 'Active' },
      { Id: 3, Display: 'Error' },
      { Id: 4, Display: 'Unknown' },
      { Id: 5, Display: 'Eco' }
    ]
  };
}, { delay: 300 });
