// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

MOCK.respond('WorkNew/Post', function (call) {
  if (!call.params.Kind) {
    return { __status: 400, body: MOCK.errorBody('Missing work kind') };
  }
  return { Id: Math.floor(Math.random() * 10000), Message: 'Ok' };
}, { delay: 500, method: 'post' });
