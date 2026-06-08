// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `RangeAround?Around=<iso>&RangeType=<unit>&RangeSize=<n>`.
// Function form: response depends on the `Around` instant passed by the caller.

require('./_helpers');

MOCK.respond('RangeAround', function (call) {
  var around = call.params.Around ? new Date(call.params.Around) : new Date();
  if (isNaN(around.getTime())) around = new Date();
  var size = Number(call.params.RangeSize || 1);
  var type = (call.params.RangeType || 'day').toLowerCase();
  // hour=1h, shift=8h, day=24h, week=168h, month=24*30=720h, year=24*365=8760h
  var hoursPerUnit = {
    hour:    1,
    shift:   8,
    day:    24,
    week:  168,
    month: 720,
    year: 8760
  }[type] || 24;
  var halfMs = hoursPerUnit * size / 2 * 3600000;
  var lowerIso = new Date(around.getTime() - halfMs).toISOString();
  var upperIso = new Date(around.getTime() + halfMs).toISOString();
  return {
    RangeDisplay: size + ' ' + type,
    DateTimeRange: '[' + lowerIso + ',' + upperIso + ')',
    DayRange: '[' + lowerIso.substring(0, 10) + ',' + upperIso.substring(0, 10) + ')'
  };
}, { delay: 200 });
