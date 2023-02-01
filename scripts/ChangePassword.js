// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var changePasswordJSON = {
  'Message': 'Ok'
};
var changePasswordFailedResponse = {
  'ErrorMessage': 'Save failed',
  'Status': 'UnexpectedError'
};
 
/*
jsonData = 
{
  // Login can be here too
  'Password': 'old',
  'NewPassword': 'new'
 }
*/

$.mockjax({
  url: 'http://localhost:8082/ChangePassword?Login=Bruce',
  type: 'POST',
  contentType: 'text/json',
  dataType: 'json',
  responseTime: 800,
  responseText: changePasswordJSON
});

$.mockjax({
  url: 'http://localhost:8082/ChangePassword?Login=Paul',
  type: 'POST',
  contentType: 'text/json',
  dataType: 'json',
  responseTime: 800,
  responseText: changePasswordFailedResponse,
  status: 200
});
