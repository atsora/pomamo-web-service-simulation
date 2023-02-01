// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var MachineModeColorLegend1 = {
  'Items': [
    {
      'Color':'#FFFF00',
      'Display':'mode 1',
      'MachineModes': [
        {
          'Color':'#FFFF00',
          'Display':'1st MM'
        }, {
          'Color':'#FFFF00',
          'Display':'second MM'
        }, {
          'Color':'#FFFF00',
          'Display':'Third MM'
        }, {
          'Color':'#FFFF00',
          'Display':'Fourth MM'
        }]
    }, {
      'Color':'#FF00FF',
      'Display':'mode 2',
      'MachineModes': [
        {
          'Color':'#FF00FF',
          'Display':'super long machine mode descrption with many un needed informations'
        }, {
          'Color':'#FF00FF',
          'Display':'some more text to make it longer'
        }, {
          'Color':'#FF00FF',
          'Display':'more text'
        }, {
          'Color':'#FF00FF',
          'Display':'end text to try'
        }]
    }, {
      'Color':'#800080',
      'Display':'mode 3',
      'MachineModes': []
    }]
};

$.mockjax({
  url : 'http://localhost:8082/MachineModeColorLegend/Get',
  responseTime : 1000,
  responseText : MachineModeColorLegend1
});
