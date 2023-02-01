// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var Slots_7 = { 'ProductionStateSlots': [{ 'Id': 2, 'Display': 'No production', 'Range': '[2021-01-19T13:33:53Z,2021-01-19T13:37:47Z)', 'FgColor': '#000000', 'BgColor': '#80FFFF' }], 'Range': '[2021-01-19T13:35:54Z,2021-01-19T13:35:54Z]' };

var Slots_8 = { 'ProductionStateSlots': [{ 'Id': 0, 'Display': 'NoProductionState', 'Range': '[2021-01-19T12:44:42Z,2021-01-19T12:49:46Z)', 'FgColor': '#000000', 'BgColor': '#D3D3D3' }], 'Range': '[2021-01-19T12:45:41Z,2021-01-19T12:45:41Z]' };


$.mockjax({
  url: /^http:\/\/localhost:8082\/ProductionStateSlots\?GroupId=7&.*$/,
  responseTime: 1000,
  responseText: Slots_7
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/ProductionStateSlots\?GroupId=8&.*$/,
  responseTime: 1000,
  responseText: Slots_8
});

/*
$.mockjax({
  url : /^http:\/\/localhost:8082\/ProductionState\/ColorSlots\?GroupId=20\&Range=\[2014-05-05T06:00:00.000Z,2014-05-05T18:00:00.000Z\).*$/,
  responseTime : 2000,
  responseText : Slots_5
});
*/
