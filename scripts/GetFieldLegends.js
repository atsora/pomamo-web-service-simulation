// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var GetFieldLegends100 = '[{"Label":"< 1000","Color":"#0080FF"},{"Label":"1000 - 4000","Color":"#FFFF00"},{"Label":"4000 - 6000","Color":"#FF00FF"},{"Label":"> 6000","Color":"#800080"}]';
var GetFieldLegends101 = '[{"Label":"Spindle speed < 1000","Color":"#3BB9FF"},{"Label":"1000-3000","Color":"#82CAFA"},{"Label":"> 3000","Color":"#2B60DE"}]';

$.mockjax({
  url : 'http://localhost:8082/GetFieldLegends?FieldId=100',
  responseTime : 1000,
  responseText : GetFieldLegends100
});

$.mockjax({
  url : 'http://localhost:8082/GetFieldLegends?FieldId=101',
  responseTime : 1000,
  responseText : GetFieldLegends101
});
