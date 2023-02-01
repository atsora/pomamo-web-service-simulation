// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var MilestonesRemoveJSON_success = {
  'Message': 'Ok' // or 'Remove milestones successful'
};
var removeFailedResponse = {
  'ErrorMessage': 'Remove failed',
  'Status': 'UnexpectedError'
};

$.mockjax({
  url: 'http://localhost:8082/MilestonesRemove?Id=1',
  responseTime: 800,
  responseText: MilestonesRemoveJSON_success
});

$.mockjax({  
  url: /^http:\/\/localhost:8082\/MilestonesRemove\?Id=[2-9].*$/,
  responseTime: 500,
  responseText: removeFailedResponse,
  status: 200
});
