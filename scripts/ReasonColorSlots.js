// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var ReasonColorSlots_6h_18h = {
  'Range':'[2014-05-05T06:00:00.000Z,2014-05-05T18:00:00.000Z)',
  'Blocks':[
    {'Range':'[2014-05-05T06:00:00.000Z,2014-05-05T08:00:00.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':true, 'Duration':3600}] }, 
    {'Range':'[2014-05-05T08:00:00.000Z,2014-05-05T10:00:00.000Z)','Color':'#008000','Details':[{'Color':'#008000','OverwriteRequired':false,'Duration':1600}] },
    {'Range':'[2014-05-05T10:00:00.000Z,2014-05-05T10:30:00.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':true, 'Duration':1000}] },
    {'Range':'[2014-05-05T10:30:00.000Z,2014-05-05T12:00:00.000Z)','Color':'#008000','Details':[{'Color':'#008000','OverwriteRequired':false,'Duration':500}] },
    {'Range':'[2014-05-05T12:00:00.000Z,2014-05-05T14:00:00.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':false,'Duration':200}] },
    {'Range':'[2014-05-05T14:00:00.000Z,2014-05-05T16:30:00.000Z)','Color':'#008000','Details':[{'Color':'#008000','OverwriteRequired':false,'Duration':150}] },
    {'Range':'[2014-05-05T16:30:00.000Z,2014-05-05T17:00:00.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':false,'Duration':100}] },
    {'Range':'[2014-05-05T17:00:00.000Z,2014-05-05T18:00:00.000Z)','Color':'#736F6E','Details':[{'Color':'#736F6E','OverwriteRequired':false,'Duration':50}]}] };

var ReasonColorSlots_2013 = {
  'Range':'[2013-09-03T08:28:37.000Z,2013-09-03T09:01:36.000Z)',
  'Blocks':[{'Range':'[2013-09-03T08:28:37.000Z,2013-09-03T08:37:37.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':true,'Duration':500}] },
    {'Range':'[2013-09-03T08:37:37.000Z,2013-09-03T08:43:37.000Z)','Color':'#008000','Details':[{'Color':'#008000','OverwriteRequired':false,'Duration':300}] },
    {'Range':'[2013-09-03T08:43:37.000Z,2013-09-03T08:50:36.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':true,'Duration':250}] },
    {'Range':'[2013-09-03T08:50:36.000Z,2013-09-03T08:54:36.000Z)','Color':'#008000','Details':[{'Color':'#008000','OverwriteRequired':false,'Duration':250}] },
    {'Range':'[2013-09-03T08:54:36.000Z,2013-09-03T09:01:36.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':false,'Duration':200}] }]};

var ReasonColorSlots_2017 = {
  'Range':'[2017-01-16T00:00:00.000Z,2017-01-16T12:00:00.000Z)',
  'Blocks':[{'Range':'[2017-01-16T00:00:00.000Z,2017-01-16T00:40:00.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':true,'Duration':1200}] },
    {'Range':'[2017-01-16T04:00:00.000Z,2017-01-16T04:40:00.000Z)','Color':'#008000','Details':[{'Color':'#008000','OverwriteRequired':false,'Duration':1200}] },
    {'Range':'[2017-01-16T08:00:00.000Z,2017-01-16T08:40:00.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':true,'Duration':1200}] },
    {'Range':'[2017-01-16T09:00:00.000Z,2017-01-16T09:40:00.000Z)','Color':'#008000','Details':[{'Color':'#008000','OverwriteRequired':false,'Duration':1200}] },
    {'Range':'[2017-01-16T10:00:00.000Z,2017-01-16T11:20:00.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':false,'Duration':1200}] },
    {'Range':'[2017-01-16T11:35:43Z,2017-01-16T11:47:15Z','Color':'#FFA500','Details':[{'Color':'#FFA500','OverwriteRequired':false,'Duration':100}] }]
};

