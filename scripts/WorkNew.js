// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// WARNING ! Use same structure as defined in WorkStructure / WorkRead to send data !

// Splitted into:
// Work/New to send a new full structure
// Work/Update to update a single field (or a set of fields)
// Work/Link or Work/Relation to update the relations between items

var WorkNewJSON_failedResponse = {
  'ErrorMessage': 'Save failed',
  'Status': 'UnexpectedError'
};

var WorkNewJSON_OK = {
  'Kind': 'Operation',
  'Id': 2,
  // 'WorkRevision': 1,
  'Message': 'Ok'
};

// REQUESTS

// To call with { 'Values': WorkNewJSON1 }
$.mockjax({
  url: 'http://localhost:8082/WorkNew/Post?Kind=Operation*',
  type: 'POST',
  contentType: 'text/json',
  dataType: 'json',
  responseTime: 800,
  responseText: WorkNewJSON_OK
});

$.mockjax({
  url: 'http://localhost:8082/WorkNew/Post?Kind=failure*',
  type: 'POST',
  contentType: 'text/json',
  dataType: 'json',
  responseTime: 800,
  responseText: WorkNewJSON_failedResponse,
  status: 200
});

// With POST request, we can send json like this one
// Same as in WorkRead
//{ 'WorkToWrite': WorkNewJSON1 },

var WorkNewJSON1 = {
  'Kind': 'Operation',
  'Parents': [
    {
      'Id': 2,
      'Kind': 'Component'
      //,'Display': 'Comp_2'
      // Order ???
    }
  ],
  'Children': [
    {
      'Id': 67,
      'Kind': 'Sequence'
      //,'Display': 'Seq_67'
    }
  ],
  'Properties': [
    {
      'Key': 'Name',
      'Value': 'my name'
    },
    {
      'Key': 'Code',
      'Value': 'my code'
    }
    // ...
  ]
};
