// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var cncValueAt = '{"ByMachineModule":[{"MachineModule":{"Id":3,"Display":"HeidenhainLsv2","Main":true},"ByField":[{"Field":{"Id":101,"Display":"Spindle speed (RPM)"},"Value":4000,"Color":"#2B60DE","PerformanceField":true},{"Field":{"Id":109,"Display":"Program name"},"Value":"LOOP.H","Color":"","PerformanceField":false},{"Field":{"Id":171,"Display":"Program status "},"Value":"Started","Color":"","PerformanceField":false},{"Field":{"Id":170,"Display":"Execution mode "},"Value":"Automatic","Color":"","PerformanceField":false},{"Field":{"Id":114,"Display":"CNC modes "},"Value":"Automatic - Started","Color":"","PerformanceField":false},{"Field":{"Id":104,"Display":"SpindleSpeed override (%)"},"Value":100,"Color":"","PerformanceField":false},{"Field":{"Id":103,"Display":"Feedrate override (%)"},"Value":100,"Color":"#00FF00","PerformanceField":false}]}],"At":"2017-01-16T08:54:26.620Z"}';

var cncValueBlinking = '{ "ByMachineModule": [{ "MachineModule": { "Id": 23, "Display": "OP5", "Main": true }, "ByField": [{ "Field": { "Id": 201, "Display": "Production counter " }, "Value": 11530, "Color": "", "PerformanceField": false }, { "Field": { "Id": 126, "Display": "Stack light " }, "Value": { "__type": "Lemoine.Web.CncValue.StackLightDTO, Lemoine.Web", "Lights": [{ "Color": "Red", "Status": "Off" }, { "Color": "Yellow", "Status": "Off" }, { "Color": "Green", "Status": "Flashing" }] }, "Color": "", "PerformanceField": false }] }], "At": "2019-09-10T07:30:01.630Z" }';

$.mockjax({
  url: 'http://localhost:8082/CncValueAt?MachineId=18*',
  responseTime: 1000,
  responseText: cncValueAt
});

// Blinking
$.mockjax({
  url: 'http://localhost:8082/CncValueAt?MachineId=46*',
  responseTime: 1000,
  responseText: cncValueBlinking
});
