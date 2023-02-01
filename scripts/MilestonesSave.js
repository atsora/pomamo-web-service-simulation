// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

/* 
Storage proposal :
- Milestones Id
- Machine (from group ?)
- Date time 
- and DAY for fastest SQL access in reports
- Display = Message
- Kind (string) = 'utilisation' (future can be 'tool', according to Yigal)
 */

// save = add new (is update useful ?)

var MilestonesSaveJSON_success = {
  'Message': 'Ok', // or 'Save milestones successful'
  'Id': 7 // == Milestone Id
};
var saveFailedResponse = {
  'ErrorMessage': 'Save failed',
  'Status': 'UnexpectedError'
};

$.mockjax({
  url: 'http://localhost:8082/MilestonesSave?GroupId=1*',
  //&At=2020-03-11T04:03:00Z&Message=\"A%20new%20message\"',
  responseTime: 800,
  responseText: MilestonesSaveJSON_success
});

$.mockjax({
  url: 'http://localhost:8082/MilestonesSave?GroupId=4*',
  responseTime: 800,
  responseText: saveFailedResponse,
  status: 200
});
