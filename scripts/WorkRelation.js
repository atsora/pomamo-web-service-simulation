// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// ??? WARNING ! Use same structure as defined in WorkStructure / WorkRead to send data !
// ??? Work/Link or Work/Relation to update the relations between items

var WorkRelationJSON_failedResponse = {
  'ErrorMessage': 'Save failed',
  'Status': 'UnexpectedError'
};

var WorkRelationJSON_OK = {
  'Revision': { 'Id': 3 },
  'Operation': { 'Id': 2 },
  'Message': 'Ok'
};

// REQUESTS

// To call with { 'Values': WorkRelationJSON1 }
$.mockjax({
  url: 'http://localhost:8082/WorkRelation/Post?Kind=Operation*',
  type: 'POST',
  contentType: 'text/json',
  dataType: 'json',
  responseTime: 800,
  responseText: WorkRelationJSON_OK
});

$.mockjax({
  url: 'http://localhost:8082/WorkRelation/Post?Kind=failure*',
  type: 'POST',
  contentType: 'text/json',
  dataType: 'json',
  responseTime: 800,
  responseText: WorkRelationJSON_failedResponse,
  status: 200
});

// With POST request, we can send json like this one
// Same as in WorkRead
//{ 'WorkToWrite': WorkRelationJSON1 },

var WorkRelationJSON1 = {
  'Id': 2, // To know what to update
  'Kind': 'Operation',

  'Parents': [
    {
      'Relation': 'Add', // or 'Remove' or 'Reorder'
      'Id': 2,
      'Kind': 'Component',
      'Display': 'Comp_2'
    }
  ],
  /* or
  'Children': [
    {
      'Id': 67,
      'Kind': 'Sequence',
      'Display': 'Seq_67'
    }
  ]*/
};

var WorkRelationJSON2 = {
  'Id': 2, // To know what to update
  'Kind': 'Operation',

  'Children': [
    {
      'Relation': 'Remove',
      'Id': 67,
      'Kind': 'Sequence'
    }
  ]
};