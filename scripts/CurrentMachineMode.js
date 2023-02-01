// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var CurrentMachineModeJSON1 = '{"DateTime":"20991212T12:12:12Z","MachineMode":{"Color":"#008000", "Category": {"Id":2} }}';

/*Running*/
var CurrentMachineModeJSON2 = '{"DateTime":"20991212T12:12:12Z","MachineMode":{"Color":"#FFA500", "Category": {"Id":3} }}';

/*Error*/
var CurrentMachineModeJSON3 = '{"ErrorMessage":"No monitored machine with id 20", "":true}';
var CurrentMachineModeJSON4 = '{"DateTime":"20991212T12:12:12Z","MachineMode":{"Color":"#FFFF00", "Category": {"Id":1} }}';

/*Stopped*/
/*Green Leaf - EcoMode*/
var CurrentMachineModeJSON5 ='{"DateTime":"20991212T12:12:12Z","MachineMode":{"Running":true, "Category":{"Id":5}}}';

/*Stopping*/
var CurrentMachineModeJSON6 ='{"DateTime":"20991212T12:12:12Z","MachineMode":{"Running":true, "Category":{"Id":6}}}';

$.mockjax({
  url : 'http://localhost:8082/CurrentMachineMode?MachineId=18',
  responseTime : 1000,
  responseText : CurrentMachineModeJSON1
});

$.mockjax({
  url : 'http://localhost:8082/CurrentMachineMode?MachineId=19',
  responseTime : 1000,
  responseText : CurrentMachineModeJSON2
});

$.mockjax({
  url : 'http://localhost:8082/CurrentMachineMode?MachineId=20',
  responseTime : 1000,
  responseText : CurrentMachineModeJSON3
});

$.mockjax({
  url : 'http://localhost:8082/CurrentMachineMode?MachineId=21',
  responseTime : 1000,
  responseText : CurrentMachineModeJSON4
});

$.mockjax({
  url : 'http://localhost:8082/CurrentMachineMode?MachineId=25',
  responseTime : 1000,
  responseText : CurrentMachineModeJSON5
});

$.mockjax({
  url : 'http://localhost:8082/CurrentMachineMode?MachineId=26',
  responseTime : 1000,
  responseText : CurrentMachineModeJSON6
});
