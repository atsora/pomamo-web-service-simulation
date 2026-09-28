// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Signal/?GroupId=<id>[&RoleKey=<role>]` — broadcast messages of a group.
// GroupId may be a composite key ("1_23_53") or "ALL". RoleKey is ignored.
// FgColor left empty = computed by the component (best contrast).

require('./_helpers');

var SignalMultiJSON = {
  Messages: [
    { Message: 'Maintenance scheduled at 14:00',       BgColor: '#f97316', FgColor: '#ffffff' },
    { Message: 'High temperature warning on spindle',  BgColor: '#ef4444', FgColor: '#ffffff' },
    { Message: 'Production target reached at 95%',     BgColor: '#6f42c1', FgColor: '#ffffff' },
    { Message: 'Operator note: verify coolant level',  BgColor: '#3b82f6', FgColor: '#ffffff' }
  ]
};

var SignalSingleJSON = {
  Messages: [
    { Message: 'All systems nominal', BgColor: '#22c55e', FgColor: '#ffffff' }
  ]
};

var SignalEmptyJSON = { Messages: [] };

var SignalContrastJSON = {
  Messages: [
    { Message: 'Yellow background, no fg — auto-computed to black', BgColor: '#ffff00', FgColor: '' },
    { Message: 'Navy background, no fg — auto-computed to white',   BgColor: '#000080', FgColor: '' }
  ]
};

var SignalAllJSON = {
  Messages: [
    { Message: 'ALL: shop-wide notice (every group)', BgColor: '#0369A1', FgColor: '#ffffff' }
  ]
};

MOCK.respond('Signal', {
  byGroupId: {
    '1_23_53': SignalMultiJSON,
    42:        SignalSingleJSON,
    99:        SignalEmptyJSON,
    contrast:  SignalContrastJSON,
    ALL:       SignalAllJSON
  },
  default: SignalEmptyJSON
}, { delay: 200, emptyBuilder: function () { return { Messages: [] }; } });
