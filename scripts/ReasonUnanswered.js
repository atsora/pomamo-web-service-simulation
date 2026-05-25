// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `ReasonUnanswered?MachineId=<id>(&Number=True)(&Range=<range>)`
// — drives the "unanswered reason" icon and number badge.

require('./_helpers');

MOCK.respond('ReasonUnanswered', {
  byMachineId: {
    1: { IsUnansweredPeriod: true,  UnansweredPeriodsNumber: 3 },
    2: { IsUnansweredPeriod: true,  UnansweredPeriodsNumber: 4 },
    3: { IsUnansweredPeriod: true,  UnansweredPeriodsNumber: 1 }
  },
  default: { IsUnansweredPeriod: false, UnansweredPeriodsNumber: 0 }
}, { delay: 300 });
