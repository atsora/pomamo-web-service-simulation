// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `ReasonOnlySlots?MachineId=<id>&Range=<range>` — reason slots
// with the embedded MachineModes structure consumed by x-reasonslotbar.

require('./_helpers');

// A single slot block keyed by reason; used as a building block in the JSON
// arrays below to keep them readable.
function slot (range, p) {
  return {
    Range: range,
    Id: p.Id, Display: p.Display, Running: p.Running,
    OverwriteRequired: p.OverwriteRequired, DefaultReason: p.DefaultReason,
    BgColor: p.BgColor, FgColor: p.FgColor,
    MachineModes: [{
      Category: { Id: p.Running ? 2 : 1 },
      Id: p.Id, Display: p.Display, Range: range,
      BgColor: p.BgColor, FgColor: p.FgColor
    }],
    Description: ''
  };
}

var MOTION       = { Id: 2, Display: 'Motion',         Running: true,  OverwriteRequired: false, DefaultReason: true,  BgColor: '#2E7D32', FgColor: '#FFFFFF' };
var SHORT_IDLE   = { Id: 1, Display: 'Short idle',     Running: false, OverwriteRequired: false, DefaultReason: true,  BgColor: '#FFC107', FgColor: '#000000' };
var OPERATOR     = { Id: 3, Display: 'Operator break', Running: false, OverwriteRequired: false, DefaultReason: false, BgColor: '#FB8C00', FgColor: '#000000' };
var AWAITING     = { Id: 4, Display: 'Awaiting part',  Running: false, OverwriteRequired: true,  DefaultReason: false, BgColor: '#D32F2F', FgColor: '#FFFFFF' };

var ReasonOnlySlotsJSON1 = {
  ReasonOnlySlots: [
    slot('{{now-8h..now-6h40m}}',   MOTION),
    slot('{{now-6h40m..now-5h20m}}', SHORT_IDLE),
    slot('{{now-5h20m..now-4h}}',   MOTION),
    slot('{{now-4h..now-2h40m}}',   AWAITING),
    slot('{{now-2h40m..now-1h20m}}', MOTION),
    slot('{{now-1h20m..now}}',      OPERATOR)
  ]
};

var ReasonOnlySlotsJSON2 = {
  ReasonOnlySlots: [
    slot('{{now-8h..now-4h}}', MOTION),
    slot('{{now-4h..now-3h}}', SHORT_IDLE),
    slot('{{now-3h..now-1h}}', MOTION),
    slot('{{now-1h..now}}',    OPERATOR)
  ]
};

var ReasonOnlySlotsJSON3 = {
  ReasonOnlySlots: [
    slot('{{now-8h..now-1h}}', MOTION),
    slot('{{now-1h..now}}',    AWAITING)
  ]
};

MOCK.respond('ReasonOnlySlots', {
  byMachineId: {
    1: ReasonOnlySlotsJSON1,
    2: ReasonOnlySlotsJSON2,
    3: ReasonOnlySlotsJSON3
  },
  default: ReasonOnlySlotsJSON1
}, { delay: 400 });
