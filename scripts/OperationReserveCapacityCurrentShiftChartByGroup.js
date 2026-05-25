// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Operation/ReserveCapacityCurrentShiftChartByGroup?ParentGroupId=<id>`
// (chart) and `Operation/OperationCurrentShiftTarget?GroupId=<id>` (scalar).

require('./_helpers');
require('./scenario');

var ChartMain = {
  DateTime: '{{now}}',
  Day:      '{{now}}',
  Shift:    { Id: 1, Display: 'Day shift', Color: '#FFFF80' },
  ChartData: [
    { GroupId: '1', GroupDisplay: 'Machine 1',  ReserveCapacity: 12   },
    { GroupId: '2', GroupDisplay: 'Machine 2',  ReserveCapacity: -3.5 },
    { GroupId: '3', GroupDisplay: 'Machine 3', ReserveCapacity: 6.2  }
  ],
  ShiftGoal: 100 + 120 + 35 + 62
};

var ChartMill = {
  DateTime: '{{now}}',
  Day:      '{{now}}',
  Shift:    { Id: 1, Display: 'Day shift', Color: '#FFFF80' },
  ChartData: [
    { GroupId: '1', GroupDisplay: 'Machine 1', ReserveCapacity: 12   },
    { GroupId: '2', GroupDisplay: 'Machine 2', ReserveCapacity: -3.5 }
  ],
  ShiftGoal: 100 + 120 + 35
};

var ChartLathe = {
  DateTime: '{{now}}',
  Day:      '{{now}}',
  Shift:    { Id: 1, Display: 'Day shift', Color: '#FFFF80' },
  ChartData: [
    { GroupId: '3', GroupDisplay: 'Machine 3', ReserveCapacity: 6.2 }
  ],
  ShiftGoal: 100 + 62
};

var CHARTS = {};
CHARTS[SCENARIO.MAIN_GROUP]  = ChartMain;
CHARTS[SCENARIO.MILL_GROUP]  = ChartMill;
CHARTS[SCENARIO.LATHE_GROUP] = ChartLathe;

MOCK.respond('Operation/ReserveCapacityCurrentShiftChartByGroup', {
  byGroupId: {
    100: ChartMain,
    101: ChartMill,
    102: ChartLathe
  },
  default: ChartMain
}, { delay: 400 });

// Scalar variant: only ShiftGoal + Shift + Day.
MOCK.respond('Operation/OperationCurrentShiftTarget', {
  byGroupId: {
    100: { ShiftGoal: ChartMain.ShiftGoal,  Day: '{{now}}', Shift: ChartMain.Shift  },
    101: { ShiftGoal: ChartMill.ShiftGoal,  Day: '{{now}}', Shift: ChartMill.Shift  },
    102: { ShiftGoal: ChartLathe.ShiftGoal, Day: '{{now}}', Shift: ChartLathe.Shift }
  },
  default: { ShiftGoal: ChartMain.ShiftGoal, Day: '{{now}}', Shift: ChartMain.Shift }
}, { delay: 300 });
