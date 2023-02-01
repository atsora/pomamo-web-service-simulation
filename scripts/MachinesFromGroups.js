// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var GetMachinesFromGroupD1 = '{"MachineIds":[18,12,24,51,52], "Dynamic":false}';

$.mockjax({
  url: /^http:\/\/localhost:8082\/MachinesFromGroups\?GroupIds=D1.*$/,
  responseTime: 2000,
  responseText: GetMachinesFromGroupD1
});