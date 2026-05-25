// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');
require('./scenario');

MOCK.respond('ChangePassword', function (call) {
  if (!call.params.Login) {
    return { __status: 400, body: MOCK.errorBody('Login required') };
  }
  if (call.params.Login === String(SCENARIO.ERROR_ID) || call.params.Login === 'fail') {
    return { ErrorMessage: 'Save failed', Status: 'UnexpectedError' };
  }
  return { Message: 'Ok' };
}, { delay: 600, method: 'post' });
