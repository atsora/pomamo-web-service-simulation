// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var RangeAround_1b = '{"RangeDisplay":"1day","DateTimeRange":"[2014-05-05T06:00:00.000Z,2014-05-06T06:00:00.000Z)","DayRange":"[2014-05-05,2014-05-05)"}';
$.mockjax({
  url : /^http:\/\/localhost:8082\/RangeAround\?Around=201[47].*RangeType=day&RangeSize=1$/,
  responseTime : 100,
  responseText : RangeAround_1b
});

var RangeAround_1 = '{"RangeDisplay":"1day","DateTimeRange":"[2017-09-03T08:00:00.000Z,2017-09-04T08:00:00.000Z)","DayRange":"[2017-09-03,2017-09-03)"}';
$.mockjax({
  url : /^http:\/\/localhost:8082\/RangeAround\?Around=.*RangeType=day&RangeSize=1$/,
  responseTime : 5000,
  responseText : RangeAround_1
});

var RangeAround_6days = '{"RangeDisplay":"6days","DateTimeRange":"[2013-09-03T08:00:00.000Z,2013-09-09T08:00:00.000Z)","DayRange":"[2013-09-03,2013-09-08)"}';
$.mockjax({
  url : /^http:\/\/localhost:8082\/RangeAround\?Around=.*RangeType=day&RangeSize=6$/,
  responseTime : 100,
  responseText : RangeAround_6days
});

var RangeAround_7days = '{"RangeDisplay":"7days","DateTimeRange":"[2013-09-03T08:00:00.000Z,2013-09-10T08:00:00.000Z)","DayRange":"[2013-09-03,2013-09-09)"}';
$.mockjax({
  url : /^http:\/\/localhost:8082\/RangeAround\?Around=.*RangeType=day&RangeSize=7$/,
  responseTime : 100,
  responseText : RangeAround_7days
});

var RangeAround_30days = '{"RangeDisplay":"30days","DateTimeRange":"[2013-09-01T08:00:00.000Z,2013-09-30T08:00:00.000Z)","DayRange":"[2013-09-01,2013-09-30)"}';
$.mockjax({
  url : /^http:\/\/localhost:8082\/RangeAround\?Around=.*RangeType=day&RangeSize=30$/,
  responseTime : 100,
  responseText : RangeAround_30days
});

var RangeAround_90days = '{"RangeDisplay":"90days","DateTimeRange":"[2013-10-01T08:00:00.000Z,2013-12-30T08:00:00.000Z)","DayRange":"[2013-10-01,2013-12-30)"}';
$.mockjax({
  url : /^http:\/\/localhost:8082\/RangeAround\?Around=.*RangeType=day&RangeSize=90$/,
  responseTime : 100,
  responseText : RangeAround_90days
});

var RangeAround_365days = '{"RangeDisplay":"395days","DateTimeRange":"[2013-01-01T08:00:00.000Z,2014-01-01T08:00:00.000Z)","DayRange":"[2013-01-01,2013-12-31)"}';
$.mockjax({
  url : /^http:\/\/localhost:8082\/RangeAround\?Around=.*RangeType=day&RangeSize=365$/,
  responseTime : 100,
  responseText : RangeAround_365days
});

var RangeAround_week = '{"RangeDisplay":"week","DateTimeRange":"[2013-09-03T08:00:00.000Z,2013-09-10T08:00:00.000Z)","DayRange":"[2013-09-03,2013-09-10)"}';
$.mockjax({
  url : /^http:\/\/localhost:8082\/RangeAround\?Around=.*RangeType=week&RangeSize=1$/,
  responseTime : 100,
  responseText : RangeAround_week
});

var RangeAround_month = '{"RangeDisplay":"month","DateTimeRange":"[2013-09-01T08:00:00.000Z,2013-10-01T08:00:00.000Z)","DayRange":"[2013-09-01,2013-10-01)"}';
$.mockjax({
  url : /^http:\/\/localhost:8082\/RangeAround\?Around=.*RangeType=month&RangeSize=1$/,
  responseTime : 100,
  responseText : RangeAround_month
});

var RangeAround_quarter = '{"RangeDisplay":"quarter","DateTimeRange":"[2013-10-01T08:00:00.000Z,2014-01-01T08:00:00.000Z)","DayRange":"[2014-10-01,2014-01-01)"}';
$.mockjax({
  url : /^http:\/\/localhost:8082\/RangeAround\?Around=.*RangeType=quarter&RangeSize=1$/,
  responseTime : 100,
  responseText : RangeAround_quarter
});

var RangeAround_semester = '{"RangeDisplay":"semester","DateTimeRange":"[2013-07-01T08:00:00.000Z,2014-01-01T08:00:00.000Z)","DayRange":"[2013-07-01,2014-01-01)"}';
$.mockjax({
  url : /^http:\/\/localhost:8082\/RangeAround\?Around=.*RangeType=semester&RangeSize=1$/,
  responseTime : 100,
  responseText : RangeAround_semester
});

var RangeAround_year = '{"RangeDisplay":"year","DateTimeRange":"[2013-01-01T08:00:00.000Z,2014-01-01T08:00:00.000Z)","DayRange":"[2013-01-01,2014-01-01)"}';
$.mockjax({
  url : /^http:\/\/localhost:8082\/RangeAround\?Around=.*RangeType=year&RangeSize=1$/,
  responseTime : 100,
  responseText : RangeAround_year
});

// Au dessus des valeurs logiques - au dessous des valeurs pour simplifier les tests LineWebApp --RR
var RangeAround_LWA = '{"RangeDisplay":"myShift","DateTimeRange":"[2013-09-03T08:28:37.000Z,2013-09-03T08:54:36.000Z)","DayRange":"[2013-09-03,2013-09-03)"}';
$.mockjax({
  url : /^http:\/\/localhost:8082\/RangeAround\?Around=.*$/,
  responseTime : 100,
  responseText : RangeAround_LWA
});

