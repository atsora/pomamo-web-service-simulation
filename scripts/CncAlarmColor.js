// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var CncAlarmColor_6h_18h = '{"Range":"2014-05-05T06:00:00.000Z;2014-05-05T18:00:00.000Z","Blocks":[{"Range":"2014-05-05T06:00:00.000Z;2014-05-05T07:00:00.000Z","Color":"#00FF00"},{"Range":"2014-05-05T07:00:00.000Z;2014-05-05T08:00:00.000Z","Color":"#FFFF00"},{"Range":"2014-05-05T08:00:00.000Z;2014-05-05T10:00:00.000Z","Color":"#0080FF"},{"Range":"2014-05-05T10:00:00.000Z;2014-05-05T12:00:00.000Z","Color":"#FFFF00"},{"Range":"2014-05-05T12:00:00.000Z;2014-05-05T14:00:00.000Z","Color":"#0080FF"},{"Range":"2014-05-05T14:00:00.000Z;2014-05-05T16:00:00.000Z","Color":"#FFFF00"},{"Range":"2014-05-05T16:00:00.000Z;2014-05-05T17:00:00.000Z","Color":"#0080FF"},{"Range":"2014-05-05T17:00:00.000Z;2014-05-05T22:00:00.000Z","Color":"#00FF00"}]}';

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

$.mockjax({
  url: /^http:\/\/localhost:8082\/CncAlarm\/Color\?MachineId=18\&Range=\[2014-05-05T06:00:00.000Z\,2014-05-05T18:00:00.000Z\)*$/,
  responseTime: 1000,
  responseText: CncAlarmColor_6h_18h
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CncAlarm\/Color\?MachineId=18\&Range=\[2014-05-05T06:00:00Z\,2014-05-05T18:00:00Z\)*$/,
  responseTime: 1000,
  responseText: CncAlarmColor_6h_18h
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CncAlarm\/Color\?MachineId=19\&Range=\[2013-11-07T08:00:00.000Z\,2013-11-08T08:00:00.000Z\)*$/,
  responseTime: 1000,
  responseText: invalidMachineResponse,
  status: 200
});
