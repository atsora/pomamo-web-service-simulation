// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var SaveReasonJSON1 = {
  'Revision': { 'Id': 3 },
  'Message': 'Ok'
};
var saveFailedResponse = {
  'ErrorMessage': 'Save failed',
  'Status': 'UnexpectedError'
};

$.mockjax({
  url: 'http://localhost:8082/ReasonSave/Post?MachineId=18*',
  responseTime: 800,
  responseText: SaveReasonJSON1
});
$.mockjax({
  url: 'http://localhost:8082/ReasonSave/Post?MachineId=22*',
  responseTime: 800,
  responseText: saveFailedResponse,
  status: 200
});
