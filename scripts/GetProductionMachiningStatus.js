// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var GetProductionMachiningStatusJSON1 = {
  'WorkInformations': [{
    'Kind': 'WorkOrder'
  }, {
    'Kind': 'Part'
  }, {
    'Kind': 'Operation',
    'Value': 'OP4785'
  }
  ],
  'NbPiecesDoneGlobal': 200,
  'NbPiecesDoneDuringShift': 20,
  'GoalNowGlobal': 200,
  'GoalNowShift': 20
};
var GetProductionMachiningStatusJSON2 = {
  'WorkInformations': [{
    'Kind': 'WorkOrder',
    'Value': 'WO9374_VeryVery_LONGLONGLONG_ToTestBig Display'
  }, {
    'Kind': 'Part',
    'Value': 'PT5628_VeryVery_LONGLONGLONG_ToTestBig Display'
  }, {
    'Kind': 'Operation',
    'Value': 'OP4785_VeryVery_LONGLONGLONG_ToTestBig Display'
  }
  ],
  'NbPiecesDoneGlobal': 200,
  'NbPiecesDoneDuringShift': 20,
  'GoalNowGlobal': 200,
  'GoalNowShift': 20
};
var GetProductionMachiningStatusJSON3 = {
  'WorkInformations': [{
    'Kind': 'WorkOrder',
    'Value': 'WO4785'
  }, {
    'Kind': 'Part',
    'Value': 'PT5628'
  }, {
    'Kind': 'Operation'
  }
  ],
  'NbPiecesDoneGlobal': 150,
  'NbPiecesDoneDuringShift': 15,
  'GoalNowGlobal': 200,
  'GoalNowShift': 20
};
var GetProductionMachiningStatusJSON4 = {
  'WorkInformations': [{
    'Kind': 'WorkOrder',
    'Value': 'WO8265'
  }, {
    'Kind': 'Part'
  }, {
    'Kind': 'Operation',
    'Value': 'OP1273'
  }
  ],
  'NbPiecesDoneGlobal': 250,
  'NbPiecesDoneDuringShift': 25,
  'GoalNowGlobal': 200,
  'GoalNowShift': 20
};
var GetProductionMachiningStatusJSON5 = {
  'WorkInformations': [{
    'Kind': 'WorkOrder'
  }, {
    'Kind': 'Part'
  }, {
    'Kind': 'Operation'
  }
  ],
  'NbPiecesDoneGlobal': 200,
  'NbPiecesDoneDuringShift': 20,
  'GoalNowGlobal': 200,
  'GoalNowShift': 20
};

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

$.mockjax({
  url: /^http:\/\/localhost:8082\/GetProductionMachiningStatus\?MachineId=18.*$/,
  responseTime: 1000,
  responseText: GetProductionMachiningStatusJSON1
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/GetProductionMachiningStatus\?MachineId=189.*$/,
  responseTime: 1000,
  responseText: GetProductionMachiningStatusJSON2
});
$.mockjax({
  url: /^http:\/\/localhost:8082\/GetProductionMachiningStatus\?MachineId=20.*$/,
  responseTime: 1000,
  responseText: GetProductionMachiningStatusJSON3
});
$.mockjax({
  url: /^http:\/\/localhost:8082\/GetProductionMachiningStatus\?MachineId=21.*$/,
  responseTime: 1000,
  responseText: GetProductionMachiningStatusJSON4
});
$.mockjax({
  url: /^http:\/\/localhost:8082\/GetProductionMachiningStatus\?MachineId=22.*$/,
  responseTime: 1000,
  responseText: GetProductionMachiningStatusJSON5
});
$.mockjax({
  url: /^http:\/\/localhost:8082\/GetProductionMachiningStatus\?MachineId=128.*$/,
  responseTime: 1000,
  responseText: invalidMachineResponse,
  status: 200
});
