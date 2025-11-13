// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var SaveMachineStateTemplateJSON1 = {
  'Id': 3,
  'Message': 'Ok'
};

var saveFailedResponse = {
  'ErrorMessage': 'Save failed',
  'Status': 'UnexpectedError'
};

$.mockjax({
  url: 'http://localhost:8082/SaveMachineStateTemplate?Id=1*',
  responseTime: 1000,
  responseText: SaveMachineStateTemplateJSON1
});
$.mockjax({
  url: 'http://localhost:8082/SaveMachineStateTemplate?Id=3*',
  responseTime: 800,
  responseText: saveFailedResponse,
  status: 200
});


var SaveMachineStateTemplateJSONnew = {
  'Revision': {
    'Id': 3
  }
};
$.mockjax({
  url: /^http:\/\/localhost:8082\/MachineStateTemplateMachineAssociation\/Save\?MachineId=18&Range=.*&MachineStateTemplateId=7&RevisionId=.*/,
  responseTime: 800,
  responseText: SaveMachineStateTemplateJSONnew
});