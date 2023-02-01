// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var currentCncValue_future = '{"ByMachineModule":[{"ByField":[{"Field":{"Unit":"mm/min"},"DateTime":"2078-04-16T03:24:09Z","Value":"2500"}]}]}';
var currentCncValue_past = '{"ByMachineModule":[{"ByField":[{"Field":{"Unit":"mm/min"},"DateTime":"2006-10-01T14:22:08Z","Value":"2500"}]}]}';

var currentCncValue_stacklightRed = {
  'ByMachineModule': [{
    'MachineModule': { 'Id': '65', 'Display': 'SimulToolLife', 'Main': 'true' },
    'ByField': [{
      'Color': '#FF0000',
      'DateTime': '2017-10-31T10:54:37Z',
      'Field': { 'Id': '126', 'Display': 'Stack light' },
      'Value': {
        'Lights':
          [{ 'Color': 'Red', 'Status': 'On' },
          { 'Color': 'Yellow', 'Status': 'Off' },
          { 'Color': 'Green', 'Status': 'Off' }],
      }
    }]
  }]
};
var currentCncValue_stacklightGreen = {
  'ByMachineModule': [{
    'MachineModule': { 'Id': '33', 'Display': 'ACMEWC110-2', 'Main': 'true' },
    'ByField': [{
      'Color': '#008000',
      'DateTime': '2017-10-31T10:54:36Z',
      'Field': { 'Id': '126', 'Display': 'Stack light' },
      'Value': {
        'Lights':
          [{ 'Color': 'Red', 'Status': 'Off' },
          { 'Color': 'Yellow', 'Status': 'Off' },
          { 'Color': 'Green', 'Status': 'On' }],
      }
    }]
  }]
};

var currentCncValue_stacklight5colors = {
  'ByMachineModule': [{
    'MachineModule': { 'Id': '33', 'Display': 'ACMEWC110-2', 'Main': 'true' },
    'ByField': [{
      'Color': '#008000',
      'DateTime': '2017-10-31T10:54:36Z',
      'Field': { 'Id': '126', 'Display': 'Stack light' },
      'Value': {
        'Lights':
          [{ 'Color': 'Red', 'Status': 'Off' },
          { 'Color': 'Yellow', 'Status': 'Off' },
          { 'Color': 'Green', 'Status': 'On' },
          { 'Color': 'Blue', 'Status': 'On' },
          { 'Color': 'White', 'Status': 'On' }],
      }
    }]
  }]
};

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

$.mockjax({
  url: /^http:\/\/localhost:8082\/CncValue\/Current\?MachineId=18(&.*)?$/,
  responseTime: 1000,
  responseText: currentCncValue_future
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CncValue\/Current\?MachineId=19(&.*)?$/,
  responseTime: 1000,
  responseText: currentCncValue_past
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CncValue\/Current\?MachineId=20(&.*)?$/,
  responseTime: 1000,
  responseText: invalidMachineResponse,
  status: 200
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CncValue\/Current\?FieldIds=126&MachineId=54(&.*)?$/,
  responseTime: 1000,
  responseText: currentCncValue_stacklightRed
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CncValue\/Current\?FieldIds=126&MachineId=27(&.*)?$/,
  responseTime: 1000,
  responseText: currentCncValue_stacklightGreen
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CncValue\/Current\?FieldIds=126&MachineId=5(&.*)?$/,
  responseTime: 1000,
  responseText: currentCncValue_stacklight5colors
});
