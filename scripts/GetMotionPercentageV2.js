// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var GetMotionPercentageJSON1 = '{"MotionPercentage":0.63587964}';
var GetMotionPercentageJSON2 = '{"MotionPercentage":0.264289657}';
var GetMotionPercentageJSON3 = '{"ErrorMessage":"No monitored machine with id 300", "Display":true}';

$.mockjax({
  url : 'http://localhost:8082/GetMotionPercentageV2?Id=18&Day=2014-08-21',
  responseTime : 1000,
  responseText : GetMotionPercentageJSON1
});

$.mockjax({
  url : 'http://localhost:8082/GetMotionPercentageV2?Id=19&Day=2014-08-21',
  responseTime : 1000,
  responseText : GetMotionPercentageJSON2
});

$.mockjax({
  url : 'http://localhost:8082/GetMotionPercentageV2?Id=20&Day=2014-08-21',
  responseTime : 1000,
  status : 504
});

/*
$.mockjax({
url: /^http:\/\/localhost:8082\/GetMotionPercentage\?Id=18(\&Day=\d\d\d\d-\d\d-\d\d)?(\&OffsetBegin=(\d)+)?(\&OffsetEnd=(\d)+)?(\&_=(\d)+)?$/,
responseTime : 10,
responseText: GetMotionPercentageJSON1
});

$.mockjax({
url: /^http:\/\/localhost:8082\/GetMotionPercentage\?Id=19(\&Day=\d\d\d\d-\d\d-\d\d)?(\&OffsetBegin=(\d))?(\&OffsetEnd=(\d))?(.)*$/,
responseTime : 10,
responseText: GetMotionPercentageJSON2
});

$.mockjax({
url: /^http:\/\/localhost:8082\/GetMotionPercentage\?Id=20(\&Day=\d\d\d\d-\d\d-\d\d)?(\&OffsetBegin=(\d))?(\&OffsetEnd=(\d))?(.)*$/,
status: 504,
responseTime : 10
});
*/
