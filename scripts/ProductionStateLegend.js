// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var Legend1 = {
  'Items': [{ 'Color': '#0080FF', 'Display': 'Production', 'ProductionStates': [{ 'Id': 1, 'Display': 'Production', 'LongDisplay': 'Production - ', 'Color': '#0080FF' }] }, { 'Color': '#AA0909', 'Display': 'No production', 'ProductionStates': [{ 'Id': 2, 'Display': 'No production', 'LongDisplay': 'No production - ', 'Color': '#AA0909' }] }]
};

var LegendError = { // inspired from real error between version 9 and 10
  'ExceptionName': 'GenericADOException',
  'ExceptionFullName': 'NHibernate.Exceptions.GenericADOException',
  'InnerException': {
    'ExceptionName': 'PostgresException', 'ExceptionFullName': 'Npgsql.PostgresException', 'ErrorMessage': '42P01: relation \u0022productionstate\u0022 does not exist', 'Status': 'UnexpectedError', 'Details': ''
  },
  'ErrorMessage': 'could not execute query\r\n[ SELECT bla bla bla]',
  'Status': 'UnexpectedError',
  'Details': ''
};

$.mockjax({
  url: 'http://localhost:8082/ProductionStateLegend',
  responseTime: 2000,
  responseText: Legend1
});
