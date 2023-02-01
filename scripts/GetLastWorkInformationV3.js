// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var WorkInformationConfig_V3 = {
  'IsEditable': false,
  'OperationFromCnc': false,
  'OnePartPerWorkOrder': false
};

var GetLastWorkInformationV3JSON1 = {
  'SlotMissing': false,
  'Begin': '2013-12-12T16:20:57.000Z',
  'End': '2013-12-12T16:24:54.000Z',
  'WorkInformations': [{
    'Kind': 'WorkOrder'
  }, {
    'Kind': 'Part'
  }, {
    'Kind': 'Operation',
    'Value': 'OP4785'
  }
  ],
  'DataMissing': true,
  'Config': WorkInformationConfig_V3
};
var GetLastWorkInformationV3JSON2 = {
  'SlotMissing': false,
  'Begin': '2013-12-12T16:20:57.000Z',
  'End': '2013-12-12T16:24:54.000Z',
  'WorkInformations': [{
    'Kind': 'WorkOrder',
    'Value': 'WO9374'
  }, {
    'Kind': 'Part',
    'Value': 'PT5628'
  }, {
    'Kind': 'Operation',
    'Value': 'OP4785'
  }
  ],
  'DataMissing': false,
  'Config': WorkInformationConfig_V3
};
var GetLastWorkInformationV3JSON3 = {
  'SlotMissing': false,
  'Begin': '2013-12-12T16:20:57.000Z',
  'End': '2013-12-12T16:24:54.000Z',
  'WorkInformations': [{
    'Kind': 'WorkOrder',
    'Value': 'WO4785_veryvery_long_longer_longest_with_big_blabla_and_more_and_more_and_more'
  }, {
    'Kind': 'Part',
    'Value': 'PT5628_veryvery_long_longer_longest_with_big_blabla_and_more_and_more_and_more'
  }, {
    'Kind': 'Operation'
  }
  ],
  'DataMissing': true,
  'Config': WorkInformationConfig_V3
};
var GetLastWorkInformationV3JSON4 = {
  'SlotMissing': false,
  'Begin': '2013-12-12T16:20:57.000Z',
  'End': '2013-12-12T16:24:54.000Z',
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
  'DataMissing': true,
  'Config': WorkInformationConfig_V3
};
var GetLastWorkInformationV3JSON5 = {
  'SlotMissing': false,
  'Begin': '2013-12-12T16:20:57.000Z',
  'End': '2013-12-12T16:24:54.000Z',
  'WorkInformations': [{
    'Kind': 'WorkOrder'
  }, {
    'Kind': 'Part'
  }, {
    'Kind': 'Operation'
  }
  ],
  'DataMissing': true,
  'Config': WorkInformationConfig_V3
};

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

var GetLastWorkInformationV3JSON7 = {
  'SlotMissing': true
};
var GetLastWorkInformationV3JSON8 = {
  'MonitoredMachineOperationBar': 'None'
};

// For currentworkinfo / machines 30/31/32/38/39
//var GetLastWorkInformationV3JSON30 = // 404
var GetLastWorkInformationV3JSON31 = {
  'SlotMissing': true
};
var GetLastWorkInformationV3JSON32 = {
  'SlotMissing': false,
  'MonitoredMachineOperationBar': 'None'
};
var GetLastWorkInformationV3JSON38 = {
  'SlotMissing': false,
  'WorkInformations': [
    {
      'Kind': 'WorkOrder',
      'Value': 'WO'
    }, {
      'Kind': 'Part',
      'Value': 'Part2'
    }, {
      'Kind': 'Operation',
      'Value': 'Op'
    }
  ],
};
var GetLastWorkInformationV3JSON39 = {
  'SlotMissing': false,
  'WorkInformations': [
    {
      'Kind': 'WorkOrder',
      'Value': 'WorkOrder in many word to test multilines'
    }, {
      'Kind': 'Part',
      'Value': 'Part too'
    }, {
      'Kind': 'Operation',
      'Value': 'Operation long enough'
    }
  ]
};


$.mockjax({
  url: 'http://localhost:8082/GetLastWorkInformationV3/18',
  responseTime: 1000,
  responseText: GetLastWorkInformationV3JSON1
});

$.mockjax({
  url: 'http://localhost:8082/GetLastWorkInformationV3/19',
  responseTime: 1000,
  responseText: GetLastWorkInformationV3JSON2
});
$.mockjax({
  url: 'http://localhost:8082/GetLastWorkInformationV3/20',
  responseTime: 10,
  responseText: GetLastWorkInformationV3JSON3
});
$.mockjax({
  url: 'http://localhost:8082/GetLastWorkInformationV3/21',
  responseTime: 1000,
  responseText: GetLastWorkInformationV3JSON4
});
$.mockjax({
  url: 'http://localhost:8082/GetLastWorkInformationV3/22',
  responseTime: 1000,
  responseText: GetLastWorkInformationV3JSON5
});
$.mockjax({
  url: 'http://localhost:8082/GetLastWorkInformationV3/128',
  responseTime: 1000,
  responseText: invalidMachineResponse,
  status: 200
});
$.mockjax({
  url: 'http://localhost:8082/GetLastWorkInformationV3/23',
  responseTime: 1000,
  responseText: GetLastWorkInformationV3JSON7
});

$.mockjax({
  url: 'http://localhost:8082/GetLastWorkInformationV3/25',
  responseTime: 1000,
  responseText: GetLastWorkInformationV3JSON8
});

$.mockjax({
  url: 'http://localhost:8082/GetLastWorkInformationV3/24',
  status: 504,
  responseTime: 1000
});

// For currentworkinfo / machines 30/31/32/38/39
$.mockjax({
  url: 'http://localhost:8082/GetLastWorkInformationV3/30',
  status: 504,
  responseTime: 1000
});
$.mockjax({
  url: 'http://localhost:8082/GetLastWorkInformationV3/31',
  responseTime: 1000,
  responseText: GetLastWorkInformationV3JSON31
});
$.mockjax({
  url: 'http://localhost:8082/GetLastWorkInformationV3/32',
  responseTime: 1000,
  responseText: GetLastWorkInformationV3JSON32
});
$.mockjax({
  url: 'http://localhost:8082/GetLastWorkInformationV3/38',
  responseTime: 1000,
  responseText: GetLastWorkInformationV3JSON38
});
$.mockjax({
  url: 'http://localhost:8082/GetLastWorkInformationV3/39',
  responseTime: 1000,
  responseText: GetLastWorkInformationV3JSON39
});
