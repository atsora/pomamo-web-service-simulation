// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// WARNING ! Use same structure as defined in WorkStructure / WorkRead / WorkNew to send data !
// To update single

var WorkUpdateJSON_failedResponse = {
  'ErrorMessage': 'Save failed',
  'Status': 'UnexpectedError'
};

var WorkUpdateJSON_OK = {
  // Never : 'Revision': { 'Id': 3 }, // if modification is used and progress bar should be displayed
  'Kind': 'Operation',
  'Id': 2, // Actual + work revision
  // 'WorkRevision': 3, // if a new revision is created... To be done
  'Message': 'Ok'
};

// REQUESTS

// To call with { 'Values': WorkUpdateJSON1 }
$.mockjax({
  url: 'http://localhost:8082/WorkUpdate/Post?Kind=Operation*',
  type: 'POST',
  contentType: 'text/json',
  dataType: 'json',
  responseTime: 800,
  responseText: WorkUpdateJSON_OK
});

$.mockjax({
  url: 'http://localhost:8082/Workupdate/Post?Kind=failure*',
  type: 'POST',
  contentType: 'text/json',
  dataType: 'json',
  responseTime: 800,
  responseText: WorkUpdateJSON_failedResponse,
  status: 200
});

// With POST request, we can send json like this one
// Same as in WorkRead
//{ 'WorkToWrite': WorkUpdateJSON1 },

var WorkUpdateJSON1 = {
  'Id': 2, // To know what to update
  //'WorkRevision' : 2, // Or nothing for 1st version
  'Kind': 'Operation',
  /*'Revision': {
    'Number': 2 // If defined
  },*/
  /*
  'Parents': [ -> moved in work/relation
    {
      'Id': 2,
      'Kind': 'Component',
      'Display': 'Comp_2'
    }
  ],
  'Children': [
    {
      'Id': 67,
      'Kind': 'Sequence',
      'Display': 'Seq_67'
    }
  ],*/
  'Properties': [
    {
      'Key': 'Name',
      'Value': 'my name'
    }
  ]
};
