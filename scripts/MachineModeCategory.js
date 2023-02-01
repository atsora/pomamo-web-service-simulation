// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var MachineModeCategory1 = {
  'Items': [
    { 
      'Id': 1,
      'Display':'Inactive'
    },{ 
      'Id': 2,
      'Display':'Active'
    },{ 
      'Id': 3,
      'Display':'Error'
    },{ 
      'Id': 4,
      'Display':'UNKNOWN'
    },{ 
      'Id': 5,
      'Display':'ECO'
    },{ 
      'Id': 99,
      'Display':'???'
    }]
};

$.mockjax({
  url : 'http://localhost:8082/MachineModeCategoryLegend',
  responseTime : 1000,
  responseText : MachineModeCategory1
});
