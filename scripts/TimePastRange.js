// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var PastJSON1 = '{"UtcDateTimeRange":"[2021-12-11T08:00:00.000Z,2021-12-13T08:00:00.000Z)","DayRange":"[2021-12-11,2021-12-12)"}';

$.mockjax({
  url : 'http://localhost:8082/Time/PastRange/2_day',
  responseTime : 1000,
  responseText : PastJSON1
});
