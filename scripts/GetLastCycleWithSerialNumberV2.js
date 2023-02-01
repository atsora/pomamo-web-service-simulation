// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var GetLastCycleWithSerialNumberJSON1 = '{"Begin":"2013-09-03T13:51:40.000Z","End":"2013-09-03T08:54:36.000Z","EstimatedBegin":false,"EstimatedEnd":true, "CycleId":688467,"SerialNumber":"XGH452P","DataMissing":false}';
var GetLastCycleWithSerialNumberJSON2 = '{"Begin":"2013-09-03T13:51:40.000Z","End":"2013-09-03T08:54:36.000Z","EstimatedBegin":false,"EstimatedEnd":true,"CycleId":688803,"SerialNumber":"PGE965B","DataMissing":true}';
var GetLastCycleWithSerialNumberJSON3 = '{"Begin":"2013-09-03T08:54:36.000Z","End":"2013-09-03T13:51:40.000Z","EstimatedBegin":false,"EstimatedEnd":true,"CycleId":688732,"SerialNumber":"0","DataMissing":true}';
var GetLastCycleWithSerialNumberJSON4 = '{"Begin":"2013-09-03T13:51:40.000Z","End":"2013-09-03T08:54:36.000Z","EstimatedBegin":false,"EstimatedEnd":true,"CycleId":351262,"SerialNumber":"-1","DataMissing":true}';

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

$.mockjax({
  url: 'http://localhost:8082/GetLastCycleWithSerialNumberV2/18',
  responseTime: 1000,
  responseText: GetLastCycleWithSerialNumberJSON1
});

$.mockjax({
  url: 'http://localhost:8082/GetLastCycleWithSerialNumberV2/19',
  responseTime: 1000,
  responseText: GetLastCycleWithSerialNumberJSON3
});

$.mockjax({
  url: 'http://localhost:8082/GetLastCycleWithSerialNumberV2/20',
  responseTime: 1000,
  responseText: invalidMachineResponse,
  status: 200
});

$.mockjax({
  url: 'http://localhost:8082/GetLastCycleWithSerialNumberV2/21',
  responseTime: 1000,
  responseText: GetLastCycleWithSerialNumberJSON2
});

$.mockjax({
  url: 'http://localhost:8082/GetLastCycleWithSerialNumberV2/22',
  responseTime: 1000,
  responseText: GetLastCycleWithSerialNumberJSON4
});

$.mockjax({
  url: 'http://localhost:8082/GetLastCycleWithSerialNumberV2/23',
  isTimeout: true,
  responseTime: 1000
});
