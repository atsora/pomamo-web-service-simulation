// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var ShiftSlotJSON1 = {
  'ShiftBegin' : '2015-04-01T08:00:00.000Z',
  'ShiftEnd' : '2015-04-01T12:00:00.000Z',
  'ShiftColor' : '#FF0000',
  'ShiftDisplay' : 'Morning'
};
var ShiftSlotJSON2 = {
  'ShiftBegin' : '2015-04-01T14:00:00.000Z',
  'ShiftEnd' : '2015-04-01T18:00:00.000Z',
  'ShiftColor' : '#00FF00',
  'ShiftDisplay' : 'Afternoon'
};

var ShiftSlotJSON3 = {
  'ShiftBegin' : '2015-04-01T22:00:00.000Z',
  'ShiftEnd' : '2015-04-02T06:00:00.000Z',
  'ShiftColor' : '#0000FF',
  'ShiftDisplay' : 'Night'
};

var ShiftSlotListJSON1 = {
  'Begin' : '2015-04-01T08:00:00.000Z',
  'End' : '2015-04-02T08:00:00.000Z',
  'List' : [ShiftSlotJSON1, ShiftSlotJSON2, ShiftSlotJSON3]
};

$.mockjax({
  url : /^http:\/\/localhost:8082\/GetListOfShiftSlot\?Begin=2015-04-01T08:00:00.*Z$/,
  responseTime : 1000,
  responseText : ShiftSlotListJSON1
});

