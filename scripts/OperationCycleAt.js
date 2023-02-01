// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var operationCycle_1 =
{
  "Range": "2014-05-04T12:00:00.000Z;2014-05-05T14:00:00.000Z",
  "EstimatedStart": false,
  "EstimatedEnd": false,
  "DeliverablePieces": [
    { "Display": "piece1" }, { "Display": "piece_2" }, { "Display": "piece_number_3" }
  ]
};
$.mockjax({
  url: /^http:\/\/localhost:8082\/OperationCycleAt\?MachineId=1.*$/,
  responseTime: 100,
  responseText: operationCycle_1
});

var operationCycle_2 =
{
  "Range": "2014-05-04T12:00:00.000Z;2014-05-05T14:00:00.000Z",
  "EstimatedStart": true,
  "EstimatedEnd": false,
  "DeliverablePieces": [
    { "Display": "piece1" }, { "Display": "piece_2" }, { "Display": "piece_number_3" }
  ]
};
$.mockjax({
  url: 'http://localhost:8082/OperationCycleAt?MachineId=2*',
  responseTime: 100,
  responseText: operationCycle_2
});


var operationCycle_3 =
{
  "Range": "2014-05-04T12:00:00.000Z;2014-05-05T14:00:00.000Z",
  "EstimatedStart": false,
  "EstimatedEnd": true,
  "DeliverablePieces": [
    { "Display": "piece1" }, { "Display": "piece_2" }
  ]
};
$.mockjax({
  url: /^http:\/\/localhost:8082\/OperationCycleAt\?MachineId=3.*$/,
  responseTime: 100,
  responseText: operationCycle_3
});


var operationCycle_4 =
{
  "Range": "2014-05-04T12:00:00.000Z;2014-05-05T14:00:00.000Z",
  "EstimatedStart": true,
  "EstimatedEnd": true,
  "DeliverablePieces": [
    { "Display": "piece1" }
  ]
};
$.mockjax({
  url: 'http://localhost:8082/OperationCycleAt?MachineId=4*',
  responseTime: 100,
  responseText: operationCycle_4
});

var operationCycle_5 =
{
  "Range": "2014-05-05T12:00:00.000Z;2014-05-05T14:00:00.000Z",
  "EstimatedStart": true,
  "EstimatedEnd": false,
  "DeliverablePieces": [
    { "Display": "piece1" }, { "Display": "piece_2" }
  ]
};
$.mockjax({
  url: 'http://localhost:8082/OperationCycleAt?MachineId=5*',
  responseTime: 100,
  responseText: operationCycle_5
});

var operationCycle_6 =
{
  "Range": "2014-05-05T12:00:00.000Z;2014-05-05T14:00:00.000Z",
  "EstimatedStart": true,
  "EstimatedEnd": true,
  "DeliverablePieces": [
    { "Display": "piece1" }
  ]
};
$.mockjax({
  url: 'http://localhost:8082/OperationCycleAt?MachineId=6*',
  responseTime: 100,
  responseText: operationCycle_6
});
