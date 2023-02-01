// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var cncAlarmAt = '{"ByMachineModule":[{"MachineModule":{"Id":18,"Display":"Simul1","Main":true},"CncAlarms":[{"Range":"[2019-07-11T11:45:52Z,2019-07-11T11:50:50Z]","Display":"MACHINE STOPPED","Color":"#FF29FF","CncInfo":"SIMUL1","Type":"CRITICAL","Number":"4","Message":"MACHINE STOPPED","Properties":{},"Severity":"Critical","SeverityDescription":"","Stop":"Yes","Focus":true}]}],"At":"2019-07-11T11:48:59.277Z"}';


$.mockjax({
  url : /^http:\/\/localhost:8082\/CncAlarm\/At\?MachineId=18.*$/,
  responseTime : 1000,
  responseText : cncAlarmAt
});
