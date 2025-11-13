// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var GetPartsInformationJSON1 = {
  Current: true,
  Range: '[2025-10-22T06:00:00.000Z,2025-10-22T08:00:00.000Z]',
  ExtendedRange: '[2025-10-22T05:58:00.000Z,2025-10-22T08:05:00.000Z]',
  OperationSlot: {
    Current: true,
    Display: 'Part2 / Op2 - Matin',
    Range: '[2025-10-22T02:00:00.000Z,2025-10-22T08:00:00.000Z)',
    Operation: {
      Id: 23425,
      Display: 'Part2 / Op2'
    }
  },
  TotalCount: 20,
  ValidCount: 11,
  ScrapCount: 4,
  FixableCount: 5,
  ScrapReport: {
    Id: 345,
    Reasons: [
      {
        Id: 2,
        Display: 'Reason 1',
        Number: 4,
        Category: 'Scrap'
      },
      {
        Id: 1,
        Display: 'Reason 2',
        Number: 5,
        Category: 'Remachining'
      }
    ]
  }
};

$.mockjax({
  url: 'http://localhost:8082/Scrap/At/Get?MachineId=1*',
  responseTime: 500,
  responseText: GetPartsInformationJSON1
});

$.mockjax({
  url: 'http://localhost:8082/Scrap/At/Get*',
  responseTime: 500,
  response: function (settings) {
    var urlMatch = settings.url.match(/http:\/\/localhost:8082\/Scrap\/At\/Get\?MachineId=(.*)&(.*)&(.*)$/);
    var machineId = urlMatch[1];
    if (machineId == 'Name?MachineId=18') {
      this.responseText = GetPartsInformationJSON1;
    }
  }
});