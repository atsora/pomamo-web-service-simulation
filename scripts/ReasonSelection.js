// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

(function () {
  var GROUPS = [
    { id: 100, display: 'Planned', color: '#5C6BC0', reasons: [
      { id: 101, display: 'Setup',          color: '#5C6BC0' },
      { id: 102, display: 'Maintenance',    color: '#5C6BC0' },
      { id: 103, display: 'Shift change',   color: '#5C6BC0' }
    ]},
    { id: 200, display: 'Unplanned', color: '#D32F2F', reasons: [
      { id: 201, display: 'Tool broken',    color: '#D32F2F' },
      { id: 202, display: 'Material out',   color: '#D32F2F' },
      { id: 203, display: 'Machine alarm',  color: '#D32F2F' }
    ]},
    { id: 300, display: 'Quality', color: '#FB8C00', reasons: [
      { id: 301, display: 'Bad measurement', color: '#FB8C00' },
      { id: 302, display: 'Operator decision', color: '#FB8C00' }
    ]}
  ];

  MOCK.respond('ReasonSelection/Post', function (call) {
    if (!call.params.MachineId) {
      return { __status: 400, body: MOCK.errorBody('MachineId required') };
    }
    var out = [];
    GROUPS.forEach(function (g) {
      g.reasons.forEach(function (r) {
        out.push({
          Id: r.id,
          ClassificationId: String(r.id),
          Display: r.display,
          Color: r.color,
          ReasonScore: 50,
          DetailsRequired: false,
          AlwaysSecondLevel: false,
          ReasonGroupDisplay: g.display,
          ReasonGroupId: g.id
        });
      });
    });
    return out;
  }, { delay: 400, method: 'post' });
})();
