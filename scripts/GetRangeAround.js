// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

//var GetShiftAround = '{"ShiftDisplay":"myShift","ShiftBegin":"2014-05-05T06:00:00Z","ShiftEnd":"2014-05-05T18:00:00Z"}';

var GetRangeAround_1b = '{"RangeDisplay":"1day","DateTimeRange":{"Begin":"2014-05-05T06:00:00.000Z","End":"2014-05-06T06:00:00.000Z"},"DayRange":{"Begin":"2014-05-05","End":"2014-05-05"} }';
$.mockjax({
  url : /^http:\/\/localhost:8082\/GetRangeAround\?Around=201[47].*RangeType=day&RangeSize=1$/,
  responseTime : 100,
  responseText : GetRangeAround_1b
});

var GetRangeAround_1 = '{"RangeDisplay":"1day","DateTimeRange":{"Begin":"2013-09-03T08:00:00.000Z","End":"2013-09-04T08:00:00.000Z"},"DayRange":{"Begin":"2013-09-03","End":"2013-09-03"} }';
$.mockjax({
  url : /^http:\/\/localhost:8082\/GetRangeAround\?Around=.*RangeType=day&RangeSize=1$/,
  responseTime : 5000,
  responseText : GetRangeAround_1
});

var GetRangeAround_6days = '{"RangeDisplay":"6days","DateTimeRange":{"Begin":"2013-09-03T08:00:00.000Z","End":"2013-09-09T08:00:00.000Z"},"DayRange":{"Begin":"2013-09-03","End":"2013-09-08"} }';
$.mockjax({
  url : /^http:\/\/localhost:8082\/GetRangeAround\?Around=.*RangeType=day&RangeSize=6$/,
  responseTime : 100,
  responseText : GetRangeAround_6days
});

var GetRangeAround_7days = '{"RangeDisplay":"7days","DateTimeRange":{"Begin":"2013-09-03T08:00:00.000Z","End":"2013-09-10T08:00:00.000Z"},"DayRange":{"Begin":"2013-09-03","End":"2013-09-09"} }';
$.mockjax({
  url : /^http:\/\/localhost:8082\/GetRangeAround\?Around=.*RangeType=day&RangeSize=7$/,
  responseTime : 100,
  responseText : GetRangeAround_7days
});

var GetRangeAround_30days = '{"RangeDisplay":"30days","DateTimeRange":{"Begin":"2013-09-01T08:00:00.000Z","End":"2013-09-30T08:00:00.000Z"},"DayRange":{"Begin":"2013-09-01","End":"2013-09-30"} }';
$.mockjax({
  url : /^http:\/\/localhost:8082\/GetRangeAround\?Around=.*RangeType=day&RangeSize=30$/,
  responseTime : 100,
  responseText : GetRangeAround_30days
});

var GetRangeAround_90days = '{"RangeDisplay":"90days","DateTimeRange":{"Begin":"2013-10-01T08:00:00.000Z","End":"2013-12-30T08:00:00.000Z"},"DayRange":{"Begin":"2013-10-01","End":"2013-12-30"} }';
$.mockjax({
  url : /^http:\/\/localhost:8082\/GetRangeAround\?Around=.*RangeType=day&RangeSize=90$/,
  responseTime : 100,
  responseText : GetRangeAround_90days
});

var GetRangeAround_365days = '{"RangeDisplay":"395days","DateTimeRange":{"Begin":"2013-01-01T08:00:00.000Z","End":"2014-01-01T08:00:00.000Z"},"DayRange":{"Begin":"2013-01-01","End":"2013-12-31"} }';
$.mockjax({
  url : /^http:\/\/localhost:8082\/GetRangeAround\?Around=.*RangeType=day&RangeSize=365$/,
  responseTime : 100,
  responseText : GetRangeAround_365days
});

var GetRangeAround_week = '{"RangeDisplay":"week","DateTimeRange":{"Begin":"2013-09-03T08:00:00.000Z","End":"2013-09-10T08:00:00.000Z"},"DayRange":{"Begin":"2013-09-03","End":"2013-09-10"} }';
$.mockjax({
  url : /^http:\/\/localhost:8082\/GetRangeAround\?Around=.*RangeType=week&RangeSize=1$/,
  responseTime : 100,
  responseText : GetRangeAround_week
});

var GetRangeAround_month = '{"RangeDisplay":"month","DateTimeRange":{"Begin":"2013-09-01T08:00:00.000Z","End":"2013-10-01T08:00:00.000Z"},"DayRange":{"Begin":"2013-09-01","End":"2013-10-01"} }';
$.mockjax({
  url : /^http:\/\/localhost:8082\/GetRangeAround\?Around=.*RangeType=month&RangeSize=1$/,
  responseTime : 100,
  responseText : GetRangeAround_month
});

var GetRangeAround_quarter = '{"RangeDisplay":"quarter","DateTimeRange":{"Begin":"2013-10-01T08:00:00.000Z","End":"2014-01-01T08:00:00.000Z"},"DayRange":{"Begin":"2014-10-01","End":"2014-01-01"} }';
$.mockjax({
  url : /^http:\/\/localhost:8082\/GetRangeAround\?Around=.*RangeType=quarter&RangeSize=1$/,
  responseTime : 100,
  responseText : GetRangeAround_quarter
});

var GetRangeAround_semester = '{"RangeDisplay":"semester","DateTimeRange":{"Begin":"2013-07-01T08:00:00.000Z","End":"2014-01-01T08:00:00.000Z"},"DayRange":{"Begin":"2013-07-01","End":"2014-01-01"} }';
$.mockjax({
  url : /^http:\/\/localhost:8082\/GetRangeAround\?Around=.*RangeType=semester&RangeSize=1$/,
  responseTime : 100,
  responseText : GetRangeAround_semester
});

var GetRangeAround_year = '{"RangeDisplay":"year","DateTimeRange":{"Begin":"2013-01-01T08:00:00.000Z","End":"2014-01-01T08:00:00.000Z"},"DayRange":{"Begin":"2013-01-01","End":"2014-01-01"} }';
$.mockjax({
  url : /^http:\/\/localhost:8082\/GetRangeAround\?Around=.*RangeType=year&RangeSize=1$/,
  responseTime : 100,
  responseText : GetRangeAround_year
});

// Au dessus des valeurs logiques - au dessous des valeurs pour simplifier les tests LineWebApp --RR
var GetRangeAround_LWA = '{"RangeDisplay":"myShift","DateTimeRange":{"Begin":"2013-09-03T08:28:37.000Z","End":"2013-09-03T08:54:36.000Z"},"DayRange":{"Begin":"2013-09-03","End":"2013-09-03"} }';
$.mockjax({
  url : /^http:\/\/localhost:8082\/GetRangeAround\?Around=.*$/,
  responseTime : 100,
  responseText : GetRangeAround_LWA
});

