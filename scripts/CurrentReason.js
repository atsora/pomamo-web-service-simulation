// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var CurrentReasonJSON1 = '{"AutoReasonNumber": 1, "CurrentDateTime": "2026-02-02T10:26:46Z", "DateTime": "2026-02-02T10:26:44Z", "MachineMode": {"Category": {"Display": "Active", "Id": 2}, "Color": "#008000", "Id": 2, "Running": true}, "Reason": {"Color": "#008000", "Display": "Motion", "Id": 2, "LongDisplay": "Motion - ", "Text": "Motion"}, "ReasonScore": 90, "ReasonSource": {"Auto": true, "Default": true, "Manual": false, "UnsafeAutoReasonNumber": false, "UnsafeManualFlag": false}}';

/*Running - Active*/
var CurrentReasonJSON2 = '{"AutoReasonNumber": 1, "CurrentDateTime": "2026-02-02T10:26:46Z", "DateTime": "2026-02-02T10:26:44Z", "MachineMode": {"Category": {"Display": "Active", "Id": 2}, "Color": "#008000", "Id": 2, "Running": true}, "Reason": {"Color": "#FFA500", "Display": "Running", "Id": 3, "LongDisplay": "Running - ", "Text": "Running"}, "ReasonScore": 80, "ReasonSource": {"Auto": false, "Default": false, "Manual": true, "UnsafeAutoReasonNumber": false, "UnsafeManualFlag": false}}';

/*Error*/
var CurrentReasonJSON3 = '{"AutoReasonNumber": 1, "CurrentDateTime": "2026-02-02T10:26:46Z", "DateTime": "2026-02-02T10:26:44Z", "MachineMode": {"Category": {"Display": "Error", "Id": 3}, "Color": "#FF0000", "Id": 3, "Running": false}, "Reason": {"Color": "#FF0000", "Display": "Error", "Id": 3, "LongDisplay": "Error - ", "Text": "Error"}, "ReasonScore": 60, "ReasonSource": {"Auto": true, "Default": false, "Manual": false, "UnsafeAutoReasonNumber": false, "UnsafeManualFlag": false}}';

/*Stopped - Inactive*/
var CurrentReasonJSON4 = '{"AutoReasonNumber": 1, "CurrentDateTime": "2026-02-02T10:26:46Z", "DateTime": "2026-02-02T10:26:44Z", "MachineMode": {"Category": {"Display": "Inactive", "Id": 1}, "Color": "#CCCCCC", "Id": 1, "Running": false}, "Reason": {"Color": "#FFFF00", "Display": "Stopped", "Id": 1, "LongDisplay": "Stopped - ", "Text": "Stopped"}, "ReasonScore": 70, "ReasonSource": {"Auto": true, "Default": true, "Manual": false, "UnsafeAutoReasonNumber": false, "UnsafeManualFlag": false}}';

/*Green Leaf - EcoMode*/
var CurrentReasonJSON5 = '{"AutoReasonNumber": 1, "CurrentDateTime": "2026-02-02T10:26:46Z", "DateTime": "2026-02-02T10:26:44Z", "MachineMode": {"Category": {"Display": "Eco", "Id": 5}, "Color": "#00AA00", "Id": 5, "Running": false}, "Reason": {"Color": "#00AA00", "Display": "Eco Mode", "Id": 5, "LongDisplay": "Eco Mode - ", "Text": "Eco"}, "ReasonScore": 85, "ReasonSource": {"Auto": true, "Default": true, "Manual": false, "UnsafeAutoReasonNumber": false, "UnsafeManualFlag": false}}';

/*Stopping*/
var CurrentReasonJSON6 = '{"AutoReasonNumber": 1, "CurrentDateTime": "2026-02-02T10:26:46Z", "DateTime": "2026-02-02T10:26:44Z", "MachineMode": {"Category": {"Display": "Stopping", "Id": 6}, "Color": "#FF9900", "Id": 6, "Running": false}, "Reason": {"Color": "#FF9900", "Display": "Stopping", "Id": 6, "LongDisplay": "Stopping - ", "Text": "Stopping"}, "ReasonScore": 75, "ReasonSource": {"Auto": true, "Default": true, "Manual": false, "UnsafeAutoReasonNumber": false, "UnsafeManualFlag": false}}';

/*Manual*/
var CurrentReasonJSON7 = '{"AutoReasonNumber": 1, "CurrentDateTime": "2026-02-02T10:26:46Z", "DateTime": "2026-02-02T10:26:44Z", "MachineMode": {"Category": {"Display": "Manual", "Id": 7}, "Color": "#FFFF00", "Id": 7, "Running": true}, "Reason": {"Color": "#FFFF00", "Display": "Manual Operation", "Id": 7, "LongDisplay": "Manual Operation - ", "Text": "Manual"}, "ReasonScore": 95, "ReasonSource": {"Auto": false, "Default": false, "Manual": true, "UnsafeAutoReasonNumber": false, "UnsafeManualFlag": false}}';


$.mockjax({
    url: /^http:\/\/localhost:8082\/CurrentReason\?MachineId=18(?:&.*)?$/,
  responseTime: 10,
  responseText: CurrentReasonJSON1
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CurrentReason\?MachineId=19(?:&.*)?$/,
  responseTime: 10,
  responseText: CurrentReasonJSON2
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CurrentReason\?MachineId=20(?:&.*)?$/,
  responseTime: 10,
  responseText: CurrentReasonJSON3
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CurrentReason\?MachineId=21(?:&.*)?$/,
  responseTime: 10,
  responseText: CurrentReasonJSON4
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CurrentReason\?MachineId=25(?:&.*)?$/,
  responseTime: 10,
  responseText: CurrentReasonJSON5
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CurrentReason\?MachineId=26(?:&.*)?$/,
  responseTime: 10,
  responseText: CurrentReasonJSON6
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CurrentReason\?MachineId=24(?:&.*)?$/,
  responseTime: 10,
  responseText: CurrentReasonJSON7
});
