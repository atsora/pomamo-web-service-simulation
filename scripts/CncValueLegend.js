// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var CncValueLegend1 = {
  'Items': [
    { 
      'Field': {
        'Display':'CNC Field 1'
      },
      'Legends': [
        {
          'Color':'#FFFF00',
          'Display':'< 1000'
        }, {
          'Color':'#FFFF00',
          'Display':'1000 - 4000'
        }, {
          'Color':'#FF00FF',
          'Display':'4000 - 6000'
        }, {
          'Color':'#800080',
          'Display':'> 6000'
        }]
    }]
};

var CncValueLegend2 = {
  'Items': [
    { 
      'Field': {
        'Display':'CNC Field 1' 
      },
      'Legends': [
        {
          'Color':'#FFFF00',
          'Display':'< 1000'
        }, {
          'Color':'#FFFF00',
          'Display':'1000 - 4000'
        }, {
          'Color':'#FF00FF',
          'Display':'4000 - 6000'
        }, {
          'Color':'#800080',
          'Display':'> 6000'
        }]
    },
    { 
      'Field': {
        'Display':'Spindle speed'
      },
      'Legends': [
        {
          'Color':'#3BB9FF',
          'Display':'< 1000'
        }, {
          'Color':'#82CAFA',
          'Display':'1000 - 3000'
        }, {
          'Color':'#2B60DE',
          'Display':'> 3000'
        }]
    }]
};

$.mockjax({
  url : 'http://localhost:8082/CncValueLegend/Get?MachineIds=3',
  responseTime : 1000,
  responseText : CncValueLegend1
});

$.mockjax({
  url : 'http://localhost:8082/CncValueLegend/Get?MachineIds=1,2',
  responseTime : 1000,
  responseText : CncValueLegend2
});
/*
$.mockjax({
  url : /^http:\/\/localhost:8082\/CncValueLegend\/Get\?MachineIds=3.*\)$/,
  responseTime : 10,
  responseText : CncValueLegend1
});

$.mockjax({
  url:/^http:\/\/localhost:8082\/CncValueLegend\/Get\?MachineIds=1,2.*\)$/,
  responseTime : 10,
  responseText : CncValueLegend2
});
*/
