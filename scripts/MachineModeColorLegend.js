// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

MOCK.respond('MachineModeColorLegend/Get', function () {
  return {
    Items: [
      { Color: '#2E7D32', Display: 'Running', MachineModes: [{ Id: 2, Display: 'Active' }] },
      { Color: '#FFC107', Display: 'Idle',    MachineModes: [{ Id: 1, Display: 'Inactive' }] },
      { Color: '#D32F2F', Display: 'Error',   MachineModes: [{ Id: 3, Display: 'Error' }] },
      { Color: '#7B1FA2', Display: 'Setup',   MachineModes: [{ Id: 4, Display: 'Setup' }] }
    ]
  };
}, { delay: 200 });
