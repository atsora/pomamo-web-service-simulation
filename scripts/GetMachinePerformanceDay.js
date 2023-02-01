// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var GetMachinePerformanceDayJSON1 = '{"MotionPercentage":0.56987,"ModeColor":"#008000","IsRunning":true}';
var GetMachinePerformanceDayJSON2 = '{"MotionPercentage":0.56987,"ModeColor":"#FFFF00","IsRunning":false}';

// Speed up our tests
$.mockjaxSettings.responseTime = 2000;

$.mockjax({
  url : 'http://localhost:8082/GetMachinePerformanceDayV2?Id=18&Day=2013-10-25',
  responseText : GetMachinePerformanceDayJSON1
});

$.mockjax({
  url : 'http://localhost:8082/GetMachinePerformanceDayV2?Id=19&Day=2013-10-25',
  responseText : GetMachinePerformanceDayJSON2
});
