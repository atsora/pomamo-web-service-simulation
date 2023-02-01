// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var SaveMachineObservationStateJSON1 = {
  'Id': 3,
  'Message': 'Ok'
};
var saveFailedResponse = {
  'ErrorMessage': 'Save failed',
  'Status': 'UnexpectedError'
};

$.mockjax({
  url: 'http://localhost:8082/SaveMachineObservationStateV2?Id=1*',
  responseTime: 1000,
  responseText: SaveMachineObservationStateJSON1
});
$.mockjax({
  url: 'http://localhost:8082/SaveMachineObservationStateV2?Id=3*',
  responseTime: 800,
  responseText: saveFailedResponse
});
