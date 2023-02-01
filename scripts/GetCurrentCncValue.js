// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Deprecated

var currentCncValue_future = '{"Unit":"mm/min","LastCncValueDate":"1978-04-16T03:24:09Z","LastCncValueData":"2500"}';
var currentCncValue_past = '{"Unit":"mm/min","LastCncValueDate":"2006-10-01T14:22:08Z","LastCncValueData":"2500"}';

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

$.mockjax({
  url: /^http:\/\/localhost:8082\/GetCurrentCncValue\?Id=18$/,
  responseTime: 1000,
  responseText: currentCncValue_future
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/GetCurrentCncValue\?Id=19$/,
  responseTime: 1000,
  responseText: currentCncValue_past
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/GetCurrentCncValue\?Id=20$/,
  responseTime: 1000,
  responseText: invalidMachineResponse,
  status: 200
});
