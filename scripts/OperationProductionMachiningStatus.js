// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var OpProductionMachiningStatusJSON18 =
{
  'NbPiecesDoneDuringShift': 10,
  'GoalNowShift': 200,
  'Day': '2019-06-27',
  'Shift': {
    'Id': 2, 'Display': ' Morning', 'Color': '#0080C0'
  },
  'ComingEvents': [],
  'ActiveEvents': []
};

var OpProductionMachiningStatusJSON19 =
{
  'NbPiecesDoneDuringShift': 19,
  'GoalNowShift': 20,
  'Day': '2019-06-27',
  'Shift': {
    'Id': 2, 'Display': ' Morning', 'Color': '#0080C0'
  },
  'ActiveEvents': [],
  'ComingEvents': [{
    'Message': 'End in', 'DateTime': '2017-03-14T11:12:55Z', 'Severity': { 'Name': 'Info', 'LevelName': 'Info', 'LevelValue': '80' }
  }]
};

var OpProductionMachiningStatusJSON20 =
{
  'NbPiecesDoneDuringShift': 8,
  'GoalNowShift': 20,
  'Day': '2019-06-27',
  'Shift': {
    'Id': 2, 'Display': ' Morning', 'Color': '#0080C0'
  },
  'ActiveEvents': [{
    'Message': 'Stopped since', 'DateTime': '2019-03-14T11:12:55Z', 'Severity': { 'Name': 'Error', 'LevelName': 'Error', 'LevelValue': '180' }
  }],
  'ComingEvents': []
};

// Old Get
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

var NotApplicableResponse = {
  'ErrorMessage': 'Not Applicable Message',
  'Status': 'NotApplicable'
};

$.mockjax({
  url: 'http://localhost:8082/Operation/ProductionMachiningStatus?MachineId=18&IncludeEvents=true',
  responseTime: 500,
  responseText: OpProductionMachiningStatusJSON18
});

$.mockjax({
  url: 'http://localhost:8082/Operation/ProductionMachiningStatus?MachineId=19&IncludeEvents=true',
  responseTime: 500,
  responseText: OpProductionMachiningStatusJSON19
});

$.mockjax({
  url: 'http://localhost:8082/Operation/ProductionMachiningStatus?MachineId=20&IncludeEvents=true',
  responseTime: 500,
  responseText: OpProductionMachiningStatusJSON20
});

$.mockjax({
  url: 'http://localhost:8082/Operation/ProductionMachiningStatus?MachineId=128&IncludeEvents=true',
  responseTime: 1000,
  responseText: invalidMachineResponse,
  status: 200 // Error status
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/Operation\/ProductionMachiningStatus\?MachineId=129.*$/,
  responseTime: 1000,
  responseText: NotApplicableResponse,
  status: 200 // Error status
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/Operation\/ProductionMachiningStatus\?MachineId=918.*$/,
  responseTime: 1000,
  responseText: GetProductionMachiningStatusJSON1
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/Operation\/ProductionMachiningStatus\?MachineId=919.*$/,
  responseTime: 1000,
  responseText: GetProductionMachiningStatusJSON2
});
$.mockjax({
  url: /^http:\/\/localhost:8082\/Operation\/ProductionMachiningStatus\?MachineId=920.*$/,
  responseTime: 1000,
  responseText: GetProductionMachiningStatusJSON3
});
$.mockjax({
  url: /^http:\/\/localhost:8082\/Operation\/ProductionMachiningStatus\?MachineId=21.*$/,
  responseTime: 1000,
  responseText: GetProductionMachiningStatusJSON4
});
$.mockjax({
  url: /^http:\/\/localhost:8082\/Operation\/ProductionMachiningStatus\?MachineId=922.*$/,
  responseTime: 1000,
  responseText: GetProductionMachiningStatusJSON5
});
$.mockjax({
  url: /^http:\/\/localhost:8082\/Operation\/ProductionMachiningStatus\?MachineId=18.*$/,
  responseTime: 1000,
  responseText: OpProductionMachiningStatusJSON18
});
