// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var GetMachineJSON18 = { 'Id': '18', 'Display': 'Simul1' };
var GetMachineJSON3 = { 'Id': '3', 'Display': 'HeidenhainLsv2' };
var GetMachineJSON19 = { 'Id': '19', 'Display': 'Machine19DisplayWithALongName' };
var GetMachineJSON21 = { 'Id': '21', 'Display': 'Machine_21' };
var GetMachineJSON22 = { 'Id': '22', 'Display': 'Machine_22' };

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

/*
$.mockjax({
  url : 'http://localhost:8082/Machine/Name?MachineId=18',
  responseTime : 10,
  responseText : GetMachineJSON18
});

$.mockjax({
  url : 'http://localhost:8082/Machine/Name?MachineId=19',
  responseTime : 10,
  responseText : GetMachineJSON19
});

$.mockjax({
  url : 'http://localhost:8082/Machine/Name?MachineId=128',
  responseTime : 10,
  responseText : invalidMachineResponse,
  status:200
});
*/

$.mockjax({
  url : 'http://localhost:8082/Machine/Name?MachineId=3',
  responseTime: 500,
  responseText: GetMachineJSON3
});

$.mockjax({
  url: 'http://localhost:8082/Machine/Name?MachineId=18',
  responseTime: 1000,
  responseText: GetMachineJSON18
});

$.mockjax({
  url: 'http://localhost:8082/Machine/Name?MachineId=19',
  responseTime: 1000,
  responseText: GetMachineJSON19
});

$.mockjax({
  url: 'http://localhost:8082/Machine/Name?MachineId=21',
  responseTime: 1000,
  responseText: GetMachineJSON21
});

$.mockjax({
  url: 'http://localhost:8082/Machine/Name?MachineId=22',
  responseTime: 1000,
  responseText: GetMachineJSON22
});

$.mockjax({
  url: 'http://localhost:8082/Machine/Name?MachineId=128',
  responseTime: 1000,
  responseText: invalidMachineResponse,
  status:200
});

$.mockjax({
  url: 'http://localhost:8082/Machine/Name?MachineId=129',
  status: 504,
  responseTime: 1000
});


$.mockjax({
  url: 'http://localhost:8082/Machine/Name?MachineId=12',
  responseTime: 1000,
  responseText: { 'Id': '12', 'Display': '12: Opc-Simulation' }
});
$.mockjax({
  url: 'http://localhost:8082/Machine/Name?MachineId=24',
  responseTime: 1000,
  responseText: { 'Id': '24', 'Display': '24: BettcherBox' }
});
$.mockjax({
  url: 'http://localhost:8082/Machine/Name?MachineId=51',
  responseTime: 1000,
  responseText: { 'Id': '51', 'Display': '51: T1: Tasks 1' }
});
$.mockjax({
  url: 'http://localhost:8082/Machine/Name?MachineId=52',
  responseTime: 1000,
  responseText: { 'Id': '52', 'Display': '52: T2: Tasks 2' }
});



$.mockjax({
  url: 'http://localhost:8082/Machine/Name?GroupId=anc1',
  responseTime: 500,
  responseText: { 'Id': 'anc1', 'Display': 'Ancestor 1' }
});
$.mockjax({
  url: 'http://localhost:8082/Machine/Name?GroupId=anc2',
  responseTime: 500,
  responseText: { 'Id': 'anc2', 'Display': 'Ancestor 2' }
});
$.mockjax({
  url: 'http://localhost:8082/Machine/Name?GroupId=anc3',
  responseTime: 500,
  responseText: { 'Id': 'anc3', 'Display': 'Ancestor 3' }
});
$.mockjax({
  url: 'http://localhost:8082/Machine/Name?GroupId=anc4',
  responseTime: 500,
  responseText: { 'Id': 'anc4', 'Display': 'Ancestor 4' }
});

$.mockjax({
  url: 'http://localhost:8082/Machine/Name?GroupId=grp',
  responseTime: 500,
  responseText: { 'Id': 'grp', 'Display': 'GROUP_display' }
});

$.mockjax({
  url: 'http://localhost:8082/Machine/Name?GroupId=G4',
  responseTime: 500,
  responseText: { 'Id': '4', 'Display': 'group4' }
});

$.mockjax({
  url: 'http://localhost:8082/Machine/Name?GroupId=G17',
  responseTime: 500,
  responseText: { 'Id': '17', 'Display': 'group17' }
});

$.mockjax({
  url: 'http://localhost:8082/Machine/Name?GroupId=218',
  responseTime: 500,
  responseText: { 'Id': '218', 'Display': 'display218' }
});

$.mockjax({
  url: 'http://localhost:8082/Machine/Name?GroupId=219',
  responseTime: 500,
  responseText: { 'Id': '219', 'Display': 'display219' }
});

$.mockjax({
  url: 'http://localhost:8082/Machine/Name?GroupId=220',
  responseTime: 500,
  responseText: { 'Id': '220', 'Display': 'display220' }
});

$.mockjax({
  url: 'http://localhost:8082/Machine/Name?GroupId=221',
  responseTime: 500,
  responseText: { 'Id': '221', 'Display': 'display221' }
});
