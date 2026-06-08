// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `IsoFile/Current?MachineId=<id>` — current ISO-file / NC program.

require('./_helpers');

MOCK.respond('IsoFile/Current', {
  byMachineId: {
    1: { CurrentDateTime: '{{now}}', IsoFiles: 'PROG_MILL-01.NC' },
    2: { CurrentDateTime: '{{now}}', IsoFiles: 'PROG_MILL-02.NC O8453.P-2' },
    3: { CurrentDateTime: '{{now}}', IsoFiles: 'PROG_LATHE.MPF' }
  },
  default: { CurrentDateTime: '{{now}}', IsoFiles: '' }
}, { delay: 300 });
