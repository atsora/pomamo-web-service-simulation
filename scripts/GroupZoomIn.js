// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var GroupZoomInJSON4 = {
  'Dynamic': false,
  'Children': ['3', '18', '19', '20'],
  'ChildrenDetails': [
    { 'SingleMachine': true },
    { 'SingleMachine': true },
    { 'SingleMachine': true },
    { 'SingleMachine': true }]
};
var GroupZoomInJSON17 = {
  'Dynamic': false,
  'Children': ['3', '18', '19', '20', '21', '22', 'grp', 'anc1', 'anc2', 'anc3', 'anc4', '4', '17', '218', '219', '220', '221'],
  'ChildrenDetails': [
    { 'SingleMachine': true },
    { 'SingleMachine': true },
    { 'SingleMachine': true },
    { 'SingleMachine': true },
    { 'SingleMachine': true },
    { 'SingleMachine': true },
    { 'SingleMachine': false },
    { 'SingleMachine': false },
    { 'SingleMachine': false },
    { 'SingleMachine': false },
    { 'SingleMachine': false },
    { 'SingleMachine': true },
    { 'SingleMachine': true },
    { 'SingleMachine': true },
    { 'SingleMachine': true },
    { 'SingleMachine': true },
    { 'SingleMachine': true }]
};

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine or group',
  'Status': 'WrongRequestParameter'
};

//'http://localhost:8082/GroupZoomIn?GroupId=4&Details=true',
$.mockjax({
  url: /^http:\/\/localhost:8082\/Machine\/GroupZoomIn\?GroupId=G4.*$/,
  responseTime: 500,
  responseText: GroupZoomInJSON4
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/Machine\/GroupZoomIn\?GroupId=G17.*$/,
  responseTime: 500,
  responseText: GroupZoomInJSON17
});

/*$.mockjax({
  url : 'http://localhost:8082/Machine/GroupZoomIn?GroupId=G19&Details=true',
  responseTime : 500,
  responseText : GroupZoomInJSON19
});*/

$.mockjax({
  url: /^http:\/\/localhost:8082\/Machine\/GroupZoomIn\?GroupId=G128.*$/,
  responseTime: 1000,
  responseText: invalidMachineResponse,
  status: 200
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/Machine\/GroupZoomIn\?GroupId=G129.*$/,
  status: 504,
  responseTime: 1000
});
