// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

MOCK.respond('NextMachineStateTemplate', function () {
  return {
    MachineStateTemplates: [
      { Id: 7,  Display: 'Production',       Text: 'Production',       FgColor: '#000000', BgColor: '#E8DAEF' },
      { Id: 8,  Display: 'Setup',            Text: 'Setup',            FgColor: '#000000', BgColor: '#E8DAEF' },
      { Id: 9,  Display: 'Maintenance',      Text: 'Maintenance',      FgColor: '#000000', BgColor: '#E8DAEF' },
      { Id: 10, Display: 'Off',              Text: 'Off',              FgColor: '#000000', BgColor: '#E8DAEF' }
    ]
  };
}, { delay: 400 });
