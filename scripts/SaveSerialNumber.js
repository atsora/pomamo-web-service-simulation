// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var pulseUtility = require('pulseUtility');
var getCyclesInPeriod = require('./GetCyclesInPeriod');

function saveSerialNumber(url) {
  if (getCyclesInPeriod.objects) {
    var cycleid = pulseUtility.getURLParameter(url, 'CycleId');
    var serialnumber = pulseUtility.getURLParameter(url, 'SerialNumber');
    for (var i = 0; i < getCyclesInPeriod.objects.List.length; i++) {
      if (getCyclesInPeriod.objects.List[i].CycleId = cycleid) {
        getCyclesInPeriod.objects.List[i].SerialNumber = serialnumber;
      }
    }

  }
}

var SaveSerialNumberJSON1 = {
  'Id' : 3,
  'Message' : 'Save serial number successful'
};
var SaveSerialNumberJSON2 = {
  'ErrorMessage' : 'Request failed',
  'DisplayStatus' : true
};
var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

$.mockjax({
  url : 'http://localhost:8082/SaveSerialNumberV5?MachineId=19&Begin=2013-09-03T13:51:40.000Z&SerialNumber=*',
  responseTime : 1000,
  response : function (settings) {
    saveSerialNumber(settings.url);
    this.responseText = SaveSerialNumberJSON1
  }
});

