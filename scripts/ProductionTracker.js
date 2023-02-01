// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var ProductionTracker_8h_16h = {
  'Range': '[2020-05-05T08:00:00.000Z,2020-05-05T16:00:00Z)',
  'HourlyData': [
    { 'Range': '[2020-05-05T08:00:00Z,2020-05-05T09:00:00Z)', 'Actual': 15, 'Target': 25, 'Static': true },
    { 'Range': '[2020-05-05T09:00:00Z,2020-05-05T10:00:00Z)', 'Actual': 14.2, 'Target': 25, 'Static': true },
    { 'Range': '[2020-05-05T10:00:00Z,2020-05-05T11:00:00Z)', 'Actual': 3, 'Target': 25, 'Static': false }
  ]
};

var ProductionTracker_reservecapacity = {
  'HourlyData': [
    { 'LocalHour': '2021-01-14T09:00:00', 'Range': '[2021-01-14T08:00:00Z,2021-01-14T09:00:00Z)', 'Actual': 14, 'Target': 30, 'Static': true, 'ProductionCapacity': 30 },
    { 'LocalHour': '2021-01-14T10:00:00', 'Range': '[2021-01-14T09:00:00Z,2021-01-14T10:00:00Z)', 'Actual': 0, 'Target': 22.5, 'Static': true, 'ProductionCapacity': 22.5 },
    { 'LocalHour': '2021-01-14T11:00:00', 'Range': '[2021-01-14T10:00:00Z,2021-01-14T11:00:00Z)', 'Actual': 8, 'Target': 30, 'Static': true, 'ProductionCapacity': 30 },
    { 'LocalHour': '2021-01-14T12:00:00', 'Range': '[2021-01-14T11:00:00Z,2021-01-14T12:00:00Z)', 'Actual': 15, 'Target': 0, 'Static': false, 'ProductionCapacity': 0 }
    //,{ 'LocalHour': '2021-01-14T13:00:00', 'Range': 'empty', 'Actual': 0, 'Static': true, 'ProductionCapacity': 0 }
  ],
  'Range': '[2021-01-14T08:00:00Z,2021-01-14T12:00:00Z)',
  'ProductionCapacity': 112.5,
  'GlobalTarget': 112.5
};


var ProductionTracker_error = {
  'ErrorMessage': 'Invalid group',
  'Status': 'WrongRequestParameter'
};

$.mockjax({
  /*url: /^http:\/\/localhost:8082\/ProductionTracker\?Range=\[2020-05-05T08:00:00.000Z,2020-05-05T16:00:00.000Z\)&GroupId=*$/, */
  url: 'http://localhost:8082/ProductionTracker?GroupId=18&Range=[2020-05-05T08:00:00.000Z,2020-05-05T16:00:00.000Z)',
  responseTime: 1000,
  responseText: ProductionTracker_8h_16h
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/ProductionTracker\?GroupId=47*$/,
  responseTime: 1000,
  responseText: ProductionTracker_reservecapacity
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/ProductionTracker\?GroupId=666&Range=\[2020-05-05T08:00:00.000Z,2020-05-05T16:00:00.000Z\)$/,
  responseTime: 1000,
  responseText: ProductionTracker_error
});
