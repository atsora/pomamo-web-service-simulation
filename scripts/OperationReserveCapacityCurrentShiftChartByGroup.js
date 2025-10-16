// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var ReserveCapacityJSON18 =
{
  'DateTime': '2020-12-03T12:45:12.2507943Z',
  'Day': '2020-12-03',
  'Shift': { 'Id': 3, 'Display': 'Afternoon', 'Color': '#FFFF80' },
  'ChartData': [
    { 'GroupId': '47', 'GroupDisplay': '47: A1-1: A1-Machine1', 'ReserveCapacity': -12.602089952499995 },
    { 'GroupId': '48', 'GroupDisplay': '48: A1-2: A1-Machine2', 'ReserveCapacity': -1.9633877923076994 }],
  'ShiftGoal': 320
};

var ReserveCapacityJSON19 =
{
  'DateTime': '2020-01-02T00:00:00Z',
  'Day': '20200102',
  'Shift': { 'Display': 'morning' },
  'ChartData':
    [{
      'GroupId': 1,
      'GroupDisplay': 'OP5',
      'ReserveCapacity': 5
    },
    {
      'GroupId': 2,
      'GroupDisplay': 'Op10',
      'ReserveCapacity': 10
    },
    {
      'GroupId': 50,
      'GroupDisplay': 'OP50',
      'ReserveCapacity': 8
    }],
  'ShiftGoal': 500
};

var ReserveCapacityJSON20 =
{
  'DateTime': '2020-01-02T00:00:00Z',
  'Day': '20200102',
  'Shift': { 'Display': 'Morning' },
  'ChartData':
    [{
      'GroupId': 1,
      'GroupDisplay': 'OP5',
      'ReserveCapacity': 5
    },
    {
      'GroupId': 2,
      'GroupDisplay': 'Op10',
      'ReserveCapacity': -10
    },
    {
      'GroupId': 50,
      'GroupDisplay': 'OP50',
      'ReserveCapacity': 5.8
    }],
  'ShiftGoal': 250
};

var ReserveCapacityJSON_Error =
{
  'ExceptionName': 'AggregateException',
  'ExceptionFullName': 'System.AggregateException',
  'InnerException': {
    'ExceptionName': 'NullReferenceException',
    'ExceptionFullName': 'System.NullReferenceException',
    'ErrorMessage': 'Object reference not set to an instance of an object.',
    'Status': 'UnexpectedError',
    'Details': ''
  },
  'ErrorMessage': 'One or more errors occurred. (Object reference not set to an instance of an object.)',
  'Status': 'UnexpectedError', 'Details': ''
};


var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

var NotApplicableResponse = {
  'ErrorMessage': 'Not Applicable Message',
  'Status': 'NotApplicable'
};

$.mockjax({
  url: 'http://localhost:8082/Operation/ReserveCapacityCurrentShiftChartByGroup?ParentGroupId=realERROR',
  responseTime: 500,
  responseText: ReserveCapacityJSON_Error
});

$.mockjax({
  url: 'http://localhost:8082/Operation/ReserveCapacityCurrentShiftChartByGroup?ParentGroupId=18',
  responseTime: 500,
  responseText: ReserveCapacityJSON18
});

$.mockjax({
  url: 'http://localhost:8082/Operation/ReserveCapacityCurrentShiftChartByGroup?ParentGroupId=19',
  responseTime: 500,
  responseText: ReserveCapacityJSON19
});

$.mockjax({
  url: 'http://localhost:8082/Operation/ReserveCapacityCurrentShiftChartByGroup?ParentGroupId=20',
  responseTime: 500,
  responseText: ReserveCapacityJSON20
});

$.mockjax({
  url: 'http://localhost:8082/Operation/ReserveCapacityCurrentShiftChartByGroup?ParentGroupId=128',
  responseTime: 1000,
  responseText: invalidMachineResponse,
  status: 200 // Error status
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/Operation\/ReserveCapacityCurrentShiftChartByGroup\?ParentGroupId=129.*$/,
  responseTime: 1000,
  responseText: NotApplicableResponse,
  status: 200 // Error status
});
