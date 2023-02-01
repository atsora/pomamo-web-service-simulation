// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var ReasonGroupLegend1 = {
  'Items': [{
    'Color':'#FFFF00',
    'Display':'Idle',
    'ReasonGroups': [{
      'Id':1,
      'Display':'Idle1',
      'Color':'#FFFF00',
      'Reasons': []
    }, {
      'Id':2,
      'Display':'Idle2',
      'Color':'#FFFF00',
      'Reasons': []
    }] 
  }, {
    'Color':'#008000',
    'Display':'Running',
    'ReasonGroups': [{
      'Id':3,
      'Display':'Run_1',
      'Color':'#008000',
      'Reasons':[]
    }, {
      'Id':4,
      'Display':'Run_2',
      'Color':'#008000',
      'Reasons':[]
    }]
  }]
};

$.mockjax({
  url : 'http://localhost:8082/ReasonGroupLegend',
  responseTime : 2000,
  responseText : ReasonGroupLegend1
});
