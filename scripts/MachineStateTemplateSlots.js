// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var MachineStateTemplateSlotsJSON18 = {
  'MachineStateTemplateSlots' : [{
    'Id' : 1,
    'Display' : 'MST_1',
    'Range' : '2015-05-05T08:08:08Z;2015-05-06T08:08:08Z',
    'FgColor' : '#0000FF',
    'BgColor': '#FF0000',
    'PatternName': 'dots-3',
    'PatternColor': '#ededed'
  }, {
    'Id' : 2,
    'Display' : 'MST_2',
    'Range' : '2015-05-06T08:08:08Z;2015-05-07T08:08:08Z',
    'FgColor' : '#FF0000',
    'BgColor': '#00FF00',
    'PatternName': 'diagonal-stripe-1',
    'PatternColor': '#ededed'
  }
  ]};

var MachineStateTemplateSlotsJSON20 = {
  'MachineStateTemplateSlots' : [{
    'Id' : 2,
    'Display' : 'MST_2',
    'Range' : '2016-06-06T08:00:00Z;',
    'FgColor' : '#0000FF',
    'BgColor': '#FF0000',
    'PatternName': 'circles-4',
    'PatternColor': '#ededed'
  }
  ]};

var MachineStateTemplateSlotsJSON_details = '{"MachineStateTemplateSlots":[{"Id":9,"Display":"Production","Range":"[2016-09-06T08:30:00Z,)","FgColor":"#000000","BgColor":"#00FFFF"}],"Range":"[2017-01-16T11:18:41Z,2017-01-16T11:18:41Z]"}';

$.mockjax({
  url : 'http://localhost:8082/MachineStateTemplateSlots?MachineId=18',
  responseTime : 1000,
  responseText : MachineStateTemplateSlotsJSON18
});

$.mockjax({
  url : 'http://localhost:8082/MachineStateTemplateSlots?MachineId=18&Range=[2015-05-05T06:00:00.000Z,2015-05-07T18:00:00.000Z)',
  responseTime : 1200,
  responseText : MachineStateTemplateSlotsJSON18
});

$.mockjax({
  url : 'http://localhost:8082/MachineStateTemplateSlots?MachineId=20',
  responseTime : 800,
  responseText : MachineStateTemplateSlotsJSON20
});

$.mockjax({
  url : 'http://localhost:8082/MachineStateTemplateSlots?MachineId=20&Range=[2016-06-06T06:00:00.000Z,2016-06-08T18:00:00.000Z)',
  responseTime : 1000,
  responseText : MachineStateTemplateSlotsJSON20
});

/* save MST Button */
$.mockjax({
  url : 'http://localhost:8082/MachineStateTemplateSlots?MachineId=20&Range=[2016-06-06T08:00:00.000Z,2016-06-06T08:00:00.000Z)',
  responseTime : 1000,
  responseText : MachineStateTemplateSlotsJSON20
});

$.mockjax({
  url : /^http:\/\/localhost:8082\/MachineStateTemplateSlots\?MachineId=20.*$/,
  responseTime : 1000,
  responseText : MachineStateTemplateSlotsJSON20
});

/* detailed */
$.mockjax({
  url : 'http://localhost:8082/MachineStateTemplateSlots?MachineId=3*',responseTime : 1000,
  responseText : MachineStateTemplateSlotsJSON_details
});
