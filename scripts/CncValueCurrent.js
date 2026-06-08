// Copyright (C) 2009-2023 Lemoine Automation Technologies
// Copyright (C) 2023-2026 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `CncValue/Current?MachineId=<id>[&FieldIds=126]`.
// Two shapes share the same endpoint:
//   - FieldIds=126 → stacklight composite (consumed by x-stacklight)
//   - no FieldIds  → feed-rate snapshot   (consumed by x-currentcncvalue, x-currenttool)
// Lookup tables below carry each variant; the wrapper switches by FieldIds.

require('./_helpers');

var FeedRateJSON1 = {
  ByMachineModule: [{
    ByField: [{ Field: { Unit: 'mm/min' }, DateTime: '{{now-1m}}', Value: '937'  }]
  }]
};
var FeedRateJSON2 = {
  ByMachineModule: [{
    ByField: [{ Field: { Unit: 'mm/min' }, DateTime: '{{now-1m}}', Value: '2074' }]
  }]
};
var FeedRateJSON3 = {
  ByMachineModule: [{
    ByField: [{ Field: { Unit: 'mm/min' }, DateTime: '{{now-1m}}', Value: '3211' }]
  }]
};

var StacklightJSON1 = {
  ByMachineModule: [{
    MachineModule: { Id: '33', Display: 'Module-Main', Main: 'true' },
    ByField: [{
      Color: '#2E7D32', DateTime: '{{now}}',
      Field: { Id: '126', Display: 'Stack light' },
      Value: { Lights: [
        { Color: 'Red',    Status: 'Off' },
        { Color: 'Yellow', Status: 'Off' },
        { Color: 'Green',  Status: 'On'  }
      ] }
    }]
  }]
};
var StacklightJSON2 = {
  ByMachineModule: [{
    MachineModule: { Id: '33', Display: 'Module-Main', Main: 'true' },
    ByField: [{
      Color: '#FFC107', DateTime: '{{now}}',
      Field: { Id: '126', Display: 'Stack light' },
      Value: { Lights: [
        { Color: 'Red',    Status: 'Off' },
        { Color: 'Yellow', Status: 'On'  },
        { Color: 'Green',  Status: 'Off' }
      ] }
    }]
  }]
};
var StacklightJSON3 = {
  ByMachineModule: [{
    MachineModule: { Id: '33', Display: 'Module-Main', Main: 'true' },
    ByField: [{
      Color: '#D32F2F', DateTime: '{{now}}',
      Field: { Id: '126', Display: 'Stack light' },
      Value: { Lights: [
        { Color: 'Red',    Status: 'On'  },
        { Color: 'Yellow', Status: 'Off' },
        { Color: 'Green',  Status: 'Off' }
      ] }
    }]
  }]
};

var FEED_RATE   = { 1: FeedRateJSON1,   2: FeedRateJSON2,   3: FeedRateJSON3 };
var STACKLIGHTS = { 1: StacklightJSON1, 2: StacklightJSON2, 3: StacklightJSON3 };

MOCK.respond('CncValue/Current', function (call) {
  if (!call.params.MachineId) {
    return { __status: 400, body: MOCK.errorBody('MachineId required') };
  }
  var table = call.params.FieldIds === '126' ? STACKLIGHTS : FEED_RATE;
  var n = Number(call.params.MachineId);
  return table[n] || table[1];
}, { delay: 300 });