// ReasonCNCbar with operation
var ReasonColorSlots_op = {
  'Range':'[2013-09-03T08:28:37.000Z,2013-09-03T08:54:36.000Z)',
  'Blocks':[{'Range':'[2013-09-03T08:28:37.000Z,2013-09-03T08:37:37.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':true,'Duration':500}] },
    {'Range':'[2013-09-03T08:37:37.000Z,2013-09-03T08:43:37.000Z)','Color':'#008000','Details':[{'Color':'#008000','OverwriteRequired':false,'Duration':400}] },
    {'Range':'[2013-09-03T08:43:37.000Z,2013-09-03T08:50:36.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':true,'Duration':300}] },
    {'Range':'[2013-09-03T08:50:36.000Z,2013-09-03T08:54:36.000Z)','Color':'#008000','Details':[{'Color':'#008000','OverwriteRequired':false,'Duration':200}] }],
  'MotionDuration'  : 600,
  'NotRunningDuration': 800 };

var ReasonColorSlots_6h_18h_mach20_small_periods = {
  'Range':'[2014-05-05T06:00:00.000Z,2014-05-05T18:00:00.000Z)',
  'Blocks':[
    {'Range':'[2014-05-05T06:00:00.000Z,2014-05-05T08:00:00.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':true, 'Duration':4000}] }, 
    {'Range':'[2014-05-05T08:00:00.000Z,2014-05-05T10:00:00.000Z)','Color':'#008000','Details':[{'Color':'#008000','OverwriteRequired':false,'Duration':3000},{'Color':'#FF0000','OverwriteRequired':false,'Duration':2400},{'Color':'#0000FF','OverwriteRequired':true,'Duration':1800}] },
    {'Range':'[2014-05-05T10:00:00.000Z,2014-05-05T10:30:00.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':true, 'Duration':1000}] },
    {'Range':'[2014-05-05T10:30:00.000Z,2014-05-05T12:00:00.000Z)','Color':'#008000','Details':[{'Color':'#008000','OverwriteRequired':false,'Duration':1000}] },
    {'Range':'[2014-05-05T12:00:00.000Z,2014-05-05T14:00:00.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':false,'Duration':6000}] },
    {'Range':'[2014-05-05T16:30:00.000Z,2014-05-05T17:00:00.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':false,'Duration':4000}] },
    {'Range':'[2014-05-05T14:00:00.000Z,2014-05-05T16:30:00.000Z)','Color':'#008000','Details':[{'Color':'#008000','OverwriteRequired':false,'Duration':5000}] },
    {'Range':'[2014-05-05T17:00:00.000Z,2014-05-05T20:00:00.000Z)','Color':'#736F6E','Details':[{'Color':'#736F6E','OverwriteRequired':false,'Duration':3000}]}] };

$.mockjax({
  url : /^http:\/\/localhost:8082\/ReasonColorSlots\?MachineId=18\&Range=\[2014-05-05T06.*\).*$/,
  responseTime : 1000,
  responseText : ReasonColorSlots_6h_18h
});
$.mockjax({
  url : /^http:\/\/localhost:8082\/ReasonColorSlots\?MachineId=18\&Range=\[2014-05-05T06:00:00Z,2014-05-05T18:00:00Z\).*$/,
  responseTime : 1000,
  responseText : ReasonColorSlots_6h_18h
});
$.mockjax({
  url : /^http:\/\/localhost:8082\/ReasonColorSlots\?MachineId=18\&Range=\[2013-09-03T08:28:37.000Z,2013-09-03T08:54:36.000Z\).*$/,
  responseTime : 1000,
  responseText : ReasonColorSlots_op
});

$.mockjax({
  url : /^http:\/\/localhost:8082\/ReasonColorSlots\?MachineId=20\&Range=\[2014-05-05T06:00:00.000Z,2014-05-05T18:00:00.000Z\).*$/,
  responseTime : 2000,
  responseText : ReasonColorSlots_6h_18h_mach20_small_periods
});

// For x-reasonslotlist
$.mockjax({
  url : /^http:\/\/localhost:8082\/ReasonColorSlots\?MachineId=18\&Range=\[2013-09-03T08:28:37.000Z,2013-09-03T09:01:36.000Z\).*$/,
  responseTime : 1000,
  responseText : ReasonColorSlots_2013
});
$.mockjax({
  url : /^http:\/\/localhost:8082\/ReasonColorSlots\?MachineId=18\&Range=\[2017-01-16T00:00:00.000Z,2017-01-16T12:00:00.000Z\).*$/,
  responseTime : 1000,
  responseText : ReasonColorSlots_2017
});
/* DO NOT CREATE MachineId=19 Range='[2014-02-07T08:00:00.000Z)' end='2013-11-07T08:00:00.000Z => NORMAL FAILURE */
