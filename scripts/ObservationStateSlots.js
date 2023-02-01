// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var ObservationStateSlotsJSON18 = {
  'ObservationStateSlots' : [{
    'Id' : 1,
    'Display' : 'OS_1',
    'Range' : '[2015-05-05T08:08:08Z;2015-05-06T08:08:08Z)',
    'FgColor' : '#0000FF',
    'BgColor': '#FF0000',
    //'PatternName': 'diagonal-stripe-1',
    'PatternColor': '#888888'
  }, {
    'Id' : 2,
    'Display' : 'OS_2',
    'Range' : '[2015-05-06T08:08:08Z;2015-05-07T08:08:08Z)',
    'FgColor' : '#FF0000',
    'BgColor': '#00FF00',
    //'PatternName': 'dots-3',
    'PatternColor': '#CCCCCC'
  }
  ]};

var ObservationStateSlotsJSON20 = {
  'ObservationStateSlots' : [{
    'Id' : 2,
    'Display' : 'OS_2',
    'Range' : '[2016-06-06T08:00:00Z;)',
    'FgColor' : '#0000FF',
    'BgColor': '#FF0000',
    //'PatternName': 'circles-4',
    'PatternColor': '#333333'
  }
  ]};

var ObservationStateSlotsJSON_details = '{"ObservationStateSlots":[{"Display":"Production","Range":"[2016-09-06T08:30:00Z,)","FgColor":"#000000","BgColor":"#00FFFF"}],"Range":"[2017-01-16T11:18:41Z,2017-01-16T11:18:41Z]"}';

$.mockjax({
  url : 'http://localhost:8082/ObservationStateSlots?MachineId=18',
  responseTime : 1000,
  responseText : ObservationStateSlotsJSON18
});

$.mockjax({
  url : 'http://localhost:8082/ObservationStateSlots?MachineId=18&Range=[2015-05-05T06:00:00.000Z,2015-05-07T18:00:00.000Z)',
  responseTime : 1000,
  responseText : ObservationStateSlotsJSON18
});

$.mockjax({
  url : 'http://localhost:8082/ObservationStateSlots?MachineId=20',
  responseTime : 1000,
  responseText : ObservationStateSlotsJSON20
});

$.mockjax({
  url : 'http://localhost:8082/ObservationStateSlots?MachineId=20&Range=[2016-06-06T06:00:00.000Z,2016-06-08T18:00:00.000Z)',
  responseTime : 1000,
  responseText : ObservationStateSlotsJSON20
});

$.mockjax({
  url : 'http://localhost:8082/ObservationStateSlots?MachineId=3*',
  responseTime : 2000,
  responseText : ObservationStateSlotsJSON_details
});
