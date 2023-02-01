// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var reasonOnlySlotsResponse3 = {
  'ReasonOnlySlots': [{
    'Description': 'A description of this reason',
    'OverwriteRequired': false,
    'Running': false,
    'DefaultReason': true,
    'MachineModes': [{
      'Category': {
        Id: 1
      },
      'Id': 67,
      'Display': 'No motion in Auto mode',
      'Range': '[2017-01-16T11:35:43Z,2017-01-16T11:37:15Z)',
      'FgColor': '#000000',
      'BgColor': '#FFFF00'
    }],
    'Id': 3,
    'Display': 'Short idle time',
    'Range': '[2017-01-16T11:35:43Z,2017-01-16T11:37:15Z)',
    'FgColor': '#000000',
    'BgColor': '#FFA500'
  }],
  'Range': '[2017-01-16T11:36:25Z,2017-01-16T11:36:25Z]',
  'RangeNumber': 1
};
// For x-reasonslotlist
/* we should add :
'Range':'[2017-01-16T00:00:00.000Z,2017-01-16T12:00:00.000Z)',
'Blocks':[{'Range':'[2017-01-16T00:00:00.000Z,2017-01-16T00:40:00.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':true,'Duration':1200}] },

  {'Range':'[2017-01-16T04:00:00.000Z,2017-01-16T04:40:00.000Z)','Color':'#008000','Details':[{'Color':'#008000','OverwriteRequired':false,'Duration':1200}] }, // =Motion

  {'Range':'[2017-01-16T08:00:00.000Z,2017-01-16T08:40:00.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':true,'Duration':1200}] },

  {'Range':'[2017-01-16T09:00:00.000Z,2017-01-16T09:40:00.000Z)','Color':'#008000','Details':[{'Color':'#008000','OverwriteRequired':false,'Duration':1200}] },// =Motion
  
  {'Range':'[2017-01-16T10:00:00.000Z,2017-01-16T11:20:00.000Z)','Color':'#FFFF00','Details':[{'Color':'#FFFF00','OverwriteRequired':false,'Duration':1200}] }]
*/
var reasonOnlySlotsResponse18 = {
  'ReasonOnlySlots': [
    {
      'Description': 'A description of this reason 1 - OR',
      'OverwriteRequired': true,
      'Running': false,
      'DefaultReason': true,
      'MachineModes': [{
        'Category': {
          Id: 1
        },
        'Id': 67,
        'Display': 'Mode1',
        'Range': '[2017-01-16T00:00:00.000Z,2017-01-16T00:40:00.000Z)',
        'FgColor': '#000000',
        'BgColor': '#FFFF00'
      }],
      'Id': 3,
      'Display': 'Reason1 - O.R.',
      'Range': '[2017-01-16T00:00:00.000Z,2017-01-16T00:40:00.000Z)',
      'FgColor': '#000000',
      'BgColor': '#FFFF00'
    },
    {
      'Description': 'A description of this reason - motion',
      'OverwriteRequired': false,
      'Running': true,
      'DefaultReason': true,
      'MachineModes': [{
        'Category': {
          Id: 2
        },
        'Id': 67,
        'Display': 'Motion mode',
        'Range': '[2017-01-16T04:00:00.000Z,2017-01-16T04:40:00.000Z)',
        'FgColor': '#000000',
        'BgColor': '#008000'
      }],
      'Id': 3,
      'Display': 'Motion Reason',
      'Range': '[2017-01-16T04:00:00.000Z,2017-01-16T04:40:00.000Z)',
      'FgColor': '#000000',
      'BgColor': '#008000'
    },
    {
      'Description': 'A description of this reason 2 - OR',
      'OverwriteRequired': true,
      'Running': false,
      'DefaultReason': true,
      'MachineModes': [{
        'Category': {
          Id: 1
        },
        'Id': 67,
        'Display': 'No motion in Auto mode',
        'Range': '[2017-01-16T08:00:00.000Z,2017-01-16T08:40:00.000Z)',
        'FgColor': '#000000',
        'BgColor': '#FFFF00'
      }],
      'Id': 3,
      'Display': 'Reason 2 - O.R.',
      'Range': '[2017-01-16T08:00:00.000Z,2017-01-16T08:40:00.000Z)',
      'FgColor': '#000000',
      'BgColor': '#FFFF00'
    },
    {
      'Description': 'A description of this reason - Motion',
      'OverwriteRequired': false,
      'Running': true,
      'DefaultReason': true,
      'MachineModes': [{
        'Category': {
          Id: 2
        },
        'Id': 67,
        'Display': 'Motion Mode',
        'Range': '[2017-01-16T09:00:00.000Z,2017-01-16T09:40:00.000Z)',
        'FgColor': '#000000',
        'BgColor': '#008000'
      }],
      'Id': 3,
      'Display': 'Motion reason',
      'Range': '[2017-01-16T09:00:00.000Z,2017-01-16T09:40:00.000Z)',
      'FgColor': '#000000',
      'BgColor': '#008000'
    },
    {
      'Description': 'A description of this reason 3',
      'OverwriteRequired': false,
      'Running': false,
      'DefaultReason': true,
      'MachineModes': [{
        'Category': {
          Id: 1
        },
        'Id': 67,
        'Display': 'No motion in Auto mode',
        'Range': '[2017-01-16T10:00:00.000Z,2017-01-16T11:20:00.000Z)',
        'FgColor': '#000000',
        'BgColor': '#FFFF00'
      }],
      'Id': 3,
      'Display': 'Reason 3',
      'Range': '[2017-01-16T10:00:00.000Z,2017-01-16T11:20:00.000Z)',
      'FgColor': '#000000',
      'BgColor': '#FFFF00'
    },
    {
      'Description': 'A description of this reason -short',
      'OverwriteRequired': false,
      'Running': false,
      'DefaultReason': true,
      'MachineModes': [{
        'Category': {
          Id: 1
        },
        'Id': 67,
        'Display': 'No motion in Auto mode',
        'Range': '[2017-01-16T11:35:43Z,2017-01-16T11:47:15Z)',
        'FgColor': '#000000',
        'BgColor': '#FFFF00'
      }],
      'Id': 3,
      'Display': 'Short idle time',
      'Range': '[2017-01-16T11:35:43Z,2017-01-16T11:47:15Z)',
      'FgColor': '#000000',
      'BgColor': '#FFA500'
    }
  ],
  'Range': '[2017-01-16T00:00:00.000Z,2017-01-16T12:00:00.000Z]',
  'RangeNumber': 1
};
var reasonOnlySlotsResponse19 = {
  'ReasonOnlySlots': [{
    'Description': 'A description of this reason',
    'OverwriteRequired': false,
    'Running': false,
    'DefaultReason': true,
    'MachineModes': [{
      'Category': {
        Id: 1
      },
      'Id': 67,
      'Display': 'No motion in Auto mode',
      'Range': '[2017-01-16T11:35:43Z,2017-01-16T11:37:15Z)',
      'FgColor': '#000000',
      'BgColor': '#FFFF00'
    }],
    'Id': 3,
    'Display': 'Short idle time',
    'Range': '[2017-01-16T11:35:43Z,2017-01-16T11:37:15Z)',
    'FgColor': '#000000',
    'BgColor': '#FFA500'
  }],
  'Range': '[2017-01-16T11:36:25Z,2017-01-16T11:36:25Z]',
  'RangeNumber': 1
};
var reasonOnlySlotsResponse22 = {
  'ReasonOnlySlots': [{
    'Description': 'A description of this reason',
    'OverwriteRequired': false,
    'Running': false,
    'DefaultReason': true,
    'MachineModes': [{
      'Category': {
        Id: 1
      },
      'Id': 67,
      'Display': 'No motion in Auto mode',
      'Range': '[2017-01-16T11:35:43Z,2017-01-16T11:37:15Z)',
      'FgColor': '#000000',
      'BgColor': '#FFFF00'
    }],
    'Id': 3,
    'Display': 'Short idle time',
    'Range': '[2017-01-16T11:35:43Z,2017-01-16T11:37:15Z)',
    'FgColor': '#000000',
    'BgColor': '#FFA500'
  }],
  'Range': '[2017-01-16T11:36:25Z,2017-01-16T11:36:25Z]',
  'RangeNumber': 1
};


//detailedreasonat machine-id=3 when='2017-01-16T11:36:00Z
//mode.Category.Id
$.mockjax({
  url: 'http://localhost:8082/ReasonOnlySlots?MachineId=3*',
  responseTime: 500,
  responseText: reasonOnlySlotsResponse3
});
// /^http:\/\/localhost:8082\/ReasonOnlySlots\?MachineId=3\&.*/,
/* For x-reasonslotlist + save reason */
$.mockjax({
  url: /^http:\/\/localhost:8082\/ReasonOnlySlots\?MachineId=18&.*$/,
  responseTime: 500,
  responseText: reasonOnlySlotsResponse18
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/ReasonOnlySlots\?MachineId=19.*$/,
  responseTime: 1000,
  responseText: reasonOnlySlotsResponse19
});

// Save Reason
$.mockjax({
  url: /^http:\/\/localhost:8082\/ReasonOnlySlots\?MachineId=22.*$/,
  responseTime: 1000,
  responseText: reasonOnlySlotsResponse22
});
