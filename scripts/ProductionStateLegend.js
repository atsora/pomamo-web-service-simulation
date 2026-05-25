// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

MOCK.respond('ProductionStateLegend', function () {
  return {
    Items: [
      { Color: '#0080FF', Display: 'Production',    ProductionStates: [{ Id: 1, Display: 'Production', LongDisplay: 'Production - ', Color: '#0080FF' }] },
      { Color: '#D32F2F', Display: 'No production', ProductionStates: [{ Id: 2, Display: 'No production', LongDisplay: 'No production - ', Color: '#D32F2F' }] }
    ]
  };
}, { delay: 300 });
