// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var redStackLight_response = {
  'Blocks': [{
    'Range': '[2018-12-06T07:04:37Z,2018-12-06T07:09:35Z)',
    'Color': '#FF0000',
    'Details': [{
      'Color': '#FF0000',
      'Duration': 297
    }]
  }, {
    'Range': '[2018-12-06T07:24:37Z,2018-12-06T07:29:34Z)',
    'Color': '#FF0000',
    'Details': [{
      'Color': '#FF0000',
      'Duration': 296
    }]
  }, {
    'Range': '[2018-12-06T07:44:36Z,2018-12-06T07:49:34Z)',
    'Color': '#FF0000',
    'Details': [{
      'Color': '#FF0000',
      'Duration': 297
    }]
  }, {
    'Range': '[2018-12-06T08:04:37Z,2018-12-06T08:09:35Z)',
    'Color': '#FF0000',
    'Details': [{
      'Color': '#FF0000',
      'Duration': 297
    }]
  }, {
    'Range': '[2018-12-06T08:24:37Z,2018-12-06T08:29:35Z)',
    'Color': '#FF0000',
    'Details': [{
      'Color': '#FF0000',
      'Duration': 297
    }]
  }],
  'Range': '[2018-12-06T07:00:00Z,2018-12-06T11:00:00Z)'
};

$.mockjax({
  url: /^http:\/\/localhost:8082\/CncValue\/RedStackLight\?MachineId=18\&Range=\[2018-12-06T07:00:00.000Z,2018-12-06T11:00:00.000Z\)&SkipDetails=true$/,
  responseTime: 1000,
  responseText: redStackLight_response
});
