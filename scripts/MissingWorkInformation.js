// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `MissingWorkInformation?MachineId=<id>` — flag the component
// reads as `data.IsMissingWorkInformation` to decide whether to display
// the warning icon.

require('./_helpers');

MOCK.respond('MissingWorkInformation', {
  byMachineId: {
    1: { IsMissingWorkInformation: false },
    2: { IsMissingWorkInformation: true  },  // Machine 2 → icon visible
    3: { IsMissingWorkInformation: false }
  },
  default: { IsMissingWorkInformation: false }
}, { delay: 200 });
