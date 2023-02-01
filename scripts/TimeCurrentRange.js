// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var CurrentJSON1 = '{"UtcDateTimeRange":"[2021-12-12T08:00:00.000Z,2021-12-19T08:00:00.000Z)","DayRange":"[2021-12-12,2021-12-19)"}';

$.mockjax({
  url : 'http://localhost:8082/Time/CurrentRange/1_week',
  responseTime : 1000,
  responseText : CurrentJSON1
});
