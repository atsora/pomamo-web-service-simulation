// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `UserPermissions/Post?Login=<login>` (POST body carries password).
// Recognizes a few canonical logins:
//   - "manager" / "operator" — happy path
//   - "999" — reserved error id (HTTP 400)
//   - anything else — "Login not allowed"

require('./_helpers');
require('./scenario');

(function () {
  var MANAGER = {
    Login: 'manager',
    UserName: 'Manager User',
    Role: 'manager',
    MachineIds: SCENARIO.MACHINES.map(function (m) { return m.id; }),
    AllMachines: true
  };
  var OPERATOR = {
    Login: 'operator',
    UserName: 'Operator User',
    Role: 'operator',
    MachineIds: [1, 2]
  };

  // x-loginconnection fetches this once on boot to decide which sign-in
  // methods to display. Demo: login/password enabled, no OAuth2 providers.
  MOCK.respond('User/AuthenticationMethods', function () {
    return {
      UserPasswordAuthentication: true,
      OAuth2Methods: []
    };
  }, { delay: 150 });

  MOCK.respond('UserPermissions/Post', function (call) {
    var login = call.params.Login || '';
    if (!login) {
      return { __status: 400, body: MOCK.errorBody('Please, enter login') };
    }
    if (login === String(SCENARIO.ERROR_ID)) {
      return { __status: 504, body: '' };
    }
    if (login === 'manager') return MANAGER;
    if (login === 'operator') return OPERATOR;
    return { __status: 400, body: MOCK.errorBody('Login or password not allowed') };
  }, { delay: 600, method: 'post' });
})();
