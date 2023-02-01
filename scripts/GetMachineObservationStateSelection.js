// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var GetMachineObservationStateSelectionJSON1 = [{
  'Id' : 1,
  'Text' : 'MachineObservationState1'
}, {
  'Id' : 2,
  'Text' : 'MachineObservationState2'
}, {
  'Id' : 3,
  'Text' : 'MachineObservationState_3'
}
];

$.mockjax({
  url : 'http://localhost:8082/GetMachineObservationStateSelection',
  responseTime : 1000,
  responseText : GetMachineObservationStateSelectionJSON1
});
