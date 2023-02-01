// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var GetMachineObservationStateListV2JSON1 = {
  'Begin' : '2013-09-03T08:28:39.000Z',
  'End' : '2013-09-03T08:37:35.000Z',
  'List' : [{
    'Begin' : '2013-09-03T08:28:37.000Z',
    'End' : '2013-09-03T08:37:37.000Z',
    'Id' : 1,
    'Text' : 'MachineObservationState1'
  }
  ]
};

$.mockjax({
  url : 'http://localhost:8082/GetMachineObservationStateListV2?Id=*',
  responseTime : 1000,
  responseText : GetMachineObservationStateListV2JSON1
});
