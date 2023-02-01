// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var pulseUtility = require('pulseUtility');
/* USED in SaveSerialNumber.js */
/*
var OperationSlotJSON1 = {
  "WorkInformations" : [{
      "Kind" : "WorkOrder"
    }, {
      "Kind" : "Part"
    }, {
      "Kind" : "Operation",
      "Value" : "OP4785"
    }
  ]
};
var OperationSlotJSON2 = {
  "WorkInformations" : [{
      "Kind" : "WorkOrder",
      "Value" : "WO9374"
    }, {
      "Kind" : "Part",
      "Value" : "PT5628"
    }, {
      "Kind" : "Operation",
      "Value" : "OP4785"
    }
  ]
};
var OperationSlotJSON3 = {
  "WorkInformations" : [{
      "Kind" : "WorkOrder"
    }, {
      "Kind" : "Part"
    }, {
      "Kind" : "Operation"
    }
  ]
};
var OperationSlotJSON4 = {
  "WorkInformations" : [{
      "Kind" : "WorkOrder",
      "Value" : "WO8265"
    }, {
      "Kind" : "Part"
    }, {
      "Kind" : "Operation",
      "Value" : "OP1273"
    }
  ]
};
*/
var GetCyclesInPeriodJSON1 = {
  'Begin' : 1378196917000,
  'End' : 1378198896000,
  'List' : [{
    'CycleId' : 688467,
    'Begin' : 1378196917000,
    'End' : 1378197457000,
    'EstimatedBegin' : false,
    'EstimatedEnd' : true,
    'SerialNumber' : 'XGH452P',
    'WorkInformations' : [{
      'Kind' : 'WorkOrder'
    }, {
      'Kind' : 'Part'
    }, {
      'Kind' : 'Operation',
      'Value' : 'OP4785'
    }
    ]
  }, {
    'CycleId' : 688803,
    'Begin' : 1378197457000,
    'End' : 1378197817000,
    'EstimatedBegin' : false,
    'EstimatedEnd' : true,
    'SerialNumber' : 'TG9687789',
    'WorkInformations' : [{
      'Kind' : 'WorkOrder',
      'Value' : 'WO9374'
    }, {
      'Kind' : 'Part',
      'Value' : 'PT5628'
    }, {
      'Kind' : 'Operation',
      'Value' : 'OP4785'
    }
    ]
  }, {
    'CycleId' : 688732,
    'Begin' : 1378197817000,
    'End' : 1378198236000,
    'EstimatedBegin' : false,
    'EstimatedEnd' : true,
    'SerialNumber' : 'VO3542824',
    'WorkInformations' : [{
      'Kind' : 'WorkOrder'
    }, {
      'Kind' : 'Part'
    }, {
      'Kind' : 'Operation'
    }
    ]
  }, {
    'CycleId' : 351262,
    'Begin' : 1378198236000,
    'End' : 1378198476000,
    'EstimatedBegin' : false,
    'EstimatedEnd' : true,
    'WorkInformations' : [{
      'Kind' : 'WorkOrder',
      'Value' : 'WO8265'
    }, {
      'Kind' : 'Part'
    }, {
      'Kind' : 'Operation',
      'Value' : 'OP1273'
    }
    ]
  }, {
    'CycleId' : 688803,
    'Begin' : 1378198476000,
    'End' : 1378198896000,
    'EstimatedBegin' : false,
    'EstimatedEnd' : true,
    'SerialNumber' : 'PGE965B',
    'WorkInformations' : [{
      'Kind' : 'WorkOrder',
      'Value' : 'WO8265'
    }, {
      'Kind' : 'Part'
    }, {
      'Kind' : 'Operation',
      'Value' : 'OP1273'
    }
    ]
  }
  ]
};

/*var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};*/

var objects = GetCyclesInPeriodJSON1; //$.parseJSON(GetCyclesInPeriodJSON1);
exports.objects = objects;

// THIS function is used somewhere else
function getCyclesInPeriod(url) {
  var begin = pulseUtility.getURLParameter(url, 'Begin');
  var end = pulseUtility.getURLParameter(url, 'End');
  var result = {};
  result.Begin = begin;
  result.End = end;
  result.List = new Array();
  var i = 0;
  for (var j = 0; j < objects.List.length; j++) {
    var o = objects.List[j];
    if (o.End) {
      if ((begin <= o.End) && (end >= o.End)) {
        var oCopy = jQuery.extend(true, {}, o);
        result.List[i++] = oCopy;
      }
    } else if (o.Begin) {
      if ((begin <= o.Begin) && (end >= o.Begin)) {
        var oCopy = jQuery.extend(true, {}, o);
        result.List[i++] = oCopy;
      }
    }
  }
  return result;
}

$.jqlog.enabled(true);
/*
$.mockjax({
  url : 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriod?Id=18',
  responseTime : 800,
  responseText : GetCyclesInPeriodJSON1
});

$.mockjax({
  url : 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriod?Id=18*',
  responseTime : 800,
  response : function (settings) {
    var result = getCyclesInPeriod(settings.url);
    this.responseText = result;
  }
});

$.mockjax({
  url : 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriod?Id=19',
  responseTime : 500,
  responseText : invalidMachineResponse,
  status: 200
});
$.mockjax({
  url : 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriod?Id=19*',
  responseTime : 500,
  response : function (settings) {
    var result = getCyclesInPeriod(settings.url);
    this.responseText = JSON.stringify(result);
  }
});

$.mockjax({
  url : 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriod?Id=20',
  responseTime : 200,
  responseText : invalidMachineResponse,
  status: 200
});

$.mockjax({
  url : 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriod?Id=21',
  responseTime : 500,
  responseText : GetCyclesInPeriodJSON1
});
$.mockjax({
  url : 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriod?Id=21*',
  responseTime : 500,
  response : function (settings) {
    var result = getCyclesInPeriod(settings.url);
    this.responseText = JSON.stringify(result);
  }
});

$.mockjax({
  url : 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriod?Id=22',
  responseTime : 300,
  responseText : invalidMachineResponse,
  status: 200
});
$.mockjax({
  url : 'http://localhost:8082/GetCyclesWithWorkInformationsInPeriod?Id=22*',
  responseTime : 300,
  response : function (settings) {
    var result = getCyclesInPeriod(settings.url);
    this.responseText = JSON.stringify(result);
  }
});*/
