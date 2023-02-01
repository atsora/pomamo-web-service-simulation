// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Error
var GetUserPermissions_JSON_No_Login = {
  'ErrorMessage': 'Please, enter login',
  'Status': 'WrongRequestParameter'
};
var GetUserPermissions_JSON_Login_unknown = {
  'ErrorMessage': 'Login or password not allowed',
  'Status': 'WrongRequestParameter'
};
/*
jsonData = 
{
  'Login'; 'Bruce'
  'Password': 'pass'
 }
*/
// OK
var GetUserPermissions_JSON_Manager = {
  'Login': 'Bruce',
  'UserName': 'BRUCE',
  'Role': 'manager',
  'MachineIds': [1, 2, 3, 4],
  'AllMachines': true
};

var GetUserPermissions_JSON_Operator = {
  'Login': 'Jeff',
  'UserName': 'Jeff Pyke',
  'Role': 'operator',
  'MachineIds': [1, 2]
};


// REQUESTS 

// ERRORS
$.mockjax({
  url: 'http://localhost:8082/UserPermissions/Post', // or User/Permissions
  type: 'post',
  responseTime: 800,
  contentType: 'text/json',
  dataType: 'json',
  responseText: GetUserPermissions_JSON_No_Login
});

$.mockjax({
  url: 'http://localhost:8082/UserPermissions/Post?Login=LeGrandMechantLoup',
  type: 'post',
  responseTime: 800,
  responseText: GetUserPermissions_JSON_Login_unknown
});

$.mockjax({
  url: 'http://localhost:8082/UserPermissions/Post?Login=Maman',
  type: 'post',
  responseTime: 800,
  responseText: GetUserPermissions_JSON_Login_unknown
});

$.mockjax({
  url: 'http://localhost:8082/UserPermissions/Post?Login=504',
  type: 'post',
  status: 504,
  responseTime: 800
});

// OK
$.mockjax({
  url: 'http://localhost:8082/UserPermissions/Post?Login=Bruce',
  type: 'post',
  responseTime: 800,
  responseText: GetUserPermissions_JSON_Manager
});

$.mockjax({
  url: 'http://localhost:8082/UserPermissions/Post?Login=Jeff',
  type: 'post',
  responseTime: 800,
  responseText: GetUserPermissions_JSON_Operator

});
