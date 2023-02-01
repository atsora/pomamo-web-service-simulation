// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Revision-id = 1 -> out = 0-> no pending modifications anymore
$.mockjax({
  url : 'http://localhost:8082/GetPendingModificationsFromRevision?Id=1',
  responseTime : 1000,
  dataType : 'json',
  responseText : '5'
});

// Revision-id = 2 -> out = 10 to 6
var __revisionid2_GetPendingModificationsFromRevision = 10;
$.mockjax({
  url : 'http://localhost:8082/GetPendingModificationsFromRevision?Id=2',
  responseTime : 1000,
  dataType : 'json',
  response : function (settings) {
    if (6 < __revisionid2_GetPendingModificationsFromRevision) {
      __revisionid2_GetPendingModificationsFromRevision--;
    }
    this.responseText = {
      Number : __revisionid2_GetPendingModificationsFromRevision
    }
  }
});

// Revision-id = 3 -> out = decreasing pending modifications
var __revisionid3_GetPendingModificationsFromRevision = 10;
$.mockjax({
  url : 'http://localhost:8082/GetPendingModificationsFromRevision?Id=3',
  responseTime : 2000,
  dataType : 'json',
  response : function (settings) {
    if (-9 == __revisionid3_GetPendingModificationsFromRevision) {
      __revisionid3_GetPendingModificationsFromRevision = 10;
      this.responseText = {
        Number : 10
      }
    } else {
      __revisionid3_GetPendingModificationsFromRevision--;
      if (0 < __revisionid3_GetPendingModificationsFromRevision) {
        this.responseText = {
          Number : __revisionid3_GetPendingModificationsFromRevision
        }
      } else {
        this.responseText = {
          Number : 0
        }
      }
    }
  }
});

/*
// Error ? TO ADD
$.mockjax({
url: 'http://localhost:8082/GetPendingModificationsFromRevision?Id=5',
responseTime : 900,
//responseText: ???
});
 */
