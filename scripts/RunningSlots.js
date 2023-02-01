// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var RunningSlots_6h_18h = {
  'Range':'[2014-05-05T06:00:00.000Z,2014-05-05T18:00:00.000Z)',
  'Blocks':[
    {'Range':'[2014-05-05T06:00:00.000Z,2014-05-05T08:00:00.000Z)' , 'Running':false, 'NotRunning':true}, 
    {'Range':'[2014-05-05T08:00:00.000Z,2014-05-05T10:00:00.000Z)', 'Running':true, 'NotRunning':false},
    {'Range':'[2014-05-05T10:00:00.000Z,2014-05-05T10:30:00.000Z)', 'Running':false, 'NotRunning':true},
    {'Range':'[2014-05-05T10:30:00.000Z,2014-05-05T12:00:00.000Z)', 'Running':true, 'NotRunning':false},
    {'Range':'[2014-05-05T12:00:00.000Z,2014-05-05T14:00:00.000Z)', 'Running':false, 'NotRunning':true},
    {'Range':'[2014-05-05T14:00:00.000Z,2014-05-05T16:30:00.000Z)', 'Running':true, 'NotRunning':false},
    {'Range':'[2014-05-05T16:30:00.000Z,2014-05-05T17:00:00.000Z)', 'Running':false, 'NotRunning':true},
    {'Range':'[2014-05-05T17:00:00.000Z,2014-05-05T20:00:00.000Z)', 'Running':false, 'NotRunning':true}
  ] };

// ReasonCNCbar with operation
var RunningSlots_op = {
  'Range':'[2013-09-03T08:28:37.000Z,2013-09-03T08:54:36.000Z)',
  'Blocks':[
    {'Range':'[2013-09-03T08:28:37.000Z,2013-09-03T08:37:37.000Z)', 'Running':false, 'NotRunning':true },
    {'Range':'[2013-09-03T08:37:37.000Z,2013-09-03T08:43:37.000Z)', 'Running':true, 'NotRunning':false },
    {'Range':'[2013-09-03T08:43:37.000Z,2013-09-03T08:50:36.000Z)', 'Running':false, 'NotRunning':true },
    {'Range':'[2013-09-03T08:50:36.000Z,2013-09-03T08:54:36.000Z)', 'Running':true, 'NotRunning':false },
    {'Range':'[2013-09-03T08:54:36.000Z,2013-09-03T09:01:36.000Z)', 'Running':true, 'NotRunning':false }],
  'MotionDuration':'7000',
  'TotalDuration'  :'86400'};

var RunningSlots_6h_18h_mach20_small_periods = {
  'Range':'[2014-05-05T06:00:00.000Z,2014-05-05T18:00:00.000Z)',
  'Blocks':[
    {'Range':'[2014-05-05T06:00:00.000Z,2014-05-05T08:00:00.000Z)' , 'Running':false, 'NotRunning':true }, 
    {'Range':'[2014-05-05T08:00:00.000Z,2014-05-05T10:00:00.000Z)', 'Running':true, 'NotRunning':false,'Duration':3000},
    {'Range':'[2014-05-05T10:00:00.000Z,2014-05-05T10:30:00.000Z)', 'Running':false, 'NotRunning':true },
    {'Range':'[2014-05-05T10:30:00.000Z,2014-05-05T12:00:00.000Z)', 'Running':true, 'NotRunning':false },
    {'Range':'[2014-05-05T12:00:00.000Z,2014-05-05T14:00:00.000Z)', 'Running':false, 'NotRunning':true },
    {'Range':'[2014-05-05T14:00:00.000Z,2014-05-05T16:30:00.000Z)', 'Running':true, 'NotRunning':false },
    {'Range':'[2014-05-05T16:30:00.000Z,2014-05-05T17:00:00.000Z)', 'Running':false, 'NotRunning':true },
    {'Range':'[2014-05-05T17:00:00.000Z,2014-05-05T20:00:00.000Z)', 'Running':false, 'NotRunning':true}] };
  
$.mockjax({
  url : /^http:\/\/localhost:8082\/RunningSlots\?MachineId=18\&Range=\[2014-05-05T06:00:00.000Z,2014-05-05T18:00:00.000Z\)$/,
  responseTime : 1000,
  responseText : RunningSlots_6h_18h
});
$.mockjax({
  url : /^http:\/\/localhost:8082\/RunningSlots\?MachineId=18\&Range=\[2014-05-05T06:00:00Z,2014-05-05T18:00:00Z\)$/,
  responseTime : 1000,
  responseText : RunningSlots_6h_18h
});
$.mockjax({
  url : /^http:\/\/localhost:8082\/RunningSlots\?MachineId=18\&Range=\[2013-09-03T08:28:37.000Z,2013-09-03T08:54:36.000Z\)$/,
  responseTime : 1000,
  responseText : RunningSlots_op
});

$.mockjax({
  url : /^http:\/\/localhost:8082\/RunningSlots\?MachineId=20\&Range=\[2014-05-05T06:00:00.000Z,2014-05-05T18:00:00.000Z\)$/,
  responseTime : 1000,
  responseText : RunningSlots_6h_18h_mach20_small_periods
});

/* DO NOT CREATE MachineId=19 Range='[2014-02-07T08:00:00.000Z)' end='2013-11-07T08:00:00.000Z => FAILED */
