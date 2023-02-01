// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var NextMachineStateTemplateJSON_setup = { 'MachineStateTemplates': [{ 'Id': 7, 'Display': 'Set-up', 'Text': 'Set-up', 'FgColor': '#000000', 'BgColor': '#e8daef' }] };

// Failed ?

$.mockjax({
  url: 'http://localhost:8082/NextMachineStateTemplate*',
  responseTime: 1000,
  responseText: NextMachineStateTemplateJSON_setup
});