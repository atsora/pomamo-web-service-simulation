// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

(function () {
  // Per-revision countdowns so the component can poll "is it done yet?".
  var counters = {};
  MOCK.respond('GetPendingModificationsFromRevision', function (call) {
    var rev = String(call.params.Id || '');
    if (!rev) return { __status: 400, body: MOCK.errorBody('Id required') };
    if (counters[rev] === undefined) counters[rev] = 3;
    if (counters[rev] > 0) counters[rev]--;
    return counters[rev];
  }, { delay: 400 });
})();
