// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `CncValue/RedStackLight?MachineId=<id>&Range=<range>` — short red
// stack-light pulses over the last ~4 hours.

require('./_helpers');

var RedStackLightJSON1 = {
  Range: '{{now-4h..now}}',
  Blocks: [
    { Range: '{{now-3h36m..now-3h31m}}', Color: '#D32F2F', Details: [{ Color: '#D32F2F', Duration: 300 }] },
    { Range: '{{now-2h53m..now-2h48m}}', Color: '#D32F2F', Details: [{ Color: '#D32F2F', Duration: 300 }] },
    { Range: '{{now-2h10m..now-2h5m}}',  Color: '#D32F2F', Details: [{ Color: '#D32F2F', Duration: 300 }] },
    { Range: '{{now-1h26m..now-1h21m}}', Color: '#D32F2F', Details: [{ Color: '#D32F2F', Duration: 300 }] },
    { Range: '{{now-43m..now-38m}}',     Color: '#D32F2F', Details: [{ Color: '#D32F2F', Duration: 300 }] }
  ]
};

var RedStackLightJSON2 = {
  Range: '{{now-4h..now}}',
  Blocks: [
    { Range: '{{now-2h..now-1h55m}}', Color: '#D32F2F', Details: [{ Color: '#D32F2F', Duration: 300 }] },
    { Range: '{{now-30m..now-25m}}',  Color: '#D32F2F', Details: [{ Color: '#D32F2F', Duration: 300 }] }
  ]
};

var RedStackLightJSON3 = {
  Range: '{{now-4h..now}}',
  Blocks: []
};

MOCK.respond('CncValue/RedStackLight', {
  byMachineId: {
    1: RedStackLightJSON1,
    2: RedStackLightJSON2,
    3: RedStackLightJSON3
  },
  default: RedStackLightJSON3
}, { delay: 400 });
