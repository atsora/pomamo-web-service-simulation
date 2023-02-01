// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var Utilization_1 = {
  'MotionDuration': 2400,
  'NotRunningDuration': 1200
};

var Utilization_2 = {
  'MotionDuration': 1800,
  'NotRunningDuration': 1800
};

var Utilization_3 = {
  'MotionDuration': 1200,
  'NotRunningDuration': 2400
};
  
$.mockjax({
  url : /^http:\/\/localhost:8082\/Utilization\/Get\?MachineId=18.*$/,
  responseTime : 1000,
  responseText : Utilization_1
});

$.mockjax({
  url : /^http:\/\/localhost:8082\/Utilization\/Get\?MachineId=19.*$/,
  responseTime : 1000,
  responseText : Utilization_2
});

$.mockjax({
  url : /^http:\/\/localhost:8082\/Utilization\/Get\?MachineId=20.*$/,
  responseTime : 1000,
  responseText : Utilization_3
});

// ERRORS
let Utilization_Failed = '{"ErrorMessage":"No monitored machine with id 300", "Display":true}';
$.mockjax({
  url : /^http:\/\/localhost:8082\/Utilization\/Get\?MachineId=300.*$/,
  responseTime : 1000,
  responseText : Utilization_Failed
});

$.mockjax({
  url : /^http:\/\/localhost:8082\/Utilization\/Get\?MachineId=400.*$/,
  responseTime : 1000,
  status : 504
});

// TARGET for machine 19
var Target_19 = {
  'TargetPercentage': 0.90
};
$.mockjax({
  url : /^http:\/\/localhost:8082\/UtilizationTarget\/Get\?MachineId=19.*$/,
  responseTime : 1000,
  responseText : Target_19
});
