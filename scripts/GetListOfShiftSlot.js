// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `GetListOfShiftSlot?Begin=<iso>&End=<iso>` — list of shift slots
// in a 24h window centred on "now".
//
// Static response (no machine/group key).

require('./_helpers');

MOCK.respond('GetListOfShiftSlot', {
  static: {
    Begin: '{{now-12h}}',
    End:   '{{now+12h}}',
    Range: '{{now-12h..now+12h}}',
    List: [
      { ShiftBegin: '{{now-12h}}', ShiftEnd: '{{now-4h}}',  ShiftColor: '#2E7D32', ShiftDisplay: 'Morning'   },
      { ShiftBegin: '{{now-4h}}',  ShiftEnd: '{{now+4h}}',  ShiftColor: '#FFC107', ShiftDisplay: 'Afternoon' },
      { ShiftBegin: '{{now+4h}}',  ShiftEnd: '{{now+12h}}', ShiftColor: '#7B1FA2', ShiftDisplay: 'Night'     }
    ]
  }
}, { delay: 400 });
