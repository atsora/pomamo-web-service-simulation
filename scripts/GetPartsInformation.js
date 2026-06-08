// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Scrap/At/Get?MachineId=<id>&At=<iso>` — scrap counters and the
// operation that produced them.

require('./_helpers');

var ScrapAtJSON1 = {
  Current: true,
  Range:         '{{now-2h..now}}',
  ExtendedRange: '{{now-2h..now}}',
  OperationSlot: {
    Current: true,
    Display: 'PART-A / OP-1 - Morning',
    Range: '{{now-2h..now}}',
    Operation: { Id: 23425, Display: 'PART-A / OP-1', Name: 'PART-A / OP-1' }
  },
  TotalCount: 20, ValidCount: 11, ScrapCount: 4, FixableCount: 5,
  ScrapReport: {
    Id: 345,
    Reasons: [
      { Id: 2, Display: 'Tool wear',     Number: 4, Category: 'Scrap' },
      { Id: 1, Display: 'Dimension out', Number: 5, Category: 'Remachining' }
    ]
  }
};

var ScrapAtJSON2 = {
  Current: true,
  Range:         '{{now-2h..now}}',
  ExtendedRange: '{{now-2h..now}}',
  OperationSlot: {
    Current: true,
    Display: 'PART-B / OP-2 - Morning',
    Range: '{{now-2h..now}}',
    Operation: { Id: 23426, Display: 'PART-B / OP-2', Name: 'PART-B / OP-2' }
  },
  TotalCount: 12, ValidCount: 12, ScrapCount: 0, FixableCount: 0,
  ScrapReport: { Id: 346, Reasons: [] }
};

var ScrapAtJSON3 = {
  Current: true,
  Range:         '{{now-2h..now}}',
  ExtendedRange: '{{now-2h..now}}',
  OperationSlot: {
    Current: true,
    Display: 'PART-LATHE / OP-1',
    Range: '{{now-2h..now}}',
    Operation: { Id: 23427, Display: 'PART-LATHE / OP-1', Name: 'PART-LATHE / OP-1' }
  },
  TotalCount: 6, ValidCount: 3, ScrapCount: 3, FixableCount: 0,
  ScrapReport: {
    Id: 347,
    Reasons: [{ Id: 3, Display: 'Chip jam', Number: 3, Category: 'Scrap' }]
  }
};

MOCK.respond('Scrap/At/Get', {
  byMachineId: {
    1: ScrapAtJSON1,
    2: ScrapAtJSON2,
    3: ScrapAtJSON3
  },
  default: ScrapAtJSON1
}, { delay: 400 });
