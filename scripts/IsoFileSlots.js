// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var IsoFileSlotJSON1 = {
  'Range': '[2013-09-03T08:28:37.000Z,2013-09-03T08:37:00.000Z)',
  'Display': 'IsoFile_1',
  'BgColor': '#FF0000',
  'FgColor': '#00FF00'
};
var IsoFileSlotJSON2 = {
  'Range': '[2013-09-03T08:39:00.000Z,2013-09-03T08:43:00.000Z)',
  'Display': 'IsoFile_2',
  'BgColor': '#00FF00',
  'FgColor': '#0000FF'
};
var IsoFileSlotJSON3 = {
  'Range': '[2013-09-03T08:45:00.000Z,2013-09-03T08:50:00.000Z)',
  'Display': 'IsoFile_3_BIG BIG BIG BIG BIG BIG name',
  'BgColor': '#0000FF',
  'FgColor': '#FF0000'
};
var IsoFileSlotJSON4 = {
  'Range': '[2013-09-03T08:52:00.000Z,2013-09-03T08:54:36.000Z)',
  'Display': 'IsoFile_4_with_a_long_name',
  'BgColor': '#ededed',
  'FgColor': '#232323'
};

var IsoFileSlotListJSON1 = {
  'Range': '[2013-09-03T08:28:37.000Z,2013-09-03T08:54:36.000Z)',
  'IsoFileSlots': [IsoFileSlotJSON1, IsoFileSlotJSON2, IsoFileSlotJSON3, IsoFileSlotJSON4]
};
var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

var IsoFileSlotsJSON_details = '{"IsoFileSlots":[{"Details":[{"Range":"[2017-01-16T06:12:39Z,2017-01-16T08:53:27Z)","Display":"KISSEN.H"}],"Id":6,"Display":"KISSEN.H","Range":"[2017-01-16T06:12:39Z,2017-01-16T08:53:27Z)","FgColor":"#000000","BgColor":"#00FFFF"}],"Range":"[2017-01-16T08:28:27Z,2017-01-16T08:28:27Z]"}';

$.mockjax({
  url: 'http://localhost:8082/IsoFileSlots?MachineId=18*',
  responseTime: 1000,
  responseText: IsoFileSlotListJSON1
});

$.mockjax({
  url: 'http://localhost:8082/IsoFileSlots?MachineId=19*',
  responseTime: 1000,
  responseText: invalidMachineResponse,
  status: 200
});

$.mockjax({
  url: 'http://localhost:8082/IsoFileSlots?MachineId=3*',
  responseTime: 1000,
  responseText: IsoFileSlotsJSON_details
});
