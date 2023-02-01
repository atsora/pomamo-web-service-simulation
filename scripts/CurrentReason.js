// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var CurrentReasonJSON1 = '{"DateTime":"20991212T12:12:12Z", "Reason":{"Color":"#008000"}, "MachineMode":{"Color":"#CCCCCC", "Category": {"Id":2} }}';

/*Running*/
var CurrentReasonJSON2 = '{"DateTime":"20991212T12:12:12Z", "Reason":{"Color":"#FFA500"}, "MachineMode":{"Color":"#CCCCCC", "Category": {"Id":3} }}';

/*Error*/
var CurrentReasonJSON3 = '{"ErrorMessage":"No monitored machine with id 20", "":true}';
var CurrentReasonJSON4 = '{"DateTime":"20991212T12:12:12Z", "Reason":{"Color":"#FFFF00"}, "MachineMode":{"Color":"#CCCCCC", "Category": {"Id":1} }}';

/*Stopped*/
/*Green Leaf - EcoMode*/
var CurrentReasonJSON5 = '{"DateTime":"20991212T12:12:12Z", "Reason":{"Color":"#FFFF00"}, "MachineMode":{"Color":"#CCCCCC", "Category": {"Id":5} }}';

/*Stopping*/
var CurrentReasonJSON6 = '{"DateTime":"20991212T12:12:12Z", "Reason":{"Color":"#FFFF00"}, "MachineMode":{"Color":"#CCCCCC", "Category": {"Id":6} }}';


$.mockjax({
  url : 'http://localhost:8082/CurrentReason?MachineId=18',
  responseTime : 1000,
  responseText : CurrentReasonJSON1
});

$.mockjax({
  url : 'http://localhost:8082/CurrentReason?MachineId=19',
  responseTime : 1000,
  responseText : CurrentReasonJSON2
});

$.mockjax({
  url : 'http://localhost:8082/CurrentReason?MachineId=20',
  responseTime : 1000,
  responseText : CurrentReasonJSON3
});

$.mockjax({
  url : 'http://localhost:8082/CurrentReason?MachineId=21',
  responseTime : 1000,
  responseText : CurrentReasonJSON4
});

$.mockjax({
  url : 'http://localhost:8082/CurrentReason?MachineId=25',
  responseTime : 1000,
  responseText : CurrentReasonJSON5
});

$.mockjax({
  url : 'http://localhost:8082/CurrentReason?MachineId=26',
  responseTime : 1000,
  responseText : CurrentReasonJSON6
});
/*
$.mockjax({
  url:/^http:\/\/localhost:8082\/CurrentReason\?MachineId=18&.*\)$/,
  responseTime : 10,
  responseText : CurrentReasonJSON1
});

$.mockjax({
  url:/^http:\/\/localhost:8082\/CurrentReason\?MachineId=19.*\)$/,
  responseTime : 10,
  responseText : CurrentReasonJSON2
});

$.mockjax({
  url:/^http:\/\/localhost:8082\/CurrentReason\?MachineId=20.*\)$/,
  responseTime : 10,
  responseText : CurrentReasonJSON3
});

$.mockjax({
  url:/^http:\/\/localhost:8082\/CurrentReason\?MachineId=21.*\)$/,
  responseTime : 10,
  responseText : CurrentReasonJSON4
});

$.mockjax({
  url:/^http:\/\/localhost:8082\/CurrentReason\?MachineId=25.*\)$/,
  responseTime : 10,
  responseText : CurrentReasonJSON5
});*/
