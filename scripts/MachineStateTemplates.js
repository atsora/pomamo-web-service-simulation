// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var MachineStateTemplatesJSON1 = {
  'MachineStateTemplates' : [{
    'Id' : 1,
    'Display' : 'MachineStateTemplate1'
  }, {
    'Id' : 2,
    'Display' : 'MachineStateTemplate2'
  }, {
    'Id' : 3,
    'Display' : 'MachineStateTemplate_3'
  }
  ]};

$.mockjax({
  url : 'http://localhost:8082/MachineStateTemplates?RoleId=1',
  responseTime : 1000,
  responseText : MachineStateTemplatesJSON1
});
