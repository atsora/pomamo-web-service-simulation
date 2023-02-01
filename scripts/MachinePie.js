// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var MachinePieJSON3 = { 'Permanent': true, 'PieType': 'cycleprogresspie' };
var MachinePieJSON18 = { 'Permanent': true, 'PieType': 'partproductionstatuspie' };

$.mockjax({
  url: 'http://localhost:8082/Machine/Pie?GroupId=3',
  responseTime: 500,
  responseText: MachinePieJSON3
});

$.mockjax({
  url: 'http://localhost:8082/Machine/Pie?GroupId=18',
  responseTime: 500,
  responseText: MachinePieJSON18
});
