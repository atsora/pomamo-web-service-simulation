// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `ProductionTracker?GroupId=<id>&Range=<range>` — 8 hourly buckets
// across the last 8 hours.
//
// The hourly LocalHour values use the sentinel form '{{now-Xh}}' so they're
// always wall-clock-current. Pre-baked 8-hour series per group.

require('./_helpers');

// One hourly row builder used to keep the JSON below readable. The Range
// covers [now-(N+1)h .. now-Nh).
function hour (N, actual, target) {
  return {
    Range: '{{now-' + (N + 1) + 'h..now-' + N + 'h}}',
    LocalHour: '{{now-' + N + 'h}}',
    Actual: actual,
    Target: target,
    Static: N > 0
  };
}

var ProductionTrackerMain = {
  Range: '{{now-8h..now}}',
  HourlyData: [
    hour(7, 22, 25), hour(6, 24, 25), hour(5, 18, 25), hour(4, 25, 25),
    hour(3, 23, 25), hour(2, 27, 25), hour(1, 21, 25), hour(0, 14, 25)
  ]
};

var ProductionTrackerMill = {
  Range: '{{now-8h..now}}',
  HourlyData: [
    hour(7, 20, 25), hour(6, 22, 25), hour(5, 24, 25), hour(4, 23, 25),
    hour(3, 25, 25), hour(2, 26, 25), hour(1, 24, 25), hour(0, 17, 25)
  ]
};

var ProductionTrackerLathe = {
  Range: '{{now-8h..now}}',
  HourlyData: [
    hour(7, 10, 12), hour(6, 11, 12), hour(5,  9, 12), hour(4, 12, 12),
    hour(3, 12, 12), hour(2, 11, 12), hour(1, 10, 12), hour(0,  6, 12)
  ]
};

MOCK.respond('ProductionTracker', {
  byGroupId: {
    100: ProductionTrackerMain,
    101: ProductionTrackerMill,
    102: ProductionTrackerLathe
  },
  byMachineId: {
    1: ProductionTrackerMill,
    2: ProductionTrackerMill,
    3: ProductionTrackerLathe
  },
  default: ProductionTrackerMain
}, { delay: 300 });
