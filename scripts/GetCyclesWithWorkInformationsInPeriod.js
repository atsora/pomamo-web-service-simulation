// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var pulseUtility = require('pulseUtility');

var GetCyclesWithWorkInformationsInPeriod1 = {
  'Begin': '2013-09-03T08:28:37.000Z',
  'End': '2013-09-03T09:01:36.000Z',
  'List': [{
    'CycleId': 688467,
    'Begin': '2013-09-03T08:28:37.000Z',
    'End': '2013-09-03T08:37:37.000Z',
    'EstimatedBegin': false,
    'EstimatedEnd': true,
    'SerialNumber': 'XGH452P',
    'WorkInformations': [{
      'Kind': 'WorkOrder'
    }, {
      'Kind': 'Part'
    }, {
      'Kind': 'Operation',
      'Value': 'OP4785'
    }
    ]
  }, {
    'CycleId': 688803,
    'Begin': '2013-09-03T08:37:37.000Z',
    'End': '2013-09-03T08:43:37.000Z',
    'EstimatedBegin': false,
    'EstimatedEnd': true,
    'SerialNumber': 'TG9687789',
    'WorkInformations': [{
      'Kind': 'WorkOrder',
      'Value': 'WO9374'
    }, {
      'Kind': 'Part',
      'Value': 'PT5628'
    }, {
      'Kind': 'Operation',
      'Value': 'OP4785'
    }
    ]
  }, {
    'CycleId': 688732,
    'Begin': '2013-09-03T08:43:37.000Z',
    'End': '2013-09-03T08:50:36.000Z',
    'EstimatedBegin': false,
    'EstimatedEnd': true,
    'SerialNumber': 'VO3542824',
    'WorkInformations': [{
      'Kind': 'WorkOrder'
    }, {
      'Kind': 'Part'
    }, {
      'Kind': 'Operation'
    }]
  }, {
    'CycleId': 351262,
    'Begin': '2013-09-03T08:50:36.000Z',
    'End': '2013-09-03T08:54:36.000Z',
    'EstimatedBegin': false,
    'EstimatedEnd': true,
    'WorkInformations': [{
      'Kind': 'WorkOrder',
      'Value': 'WO8265'
    }, {
      'Kind': 'Part'
    }, {
      'Kind': 'Operation',
      'Value': 'OP1273'
    }]
  }, {
    'CycleId': 688803,
    'Begin': '2013-09-03T08:54:36.000Z',
    'End': '2013-09-03T09:01:36.000Z',
    'EstimatedBegin': false,
    'EstimatedEnd': true,
    'SerialNumber': 'PGE965B',
    'WorkInformations': [{
      'Kind': 'WorkOrder',
      'Value': 'WO8265'
    }, {
      'Kind': 'Part'
    }, {
      'Kind': 'Operation',
      'Value': 'OP1273'
    }]
  }]
};

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

var objects = GetCyclesWithWorkInformationsInPeriod1;
exports.objects = objects;

function GCWWIIP_getCyclesInPeriod(url) {
  var begin = pulseUtility.getURLParameter(url, 'Begin');
  var end = pulseUtility.getURLParameter(url, 'End');
  var result = {};
  result.Begin = begin;
  result.End = end;
  result.List = new Array();
  var i = 0;
  for (var j = 0; j < objects.List.length; j++) {
    var o = objects.List[j];
    /*if (o.End) {
      if ((begin <= o.End) && (end >= o.End)) {*/
    var oCopy = jQuery.extend(true, {}, o);
    result.List[i++] = oCopy;
    /*}
    } else if (o.Begin) {
      if ((begin <= o.Begin) && (end >= o.Begin)) {
        var oCopy = jQuery.extend(true, {}, o);
        result.List[i++] = oCopy;
      }
    }*/
  }
  return result;
}

$.mockjax({
  url: 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriodV2?Id=18',
  responseTime: 1000,
  responseText: GetCyclesWithWorkInformationsInPeriod1
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/GetCyclesWithWorkInformationsInPeriodV2\?Id=18\&.*Z$/,
  responseTime: 1000,
  response: function (settings) {
    var result = GCWWIIP_getCyclesInPeriod(settings.url);
    this.responseText = result;
  }
});

$.mockjax({
  url: 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriodV2?Id=19',
  responseTime: 3000,
  responseText: invalidMachineResponse,
  status: 200
});
/*
$.mockjax({
  url : 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriodV2?Id=19*',
  responseTime : 5000,
  response : function (settings) {
    var result = GCWWIIP_getCyclesInPeriod(settings.url);
    this.responseText = JSON.stringify(result);
  }
});*/
/*
$.mockjax({
  url : 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriodV2?Id=20',
  responseTime : 2000,
  responseText : invalidMachineResponse,
  status: 200
});

$.mockjax({
  url : 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriodV2?Id=21',
  responseTime : 5000,
  responseText : GetCyclesWithWorkInformationsInPeriod1
});
$.mockjax({
  url : 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriodV2?Id=21*',
  responseTime : 5000,
  response : function (settings) {
    var result = GCWWIIP_getCyclesInPeriod(settings.url);
    this.responseText = JSON.stringify(result);
  }
});

$.mockjax({
  url : 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriodV2?Id=22',
  responseTime : 3000,
  responseText : invalidMachineResponse,
  status: 200
});
$.mockjax({
  url : 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriodV2?Id=22*',
  responseTime : 3000,
  response : function (settings) {
    var result = GCWWIIP_getCyclesInPeriod(settings.url);
    this.responseText = JSON.stringify(result);
  }
});
*/