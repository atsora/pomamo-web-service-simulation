// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `GetLastShift?MachineId=<id>` — last shift the machine ran on.
// Note: Day is sent as an ISO instant; the component truncates to date.

require('./_helpers');

var GetLastShiftJSON1 = { Name: 'Machine 1',   Shift: { Id: 2, Display: 'Day shift',     Color: '#0080C0' }, Day: '{{now}}' };
var GetLastShiftJSON2 = { Name: 'Machine 2',   Shift: { Id: 3, Display: 'Evening shift', Color: '#FFC107' }, Day: '{{now}}' };
var GetLastShiftJSON3 = { Name: 'Machine 3',  Shift: { Id: 1, Display: 'Night shift',   Color: '#7B1FA2' }, Day: '{{now}}' };

MOCK.respond('GetLastShift', {
  byMachineId: { 1: GetLastShiftJSON1, 2: GetLastShiftJSON2, 3: GetLastShiftJSON3 },
  byId:        { 1: GetLastShiftJSON1, 2: GetLastShiftJSON2, 3: GetLastShiftJSON3 },
  default:     { Name: 'Machine ?', Shift: { Id: 2, Display: 'Day shift', Color: '#0080C0' }, Day: '{{now}}' }
}, { delay: 300 });
