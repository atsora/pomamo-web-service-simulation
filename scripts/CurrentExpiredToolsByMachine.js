// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var CETBM_JSON1 = '{"Operation":{"Display":"Op1"}, "ExpiredToolsNumber":0, "WarningToolsNumber":1, "OldestExpirationDatetime":"2016-12-12T12:12:12Z", "OldestWarningDatetime":"2016-12-12T12:12:12Z"}';

var CETBM_JSON2 = '{"ErrorMessage":"No monitored machine with id 19", "":true}';

var CETBM_JSON3 = '{"Operation":{"Display":"Op2"}, "ExpiredToolsNumber":3, "WarningToolsNumber":5, "OldestExpirationDatetime":"2016-12-02T12:12:12Z", "OldestWarningDatetime":"2016-02-12T12:12:12Z", "WarningTools":["T1","T2","warn_T3"], "ExpiredTools":["T1","T2","exp_T3"], "NextToolInLimit":{"RemainingTime":120}}';

var CETBM_JSON4 = '{"Operation":{}, "ExpiredToolsNumber":7, "WarningToolsNumber":0, "OldestExpirationDatetime":"2016-12-22T12:12:12Z", "OldestWarningDatetime":"2016-12-22T12:12:12Z"}';

$.mockjax({
  url : 'http://localhost:8082/CurrentExpiredToolsByMachine?MachineId=18',
  responseTime : 1000,
  responseText : CETBM_JSON1
});

$.mockjax({
  url : 'http://localhost:8082/CurrentExpiredToolsByMachine?MachineId=19',
  responseTime : 1000,
  responseText : CETBM_JSON2
});

$.mockjax({
  url : 'http://localhost:8082/CurrentExpiredToolsByMachine?MachineId=20',
  responseTime : 1000,
  responseText : CETBM_JSON3
});

$.mockjax({
  url : 'http://localhost:8082/CurrentExpiredToolsByMachine?MachineId=21',
  responseTime : 1000,
  responseText : CETBM_JSON4
});
