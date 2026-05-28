// Copyright (C) 2009-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `ReasonSelection/Post?MachineId=<id>` — POST body returns the
// list of available reasons for stop classification.
// 4 hand-crafted scenarios per machine, designed to exercise the
// x-stopclassification grouping threshold (default 11):
//   Machine 1 → 8 reasons   (≤ 11 → all flat)
//   Machine 2 → 11 reasons  (= 11 → exact limit, still flat)
//   Machine 3 → 12 reasons  (> 11 → all grouped by category)
//   Machine 4 → mix with AlwaysSecondLevel=true (collapses inside a group)

require('./_helpers');

(function () {
  // 3 reason categories
  var PLANNED   = { id: 100, display: 'Planned',   color: '#5C6BC0' };
  var UNPLANNED = { id: 200, display: 'Unplanned', color: '#D32F2F' };
  var QUALITY   = { id: 300, display: 'Quality',   color: '#FB8C00' };

  function r (id, display, group, alwaysSecondLevel) {
    return {
      Id: id,
      ClassificationId: String(id),
      Display: display,
      Color: group.color,
      ReasonScore: 50,
      DetailsRequired: false,
      AlwaysSecondLevel: !!alwaysSecondLevel,
      ReasonGroupDisplay: group.display,
      ReasonGroupId: group.id
    };
  }

  // Machine 1 — 8 flat reasons (3 planned + 3 unplanned + 2 quality)
  var REASONS_M1 = [
    r(101, 'Setup',            PLANNED),
    r(102, 'Maintenance',      PLANNED),
    r(103, 'Shift change',     PLANNED),
    r(201, 'Tool broken',      UNPLANNED),
    r(202, 'Material out',     UNPLANNED),
    r(203, 'Machine alarm',    UNPLANNED),
    r(301, 'Bad measurement',  QUALITY),
    r(302, 'Operator decision', QUALITY)
  ];

  // Machine 2 — 11 flat reasons (exact limit, still flat layout)
  var REASONS_M2 = [
    r(101, 'Setup',            PLANNED),
    r(102, 'Maintenance',      PLANNED),
    r(103, 'Shift change',     PLANNED),
    r(104, 'Operator break',   PLANNED),
    r(201, 'Tool broken',      UNPLANNED),
    r(202, 'Material out',     UNPLANNED),
    r(203, 'Machine alarm',    UNPLANNED),
    r(204, 'Power loss',       UNPLANNED),
    r(301, 'Bad measurement',  QUALITY),
    r(302, 'Operator decision', QUALITY),
    r(303, 'Calibration',      QUALITY)
  ];

  // Machine 3 — 12 flat reasons (one over the limit → all collapse to grouped layout)
  var REASONS_M3 = [
    r(101, 'Setup',            PLANNED),
    r(102, 'Maintenance',      PLANNED),
    r(103, 'Shift change',     PLANNED),
    r(104, 'Operator break',   PLANNED),
    r(105, 'Lunch break',      PLANNED),
    r(201, 'Tool broken',      UNPLANNED),
    r(202, 'Material out',     UNPLANNED),
    r(203, 'Machine alarm',    UNPLANNED),
    r(204, 'Power loss',       UNPLANNED),
    r(301, 'Bad measurement',  QUALITY),
    r(302, 'Operator decision', QUALITY),
    r(303, 'Calibration',      QUALITY)
  ];

  // Machine 4 — 8 reasons but Quality is AlwaysSecondLevel
  // → visual units = 2 (Planned/Unplanned flat) + 1 (Quality group) = ... well,
  //   non-Always: Planned3 + Unplanned3 = 6 flat; Quality group counts as 1.
  //   total = 7 ≤ 11, flat with Quality as a clickable group.
  var REASONS_M4 = [
    r(101, 'Setup',            PLANNED),
    r(102, 'Maintenance',      PLANNED),
    r(103, 'Shift change',     PLANNED),
    r(201, 'Tool broken',      UNPLANNED),
    r(202, 'Material out',     UNPLANNED),
    r(203, 'Machine alarm',    UNPLANNED),
    r(301, 'Bad measurement',  QUALITY, true),
    r(302, 'Operator decision', QUALITY, true)
  ];

  var BY_ID = { 1: REASONS_M1, 2: REASONS_M2, 3: REASONS_M3, 4: REASONS_M4 };

  MOCK.respond('ReasonSelection/Post', function (call) {
    if (!call.params.MachineId) {
      return { __status: 400, body: MOCK.errorBody('MachineId required') };
    }
    var n = Number(call.params.MachineId);
    return BY_ID[n] || REASONS_M1;
  }, { delay: 400, method: 'post' });
})();
