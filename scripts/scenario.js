// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Shared scenario constants — exposed as the global `SCENARIO` so any mock
// (or any demo) can read them without importing the helpers module.
//
//   SCENARIO.MACHINES       — canonical machine list used across mocks
//   SCENARIO.MAIN_GROUP     — group id covering all monitored machines
//   SCENARIO.MILL_GROUP     — milling cell (machines 1 + 2)
//   SCENARIO.LATHE_GROUP    — lathe cell (machine 3)
//   SCENARIO.ERROR_ID       — reserved id that mocks turn into HTTP 400
//   SCENARIO.SLOW_ID        — reserved id that mocks delay by 5 s
//   SCENARIO.EMPTY_ID       — reserved id that mocks turn into an empty payload
//
// No functions live here on purpose: the file is data, not behaviour.

(function (global) {
  if (global.SCENARIO) return; // idempotent — multiple requires share one instance

  global.SCENARIO = Object.freeze({
    MACHINES: Object.freeze([
      Object.freeze({ id: 1, name: 'Machine 1',   monitored: true,  category: 'milling' }),
      Object.freeze({ id: 2, name: 'Machine 2',   monitored: true,  category: 'milling' }),
      Object.freeze({ id: 3, name: 'Machine 3',  monitored: true,  category: 'turning' }),
      Object.freeze({ id: 4, name: 'Machine 4', monitored: false, category: 'manual'  })
    ]),
    MAIN_GROUP:  100,
    MILL_GROUP:  101,
    LATHE_GROUP: 102,
    ERROR_ID:    999,
    SLOW_ID:     998,
    EMPTY_ID:    997
  });
})(typeof window !== 'undefined' ? window : this);
