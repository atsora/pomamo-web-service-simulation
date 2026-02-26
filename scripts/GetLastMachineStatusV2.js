// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var GetLastMachineStatusJSON1 = {
  'MachineStatus': {
    'ReasonSlot': {
      'Reason': {
        'Text': 'My reason',
        'Color': '#ffffff'
      },
      'Begin': '2015-05-05 08:08:08',
      'OverwriteRequired': false
    },
    'MachineObservationState': {
      'Id': 1
    },
    'MachineMode': {
      'Id': 1
    }
  },
  'RequiredReason': true
};
var GetLastMachineStatusJSON2 = {
  'MachineStatus': {
    'ReasonSlot': {
      'Reason': {
        'Text': 'My reason',
        'Color': '#ffffff'
      },
      'Begin': '2015-05-05 08:08:08',
      'OverwriteRequired': true
    },
    'MachineObservationState': {
      'Id': 1
    },
    'MachineMode': {
      'Id': 1
    }
  },
  'RequiredReason': true
};
var GetLastMachineStatusJSON3 = {
  'MachineStatus': {
    'ReasonSlot': {
      'Reason': {
        'Text': 'My reason',
        'Color': '#ffffff'
      },
      'Begin': '2015-05-05 08:08:08',
      'OverwriteRequired': false
    },
    'MachineObservationState': {
      'Id': 1
    },
    'MachineMode': {
      'Id': 1
    }
  },
  'RequiredReason': false
};
var GetLastMachineStatusJSON4 = {
  'MachineStatus': {
    'ReasonSlot': {
      'Reason': {
        'Text': 'My reason',
        'Color': '#ffffff'
      },
      'Begin': '2015-05-05 08:08:08',
      'OverwriteRequired': true
    },
    'MachineObservationState': {
      'Id': 1
    },
    'MachineMode': {
      'Id': 1
    }
  },
  'RequiredReason': false
};

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

$.mockjax({
  url: /http:\/\/localhost:8082\/GetLastMachineStatusV2\?.*Id=18/,
  responseTime: 10,
  responseText: GetLastMachineStatusJSON1
});

$.mockjax({
  url: /http:\/\/localhost:8082\/GetLastMachineStatusV2\?.*Id=19/,
  responseTime: 1000,
  responseText: GetLastMachineStatusJSON2
});

$.mockjax({
  url: /http:\/\/localhost:8082\/GetLastMachineStatusV2\?.*Id=20/,
  responseTime: 1000,
  responseText: GetLastMachineStatusJSON3
});

$.mockjax({
  url: /http:\/\/localhost:8082\/GetLastMachineStatusV2\?.*Id=21/,
  responseTime: 1000,
  responseText: GetLastMachineStatusJSON4
});

$.mockjax({
  url: /http:\/\/localhost:8082\/GetLastMachineStatusV2\?.*Id=22/,
  responseTime: 1000,
  responseText: invalidMachineResponse,
  status: 200
});

$.mockjax({
  url: /http:\/\/localhost:8082\/GetLastMachineStatusV2\?.*Id=128/,
  status: 504,
  responseTime: 1000
});
