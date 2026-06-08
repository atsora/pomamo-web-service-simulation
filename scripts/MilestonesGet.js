// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `MilestonesGet?Range=<range>` — milestone events on ±90 days
// around "now", one set per machine.

require('./_helpers');

MOCK.respond('MilestonesGet', {
  static: {
    Range: '{{now-2160h..now+2160h}}',  // 2160h = 90 days
    Machines: [
      {
        Id: 1, Display: 'Machine 1', DisplayPriority: 1,
        Milestones: [
          { Id: 100, DateTime: '{{now+720h}}', Message: 'Milestone 1 for machine 1' },
          { Id: 101, DateTime: '{{now}}',      Message: 'Milestone 2 for machine 1' },
          { Id: 102, DateTime: '{{now-720h}}', Message: 'Milestone 3 for machine 1' }
        ]
      },
      {
        Id: 2, Display: 'Machine 2', DisplayPriority: 2,
        Milestones: [
          { Id: 200, DateTime: '{{now+720h}}', Message: 'Milestone 1 for machine 2' },
          { Id: 201, DateTime: '{{now}}',      Message: 'Milestone 2 for machine 2' },
          { Id: 202, DateTime: '{{now-720h}}', Message: 'Milestone 3 for machine 2' }
        ]
      },
      {
        Id: 3, Display: 'Machine 3', DisplayPriority: 3,
        Milestones: [
          { Id: 300, DateTime: '{{now+720h}}', Message: 'Milestone 1 for machine 3' },
          { Id: 301, DateTime: '{{now}}',      Message: 'Milestone 2 for machine 3' },
          { Id: 302, DateTime: '{{now-720h}}', Message: 'Milestone 3 for machine 3' }
        ]
      },
      {
        Id: 4, Display: 'Machine 4', DisplayPriority: 4,
        Milestones: [
          { Id: 400, DateTime: '{{now+720h}}', Message: 'Milestone 1 for machine 4' },
          { Id: 401, DateTime: '{{now}}',      Message: 'Milestone 2 for machine 4' },
          { Id: 402, DateTime: '{{now-720h}}', Message: 'Milestone 3 for machine 4' }
        ]
      }
    ]
  }
}, { delay: 500 });
