// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

var OperationStateDTOJSON1 = {
  'Display': 'OperationForNextStop1',
  'UntilEnd': 60,
  'List': [{
    'Id': 3,
    'Name': 'MachineModule3',
    'NextStopList': [{
      'UntilNext': 40,
      'IsOptional': false
    }
    ],
    'SeqState': {
      'Total': 10,
      'Display': 'Sequence5',
      'Order': 5,
      'UntilNext': 20
    }
  }, {
    'Id': 12,
    'Name': 'MachineModule12',
    'NextStopList': [{
      'UntilNext': 30,
      'IsOptional': false
    }
    ]
  }
  ]
};

var OperationStateDTOJSON2 = {
  'Display': 'OperationForNextStop2',
  'UntilEnd': 60,
  'List': [{
    'Id': 3,
    'Name': 'MachineModule3',
    'NextStopList': [{
      'UntilNext': 40,
      'IsOptional': true
    }
    ],
    'SeqState': {
      'Total': 10,
      'Display': 'Sequence5',
      'Order': 5,
      'UntilNext': 20
    }
  }
  ]
};

var OperationStateDTOJSON3 = {
  'Display': 'OperationForNextStop3',
  'UntilEnd': 60,
  'List': [{
    'Id': 3,
    'Name': 'MachineModule3',
    'SeqState': {
      'Total': 10,
      'Display': 'Sequence5',
      'Order': 5,
      'UntilNext': 20
    }
  }
  ]
};

$.mockjax({
  url: 'http://localhost:8082/GetOperationStateV2*',
  responseTime: 1000,
  response: function (settings) {
    var urlMatch = settings.url.match(/http:\/\/localhost:8082\/GetOperationStateV2\/(.*)$/);
    var machineId = urlMatch[1];
    if (machineId == '123') {
      this.responseText = OperationStateDTOJSON1;
    } else if (machineId == '345') {
      this.responseText = OperationStateDTOJSON2;
    } else if (machineId == '456') {
      this.responseText = OperationStateDTOJSON3;
    } else {
      this.responseText = invalidMachineResponse;
    }
  }
});
