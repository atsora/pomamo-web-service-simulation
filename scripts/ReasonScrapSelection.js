// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

/*$.mockjaxSettings.proxyType = 'POST';*/

var GetReasonSelectionV3_JSON1 = [{
  NonConformanceColor: '#090909',
  NonConformanceReasonId: 2,
  NonConformanceDisplay: 'Reason 1',
  NonConformanceCategory: 'Scrap'
},
{
  NonConformanceColor: '#232323',
  NonConformanceReasonId: 1,
  NonConformanceDisplay: 'Reason 2',
  NonConformanceCategory: 'Remachining'
},
{
  NonConformanceColor: '#630b0bff',
  NonConformanceReasonId: 3,
  NonConformanceDisplay: 'Reason 3',
  NonConformanceCategory: 'Scrap'
},
{
  NonConformanceColor: '#6fb944ff',
  NonConformanceReasonId: 4,
  NonConformanceDisplay: 'Reason 4',
  NonConformanceCategory: 'Scrap'
},
{
  NonConformanceColor: '#201eadff',
  NonConformanceReasonId: 5,
  NonConformanceDisplay: 'Reason 5',
  NonConformanceCategory: 'Scrap'
},
{
  NonConformanceColor: '#c42d96ff',
  NonConformanceReasonId: 6,
  NonConformanceDisplay: 'Reason 6',
  NonConformanceCategory: 'Scrap'
}];

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};


$.mockjax({
  url: 'http://localhost:8082/ReasonScrapSelection/Name?MachineId=18',
  responseTime: 500,
  responseText: GetReasonSelectionV3_JSON1
});