// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var MilestonesGet_JSON_Default =
{
  'Range': '[2020-03-01T10:00:00Z,2020-12-31T10:00:00Z)', // Default = 3 months
  'Machines': [
    {
      'Id': 18,
      'Display': 'Mach18',
      'DisplayPriority': 18,
      'Milestones': [ // Order = last first
        { 'Id': 1, 'DateTime': '2020-12-25T04:00:56Z', 'Message': 'One more special day' },
        { 'Id': 2, 'DateTime': '2020-06-15T02:35:20Z', 'Message': 'Another special day' },
        { 'Id': 3, 'DateTime': '2020-03-11T00:00:00Z', 'Message': 'One special day' }
      ]
    },
    {
      'MachineId': 51,
      'MachineDisplay': 'Task1',
      'DisplayPriority': 1,
      'Milestones': [
        { 'Id': 4, 'DateTime': '2020-12-25T00:00:00Z', 'Message': 'One more special day 2' },
        { 'Id': 5, 'DateTime': '2020-06-15T02:00:00Z', 'Message': 'Another special day 2' },
        { 'Id': 6, 'DateTime': '2020-03-11T05:00:00Z', 'Message': 'One special day 2' }
      ]
    }
  ]
};

var MilestonesGet_JSON_18 =
{
  'Range': '[2020-03-01T10:00:00Z,2020-12-31T10:00:00Z)', // Default = 3 months
  'Machines': [
    {
      'MachineId': 18,
      'MachineDisplay': 'Mach18',
      'Milestones': [ // Order = last first
        { 'Id': 1, 'DateTime': '2020-12-25T04:00:56Z', 'Message': 'One more special day' },
        { 'Id': 2, 'DateTime': '2020-06-15T02:35:20Z', 'Message': 'Another special day' },
        { 'Id': 3, 'DateTime': '2020-03-11T00:00:00Z', 'Message': 'One special day' }
      ]
    }
  ]
};


var MilestonesGet_JSON_51 =
{
  'Range': '[2020-03-01T10:00:00Z,2020-12-31T10:00:00Z)', // Default = 3 months
  'Machines': [
    {
      'MachineId': 51,
      'MachineDisplay': 'Task1',
      'Milestones': [
        { 'Id': 4, 'DateTime': '2020-12-25T00:00:00Z', 'Message': 'One more special day 2' },
        { 'Id': 5, 'DateTime': '2020-06-15T02:00:00Z', 'Message': 'Another special day 2' },
        { 'Id': 6, 'DateTime': '2020-03-11T05:00:00Z', 'Message': 'One special day 2' }
      ]
    }
  ]
};

var invalidResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

$.mockjax({
  url: 'http://localhost:8082/MilestonesGet',
  // url could be http://localhost:8082/MilestonesGet?GroupId=18&Range=[from,to)
  responseTime: 1000,
  responseText: MilestonesGet_JSON_Default
});

$.mockjax({
  url: 'http://localhost:8082/MilestonesGet?GroupId=ALL',
  responseTime: 1000,
  responseText: MilestonesGet_JSON_Default
});

$.mockjax({
  url: 'http://localhost:8082/MilestonesGet?GroupId=1*',
  responseTime: 1000,
  responseText: MilestonesGet_JSON_18
});

$.mockjax({
  url: 'http://localhost:8082/MilestonesGet?GroupId=18',
  responseTime: 1000,
  responseText: MilestonesGet_JSON_18
});

$.mockjax({
  url: 'http://localhost:8082/MilestonesGet?GroupId=5*',
  responseTime: 1000,
  responseText: MilestonesGet_JSON_51
});

$.mockjax({
  url: 'http://localhost:8082/MilestonesGet?GroupId=2*',
  responseTime: 1000,
  responseText: invalidResponse
});

