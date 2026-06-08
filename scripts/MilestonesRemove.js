// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

MOCK.respond('MilestonesRemove', function (call) {
  if (!call.params.Id) {
    return { __status: 400, body: MOCK.errorBody('Id required') };
  }
  return { Message: 'Ok' };
}, { delay: 400 });
