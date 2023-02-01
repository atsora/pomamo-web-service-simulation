// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var GetMachineNameAndTargetJSON1 = '{"Id":18,"Name":"Simul1","TargetPercentage":0.5}';

// Speed up our tests
$.mockjaxSettings.responseTime = 1000;

$.mockjax({
  url : 'http://localhost:8082/GetMachineNameAndTarget/*',
  responseText : GetMachineNameAndTargetJSON1
});
