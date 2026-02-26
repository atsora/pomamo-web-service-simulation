// Copyright (C) 2026 Atsora Solutions

var ReasonUnansweredJSON1 = {
  'IsUnansweredPeriod': true,
  'UnansweredPeriodsNumber': 3
};
var ReasonUnansweredJSON2 = {
  'IsUnansweredPeriod': true,
  'UnansweredPeriodsNumber': 4
};
var ReasonUnansweredJSON3 = {
  'IsUnansweredPeriod': false,
  'UnansweredPeriodsNumber': 0
};
var ReasonUnansweredJSON4 = {
  'IsUnansweredPeriod': false,
  'UnansweredPeriodsNumber': 0
};

var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

$.mockjax({
  url: 'http://localhost:8082/ReasonUnanswered?MachineId=18',
  responseTime: 10,
  responseText: ReasonUnansweredJSON1
});

$.mockjax({
  url: 'http://localhost:8082/ReasonUnanswered?MachineId=19',
  responseTime: 1000,
  responseText: ReasonUnansweredJSON2
});

$.mockjax({
  url: 'http://localhost:8082/ReasonUnanswered?MachineId=20',
  responseTime: 1000,
  responseText: ReasonUnansweredJSON3
});

$.mockjax({
  url: 'http://localhost:8082/ReasonUnanswered?MachineId=21',
  responseTime: 1000,
  responseText: ReasonUnansweredJSON4
});

$.mockjax({
  url: 'http://localhost:8082/ReasonUnanswered?MachineId=22',
  responseTime: 1000,
  responseText: invalidMachineResponse,
  status: 200
});

$.mockjax({
  url: 'http://localhost:8082/ReasonUnanswered?MachineId=128',
  status: 504,
  responseTime: 1000
});
