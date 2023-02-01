// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var GetMachineAlarmsJSON18 = '{"Id":18,"Name":"Machine 18","MissingWorkOrder":true,"MissingReason":true,"UntilNextStop":1270,"Alert":false}';
var GetMachineAlarmsJSON19 = '{"Id":25,"Name":"","MissingWorkOrder":true,"MissingReason":false,"UntilNextStop":270,"Alert":false}';
var GetMachineAlarmsJSON20 = '{"Id":20,"Name":"Machine 20","MissingWorkOrder":false,"MissingReason":false,"UntilNextStop":170,"Alert":false}';
var GetMachineAlarmsJSON21 = '{"Id":21,"Name":"Machine 21","MissingWorkOrder":false,"MissingReason":true,"UntilNextStop":70,"Alert":false}';

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

//var GetMachineAlarmsJSON3 = '{"Id":3,"Name":"HeidenhainLsv2"}';

$.mockjax({
  url: 'http://localhost:8082/GetMachineAlarmsV2?Id=18',
  responseTime: 1000,
  responseText: GetMachineAlarmsJSON18
});

$.mockjax({
  url: 'http://localhost:8082/GetMachineAlarmsV2?Id=19',
  responseTime: 1000,
  responseText: GetMachineAlarmsJSON19
});

$.mockjax({
  url: 'http://localhost:8082/GetMachineAlarmsV2?Id=20',
  responseTime: 1000,
  responseText: GetMachineAlarmsJSON20
});

$.mockjax({
  url: 'http://localhost:8082/GetMachineAlarmsV2?Id=21',
  responseTime: 1000,
  responseText: GetMachineAlarmsJSON21
});

$.mockjax({
  url: 'http://localhost:8082/GetMachineAlarmsV2?Id=128',
  responseTime: 1000,
  responseText: invalidMachineResponse,
  status: 200
});
