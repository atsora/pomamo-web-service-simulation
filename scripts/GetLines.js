// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var result = new Array();
result[0] = {Id:11, Display:'2131'};
result[1] = {Id:22, Display:'Cover 1613'};
result[2] = {Id:33, Display:'3672'};
result[3] = {Id:44, Display:'Cover 1614'};

$.mockjax({
  url : 'http://localhost:8082/GetLines',
  responseTime : 1000,
  responseText : result
});

