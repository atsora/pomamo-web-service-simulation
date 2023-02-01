// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var OperationPPRJSON18 = {
  'Range': '[2020-08-11T07:00:00Z,2020-08-11T08:00:00Z)',
  'NbPieces': 666,
  'InProgress': true
};

var OperationPPRJSON19 = {
  'Range': '[2020-08-11T07:00:00Z,2020-08-11T08:00:00Z)',
  'NbPieces': 55,
  'Goal': 60,
  'InProgress': false
};

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};


$.mockjax({
  url: /^http:\/\/localhost:8082\/Operation\/PartProductionRange\?GroupId=18\&Range=\[201.*$/,
  responseTime: 2000,
  responseText: OperationPPRJSON18
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/Operation\/PartProductionRange\?GroupId=19\&Range=\[201.*$/,
  responseTime: 1000,
  responseText: OperationPPRJSON19
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/Operation\/PartProductionRange\?GroupId=22\&Range=\[201.*$/,
  responseTime: 2000,
  responseText: invalidMachineResponse,
  status: 200
});
