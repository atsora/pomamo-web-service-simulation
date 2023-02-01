// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var OperationSlotJSON1 = {
  'Id': 4589,
  'Range': '2013-09-03T08:28:37.000Z,2013-09-03T08:37:00.000Z',
  'Display': 'OP4785',
  'BgColor': '#999966'
};
var OperationSlotJSON2 = {
  'Id': 52,
  'Range': '2013-09-03T08:39:00.000Z,2013-09-03T08:43:00.000Z',
  'Display': 'WO9374/PT5628/OP4785',
  'FgColor': '#0000FF',
  'BgColor': '#FF0000',
  'PatternName': 'diagonal-stripe-3',
  'PatternColor': '#ededed'
};
var OperationSlotJSON3 = {
  'Id': 638,
  'Range': '2013-09-03T08:45:00.000Z,2013-09-03T08:50:00.000Z',
  'Display': 'WorkOrder/Part/Operation',
  'FgColor': '#FF0000',
  'BgColor': '#00FF00'
};
var OperationSlotJSON4 = {
  'Id': 7586,
  'Range': '2013-09-03T08:52:00.000Z,2013-09-03T08:54:36.000Z',
  'Display': 'WO8265/OP1273',
  'FgColor': '#0000FF',
  'BgColor': '#FF0000'
};

var OperationSlotListJSON1 = {
  'Range': '2013-09-03T08:28:37.000Z,2013-09-03T08:54:36.000Z',
  'Blocks': [OperationSlotJSON1, OperationSlotJSON2, OperationSlotJSON3, OperationSlotJSON4]
};

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

var OperationSlotJSON3_1 = {
  'Id': 4589,
  'Range': '2014-05-05T06:00:00.000Z,2014-05-05T11:00:00.000Z',
  'Display': 'Op1',
  'BgColor': '#757575'
};
var OperationSlotJSON3_2 = {
  'Id': 52,
  'Range': '2014-05-05T14:00:00.000Z,2014-05-05T18:00:00.000Z',
  'Display': 'Op2',
  'BgColor': '#575757'
};
var OperationSlotListJSON3 = {
  'Range': '[2014-05-05T06:00:00.000Z,2014-05-05T18:00:00.000Z)',
  'Blocks': [OperationSlotJSON3_1, OperationSlotJSON3_2]
};
var OperationSlotListJSON_details = {
  'Blocks': [{
    'Details': [{
      'Range': '[2017-01-16T07:00:00Z,2017-01-16T09:49:18Z)',
      'Display': 'KISSEN o: op1name'
    }],
    'Id': 1,
    'Display': 'KISSEN o: op1name',
    'Range': '[2017-01-16T07:00:00Z,2017-01-16T09:49:18Z)',
    'FgColor': '#FFFFFF', 'BgColor': '#FF00FF'
  }],
  'Range': '[2017-01-16T08:54:04Z,2017-01-16T08:54:04Z]'
};

/*
$.mockjax({
  url : "http://localhost:8082/OperationSlots?MachineId=18",
  responseTime : 1000,
  responseText : OperationSlotListJSON1
});

$.mockjax({
  url : "http://localhost:8082/OperationSlots?MachineId=19",
  responseTime : 1000,
  responseText : invalidMachineResponse,
  status: 200
});
*/
$.mockjax({
  url: /^http:\/\/localhost:8082\/OperationSlots\?MachineId=18\&Range=\[2013.*$/,
  responseTime: 1000,
  responseText: OperationSlotListJSON1
});
/*
$.mockjax({
  url : /^http:\/\/localhost:8082\/OperationSlots\?MachineId=19\&Range=\[2013.*$/,
  responseTime : 1000,
  responseText : invalidMachineResponse,
  status: 200
});*/

$.mockjax({
  url: /^http:\/\/localhost:8082\/OperationSlots\?MachineId=19\&Range=\[2014.*$/,
  responseTime: 2000,
  responseText: invalidMachineResponse,
  status: 200
});
/*
$.mockjax({
  url : /^http:\/\/localhost:8082\/OperationSlots\?MachineId=18\&Range=\[2014.*$/,
  responseTime : 200,
  responseText : OperationSlotListJSON3
});

// A modifier : anneeJSON= ?
$.mockjax({
  url : /^http:\/\/localhost:8082\/OperationSlots\?MachineId=18\&Range=\[2015.*$/,
  responseTime : 100,
  responseText : OperationSlotListJSON1
});

// A modifier : anneeJSON= ?
$.mockjax({
  url : /^http:\/\/localhost:8082\/OperationSlots\?MachineId=19\&Range=\[2015.*$/,
  responseTime : 100,
  responseText : invalidMachineResponse,
  status: 200
});
*/
$.mockjax({
  url: /^http:\/\/localhost:8082\/OperationSlots\?MachineId=2.*$/,
  responseTime: 2000,
  responseText: OperationSlotListJSON3
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/OperationSlots\?MachineId=35.*$/,
  responseTime: 2000,
  responseText: OperationSlotListJSON_details
});
