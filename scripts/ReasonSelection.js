// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

/*$.mockjaxSettings.proxyType = 'POST';*/

var GetReasonSelectionV3_JSON1 = [{ 'Id': 41, 'Display': 'NewReasNewGrp', 'Description': 'A description of new reas new group', 'LongDisplay': 'NewReasNewGrp - ', 'Color': '#FFFF00', 'ReasonScore': 100, 'DetailsRequired': false, 'ReasonGroupDisplay': 'NewGroup', 'ReasonGroupLongDisplay': 'NewGroup - ', 'ReasonGroupId': 28 }, { 'Id': 103, 'Display': 'Test3', 'LongDisplay': 'Test3 - ', 'Color': '#FFFF00', 'ReasonScore': 100, 'DetailsRequired': false, 'ReasonGroupDisplay': 'Tests', 'ReasonGroupLongDisplay': 'Tests - ', 'ReasonGroupId': 23 }, { 'Id': 25, 'Display': 'Test1', 'Description': 'A description of Test1', 'LongDisplay': 'Test1 - ', 'Color': '#FFFF00', 'ReasonScore': 100, 'DetailsRequired': true, 'ReasonGroupDisplay': 'Tests', 'ReasonGroupLongDisplay': 'Tests - ', 'ReasonGroupId': 23 }, { 'Id': 26, 'Display': 'Test2', 'LongDisplay': 'Test2 - ', 'Color': '#FFFF00', 'ReasonScore': 100, 'DetailsRequired': false, 'ReasonGroupDisplay': 'Tests', 'ReasonGroupLongDisplay': 'Tests - ', 'ReasonGroupId': 23 }, { 'Id': 27, 'Display': 'A1', 'Description': 'A description of A1', 'LongDisplay': 'A1 - ', 'Color': '#FFFF00', 'ReasonScore': 100, 'DetailsRequired': false, 'ReasonGroupDisplay': 'A', 'ReasonGroupLongDisplay': 'A - ', 'ReasonGroupId': 24 }, { 'Id': 28, 'Display': 'A2', 'LongDisplay': 'A2 - ', 'Color': '#FFFF00', 'ReasonScore': 100, 'DetailsRequired': false, 'ReasonGroupDisplay': 'A', 'ReasonGroupLongDisplay': 'A - ', 'ReasonGroupId': 24 }, { 'Id': 39, 'Display': 'New reason', 'LongDisplay': 'New reason - Test adding a new reason', 'Description': 'Test adding a new reason', 'Color': '#FFFF00', 'ReasonScore': 100, 'DetailsRequired': false, 'ReasonGroupDisplay': 'A', 'ReasonGroupLongDisplay': 'A - ', 'ReasonGroupId': 24 }, { 'Id': 29, 'Display': 'A3', 'Description': 'A description of A3', 'LongDisplay': 'A3 - ', 'Color': '#FFFF00', 'ReasonScore': 100, 'DetailsRequired': false, 'ReasonGroupDisplay': 'A', 'ReasonGroupLongDisplay': 'A - ', 'ReasonGroupId': 24 }];

// To change :
var GetReasonSelectionV3_JSON2 = [{ 'Id': 41, 'Display': 'NewReasNewGrp', 'LongDisplay': 'NewReasNewGrp - ', 'Color': '#FFFF00', 'ReasonScore': 100, 'DetailsRequired': false, 'ReasonGroupDisplay': 'NewGroup', 'ReasonGroupLongDisplay': 'NewGroup - ', 'ReasonGroupId': 28 }, { 'Id': 103, 'Display': 'Test3', 'LongDisplay': 'Test3 - ', 'Color': '#FFFF00', 'ReasonScore': 100, 'DetailsRequired': false, 'ReasonGroupDisplay': 'Tests', 'ReasonGroupLongDisplay': 'Tests - ', 'ReasonGroupId': 23 }, { 'Id': 25, 'Display': 'Test1', 'LongDisplay': 'Test1 - ', 'Color': '#FFFF00', 'ReasonScore': 100, 'DetailsRequired': true, 'ReasonGroupDisplay': 'Tests', 'ReasonGroupLongDisplay': 'Tests - ', 'ReasonGroupId': 23 }, { 'Id': 26, 'Display': 'Test2', 'LongDisplay': 'Test2 - ', 'Color': '#FFFF00', 'ReasonScore': 100, 'DetailsRequired': false, 'ReasonGroupDisplay': 'Tests', 'ReasonGroupLongDisplay': 'Tests - ', 'ReasonGroupId': 23 }, { 'Id': 27, 'Display': 'A1', 'LongDisplay': 'A1 - ', 'Color': '#FFFF00', 'ReasonScore': 100, 'DetailsRequired': false, 'ReasonGroupDisplay': 'A', 'ReasonGroupLongDisplay': 'A - ', 'ReasonGroupId': 24 }, { 'Id': 28, 'Display': 'A2', 'LongDisplay': 'A2 - ', 'Color': '#FFFF00', 'ReasonScore': 100, 'DetailsRequired': false, 'ReasonGroupDisplay': 'A', 'ReasonGroupLongDisplay': 'A - ', 'ReasonGroupId': 24 }, { 'Id': 39, 'Display': 'New reason', 'LongDisplay': 'New reason - Test adding a new reason', 'Description': 'Test adding a new reason', 'Color': '#FFFF00', 'ReasonScore': 100, 'DetailsRequired': false, 'ReasonGroupDisplay': 'A', 'ReasonGroupLongDisplay': 'A - ', 'ReasonGroupId': 24 }, { 'Id': 29, 'Display': 'A3', 'LongDisplay': 'A3 - ', 'Color': '#FFFF00', 'ReasonScore': 100, 'DetailsRequired': false, 'ReasonGroupDisplay': 'A', 'ReasonGroupLongDisplay': 'A - ', 'ReasonGroupId': 24 }];

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

/* &begin=2013-09-03T08:28:37Z&end=2013-09-03T08:37:37Z */
/* POST = remove &periods%5B0%5D%5Bbegin%5D=2013-09-03T08%3A28%3A37Z&periods%5B0%5D%5Bend%5D=2013-09-03T08%3A37%3A37Z */
$.mockjax({
  url: 'http://localhost:8082/ReasonSelection/Post?MachineId=18',
  type: 'POST',
  contentType: 'text/json',
  dataType: 'json',
  responseTime: 800,
  responseText: GetReasonSelectionV3_JSON1
});
$.mockjax({
  url: 'http://localhost:8082/ReasonSelection/Post?MachineId=19',
  type: 'POST',
  responseTime: 800,
  responseText: GetReasonSelectionV3_JSON2
});
$.mockjax({
  url: 'http://localhost:8082/ReasonSelection/Post?MachineId=20',
  type: 'POST',
  responseTime: 800,
  responseText: GetReasonSelectionV3_JSON2
});
$.mockjax({
  url: 'http://localhost:8082/ReasonSelection/Post?MachineId=22',
  type: 'POST',
  responseTime: 1000,
  responseText: invalidMachineResponse
});
