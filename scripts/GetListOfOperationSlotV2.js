// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// used in x-operationslotsinperiod

var WorkInformationConfig = {
  'IsEditable' : false,
  'OperationFromCnc' : false,
  'OnePartPerWorkOrder' : true
};
var OperationSlotJSON1 = {
  'OperationSlotId' : 4589,
  'Begin' : '2013-09-03T08:28:37.000Z',
  'End' : '2013-09-03T08:37:00.000Z',
  'WorkInformations' : [{
    'Kind' : 'WorkOrder'
  }, {
    'Kind' : 'Part'
  }, {
    'Kind' : 'Operation',
    'Value' : 'OP4785'
  }
  ],
  'Color' : '#757575'
};
var OperationSlotJSON2 = {
  'OperationSlotId' : 52,
  'Begin' : '2013-09-03T08:39:00.000Z',
  'End' : '2013-09-03T08:43:00.000Z',
  'WorkInformations' : [{
    'Kind' : 'WorkOrder',
    'Value' : 'WO9374'
  }, {
    'Kind' : 'Part',
    'Value' : 'PT5628'
  }, {
    'Kind' : 'Operation',
    'Value' : 'OP4785'
  }
  ],
  'Color' : '#757575'
};
var OperationSlotJSON3 = {
  'OperationSlotId' : 638,
  'Begin' : '2013-09-03T08:45:00.000Z',
  'End' : '2013-09-03T08:50:00.000Z',
  'WorkInformations' : [{
    'Kind' : 'WorkOrder'
  }, {
    'Kind' : 'Part'
  }, {
    'Kind' : 'Operation'
  }
  ],
  'Color' : '#757575'
};
var OperationSlotJSON4 = {
  'OperationSlotId' : 7586,
  'Begin' : '2013-09-03T08:52:00.000Z',
  'End' : '2013-09-03T08:54:36.000Z',
  'WorkInformations' : [{
    'Kind' : 'WorkOrder',
    'Value' : 'WO8265'
  }, {
    'Kind' : 'Part'
  }, {
    'Kind' : 'Operation',
    'Value' : 'OP1273'
  }
  ],
  'Color' : '#757575'
};

var OperationSlotListJSON1 = {
  'Begin' : '2013-09-03T08:28:37.000Z',
  'End' : '2013-09-03T08:54:36.000Z',
  'List' : [OperationSlotJSON1, OperationSlotJSON2, OperationSlotJSON3, OperationSlotJSON4],
  'Config' : WorkInformationConfig
};

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

var OperationSlotJSON3_1 = {
  'OperationSlotId' : 4589,
  'Begin' : '2014-05-05T06:00:00.000Z',
  'End' : '2014-05-05T11:00:00.000Z',
  'WorkInformations' : [],
  'Color' : '#757575'
};
var OperationSlotJSON3_2 = {
  'OperationSlotId' : 52,
  'Begin' : '2014-05-05T14:00:00.000Z',
  'End' : '2014-05-05T18:00:00.000Z',
  'WorkInformations' : [],
  'Color' : '#757575'
};
var OperationSlotListJSON3 = {
  'Begin' : '2014-05-05T06:00:00.000Z',
  'End' : '2014-05-05T18:00:00.000Z',
  'List' : [OperationSlotJSON3_1, OperationSlotJSON3_2],
  'Config' : WorkInformationConfig
};


$.mockjax({
  url : 'http://localhost:8082/GetListOfOperationSlotV2?Id=18',
  responseTime : 1000,
  responseText : OperationSlotListJSON1
});

$.mockjax({
  url : 'http://localhost:8082/GetListOfOperationSlotV2?Id=19',
  responseTime : 1000,
  responseText : invalidMachineResponse,
  status:200
});

$.mockjax({
  url : /^http:\/\/localhost:8082\/GetListOfOperationSlotV2\?Id=18\&Begin=2013.*Z$/,
  responseTime : 10000,
  responseText : OperationSlotListJSON1
});

$.mockjax({
  url : /^http:\/\/localhost:8082\/GetListOfOperationSlotV2\?Id=19\&Begin=2013.*Z$/,
  responseTime : 1000,
  responseText : invalidMachineResponse,
  status:200
});

$.mockjax({
  url : /^http:\/\/localhost:8082\/GetListOfOperationSlotV2\?Id=18\&Begin=2014.*Z$/,
  responseTime : 2000,
  responseText : OperationSlotListJSON3
});

// A modifier : anneeJSON= ?
$.mockjax({
  url : /^http:\/\/localhost:8082\/GetListOfOperationSlotV2\?Id=18\&Begin=2015.*Z$/,
  responseTime : 1000,
  responseText : OperationSlotListJSON1
});

// A modifier : anneeJSON= ?
$.mockjax({
  url : /^http:\/\/localhost:8082\/GetListOfOperationSlotV2\?Id=19\&Begin=2015.*Z$/,
  responseTime : 1000,
  responseText : invalidMachineResponse,
  status:200
});

$.mockjax({
  url : /^http:\/\/localhost:8082\/GetListOfOperationSlotV2\?Id=2.*Z$/,
  responseTime : 2000,
  responseText : OperationSlotListJSON3
});
