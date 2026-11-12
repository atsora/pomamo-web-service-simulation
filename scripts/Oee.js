// Copyright (C) 2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `Oee/?GroupId|MachineId=<id>&OeeType=<OEE|OOE|TEEP>&Range=<range>|DayRange=<range>`
// (web service of the plugin Lemoine.Plugin.Oee).
// TEEP <= OOE <= OEE. Machine 4 (non-monitored) has no data (Rate null).

require('./_helpers');

var RATES = {
  1: { OEE: 0.82, OOE: 0.71, TEEP: 0.55 },
  2: { OEE: 0.64, OOE: 0.52, TEEP: 0.38 },
  3: { OEE: 0.91, OOE: 0.83, TEEP: 0.66 },
  4: null,
  100: { OEE: 0.79, OOE: 0.69, TEEP: 0.53 },
  101: { OEE: 0.73, OOE: 0.62, TEEP: 0.47 },
  102: { OEE: 0.91, OOE: 0.83, TEEP: 0.66 }
};

MOCK.respond('Oee', function (call) {
  var id = call.params.MachineId || call.params.GroupId;
  var oeeType = String(call.params.OeeType || 'OEE').toUpperCase();
  if (oeeType === 'TRS') oeeType = 'OEE';
  if (oeeType === 'TRG') oeeType = 'OOE';
  if (oeeType === 'TRE') oeeType = 'TEEP';
  if (['OEE', 'OOE', 'TEEP'].indexOf(oeeType) < 0) {
    return { __status: 400, body: MOCK.errorBody('Invalid OeeType ' + call.params.OeeType) };
  }
  var rates = RATES[id];
  var rate = rates ? rates[oeeType] : null;
  var duration = rate == null ? 0 : 8 * 3600;
  return {
    OeeType: oeeType,
    Range: call.params.Range || '{{now-8h..now}}',
    Rate: rate,
    Duration: duration,
    ProductionDuration: rate == null ? 0 : rate * duration,
    NoDataDuration: 0,
    FromSummary: false,
    ByMachine: []
  };
}, { delay: 400 });
