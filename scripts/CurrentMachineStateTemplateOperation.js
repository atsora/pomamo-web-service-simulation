// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var CurrentMachineStateTemplateOperationJSON18 = {
  'MachineStateTemplate': {
    'Id': 7
  },
  'Operation': {
    'Display': 'MY operation'
  },
  'Since': '2019-06-06T05:05:05Z'
};

var CurrentMachineStateTemplateOperationJSON20 = {
  'MachineStateTemplate': {
    'Id': 7
  },
  'Operation': {
    'Display': 'VERY very VERY very VERY very VERY very VERY very VERY very LONG operation to TEST with more text because it is not long enough, and more and more and more and more and more'
  },
  'Since': '2019-08-08T00:00:00Z'
};

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

$.mockjax({
  url: /^http:\/\/localhost:8082\/CurrentMachineStateTemplateOperation\?MachineId=18.*$/,
  responseTime: 1000,
  responseText: CurrentMachineStateTemplateOperationJSON18
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CurrentMachineStateTemplateOperation\?MachineId=20.*$/,
  responseTime: 1000,
  responseText: CurrentMachineStateTemplateOperationJSON20
});

/* error */
$.mockjax({
  url: 'http://localhost:8082/CurrentMachineStateTemplateOperation?MachineId=128*',
  responseTime: 1000,
  responseText: invalidMachineResponse,
  status: 200
});
