// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

MOCK.respond('CncValueLegend/Get', function () {
  // Shape expected by x-fieldlegends: { Items: [{ Field, Legends }] }
  return {
    Items: [
      {
        Field: { Display: 'Spindle speed (RPM)' },
        Legends: [
          { Display: 'Slow',   Color: '#2E7D32', Range: '[0,1000)' },
          { Display: 'Normal', Color: '#FFC107', Range: '[1000,3000)' },
          { Display: 'Fast',   Color: '#D32F2F', Range: '[3000,)' }
        ]
      },
      {
        Field: { Display: 'Feedrate (mm/min)' },
        Legends: [
          { Display: 'Low',  Color: '#0080FF', Range: '[0,500)' },
          { Display: 'High', Color: '#7B1FA2', Range: '[500,)' }
        ]
      }
    ]
  };
}, { delay: 200 });
