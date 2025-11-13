// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var NextMachineStateTemplateJSON_setup = { 'MachineStateTemplates': [{ 'Id': 7, 'Display': 'Config initiale Prod', 'Text': 'Config initiale Prod', 'FgColor': '#000000', 'BgColor': '#e8daef' }, { 'Id': 8, 'Display': 'Formation', 'Text': 'Formation', 'FgColor': '#000000', 'BgColor': '#e8daef' }, { 'Id': 9, 'Display': 'Pas au planning', 'Text': 'Pas au planning', 'FgColor': '#000000', 'BgColor': '#e8daef' }, { 'Id': 10, 'Display': 'Maintenance préventive', 'Text': 'Maintenance préventive', 'FgColor': '#000000', 'BgColor': '#e8daef' }, { 'Id': 11, 'Display': 'Changement de série', 'Text': 'Changement de série', 'FgColor': '#000000', 'BgColor': '#e8daef' }, { 'Id': 12, 'Display': 'Intervention méthodes', 'Text': 'Intervention méthodes', 'FgColor': '#000000', 'BgColor': '#e8daef' }, { 'Id': 13, 'Display': 'Réunion', 'Text': 'Réunion', 'FgColor': '#000000', 'BgColor': '#e8daef' }, { 'Id': 14, 'Display': 'Opérateur absent', 'Text': 'Opérateur absent', 'FgColor': '#000000', 'BgColor': '#e8daef' }, { 'Id': 15, 'Display': 'Manque matière', 'Text': 'Manque matière', 'FgColor': '#000000', 'BgColor': '#e8daef' }] };

// Failed ?

$.mockjax({
  url: 'http://localhost:8082/NextMachineStateTemplate*',
  responseTime: 1000,
  responseText: NextMachineStateTemplateJSON_setup
});