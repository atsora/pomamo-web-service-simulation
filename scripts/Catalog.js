// Copyright (C) 2025 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

var Test1 = { 'Value': 'Test 1 from db' };
var Test2 = { 'Value': 'Test 2 from db' };
var Test3 = { 'Value': 'Default value' };

$.mockjax({
  url : /^http:\/\/localhost:8082\/I18N\/Catalog\?Key=Test1.*$/,
  responseTime: 500,
  responseText: Test1
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/I18N\/Catalog\?Key=Test2.*$/,
  responseTime: 1000,
  responseText: Test2
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/I18N\/Catalog\?Key=Unknown.*$/,
  responseTime: 1000,
  responseText: Test3
});
