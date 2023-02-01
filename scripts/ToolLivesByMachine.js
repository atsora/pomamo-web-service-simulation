// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var TLBM_JSON1 = '{"Operation":{"Id":4,"Display":"Component2 : SimpleOperation333"},"Tools":[{"Display":"T3","ToolNumber":3,"RemainingCycles":1,"ExpirationDateTimeRange":"[2050-10-08T10:06:05Z,2050-10-08T10:08:05Z)","Expired":true,"Warning":true},{"Display":"T1","ToolNumber":1,"RemainingCycles":1,"ExpirationDateTimeRange":"[2050-10-08T10:06:05Z,2050-10-08T10:08:05Z)","Expired":false,"Warning":true},{"Display":"T2","ToolNumber":2,"RemainingCycles":3,"ExpirationDateTimeRange":"[2050-10-08T10:10:05Z,2050-10-08T10:12:05Z)","Expired":false,"Warning":false}],"DateTime":"2050-10-08T10:06:05.513Z"}';

var TLBM_JSON2 = '{"ErrorMessage":"No monitored machine with id 19", "":true}';

var TLBM_JSON3 = '{"Operation":{"Id":14,"Display":"Test4 : Test2"},"Tools":[{"Display":"T200","ToolNumber":200,"RemainingCycles":666,"ExpirationDateTime":"2050-10-08T09:32:02Z","ExpirationDateTimeRange":"[2050-10-08T09:32:02Z,2050-10-08T09:32:02Z]","Expired":true,"Warning":false},{"Display":"T30000","ToolNumber":30000,"ExpirationDateTime":"2050-10-08T09:53:03Z","ExpirationDateTimeRange":"[2050-10-08T09:53:03Z,2050-10-08T09:53:03Z]","Expired":true,"Warning":false},{"Display":"T20000","ToolNumber":20000,"RemainingCycles":99,"Expired":true,"Warning":false},{"Display":"T50000","ToolNumber":50000,"Expired":true,"Warning":false},{"Display":"T500","ToolNumber":500,"Expired":false,"Warning":true},{"Display":"T40000","ToolNumber":40000,"Expired":false,"Warning":true},{"Display":"T10000","ToolNumber":10000,"Expired":false,"Warning":true}],"DateTime":"2050-10-08T10:06:06.998Z"}';

var TLBM_JSON4 = '{"Operation":{"Id":1,"Display":"KISSEN o: op1name"},"Tools":[{"Display":"T200","ToolNumber":200,"ExpirationDateTime":"2050-10-08T09:31:31Z","ExpirationDateTimeRange":"[2050-10-08T09:31:31Z,2050-10-08T09:31:31Z]","Expired":true,"Warning":false},{"Display":"T30000","ToolNumber":30000,"ExpirationDateTime":"2050-10-08T09:52:32Z","ExpirationDateTimeRange":"[2050-10-08T09:52:32Z,2050-10-08T09:52:32Z]","Expired":true,"Warning":false},{"Display":"T50000","ToolNumber":50000,"Expired":true,"Warning":false},{"Display":"T20000","ToolNumber":20000,"Expired":true,"Warning":false},{"Display":"T40000","ToolNumber":40000,"Expired":false,"Warning":true},{"Display":"T10000","ToolNumber":10000,"Expired":false,"Warning":true},{"Display":"T500","ToolNumber":500,"Expired":false,"Warning":true}],"DateTime":"2050-10-08T10:06:05.716Z"}';

// text 1 px on top

var TLBM_JSON5 = '{"Operation":{"Id":26,"Display":"EA-T1XX-DC OP20"},"Tools":[{"Group":false,"Display":"T3","ActiveSisterTool":true,"ValidSisterTools":true,"RemainingCycles":22,"ExpirationDateTimeRange":"[2020-07-15T14:15:10Z,2020-07-15T14:20:02Z)","Expired":false,"Warning":false},{"Group":false,"Display":"T7","ActiveSisterTool":true,"ValidSisterTools":true,"RemainingCycles":23,"ExpirationDateTimeRange":"[2020-07-15T14:20:02Z,2020-07-15T14:24:54Z)","Expired":false,"Warning":false},{"Group":false,"Display":"T10","ActiveSisterTool":true,"ValidSisterTools":false,"RemainingCycles":23,"ExpirationDateTimeRange":"[2020-07-15T14:20:02Z,2020-07-15T14:24:54Z)","Expired":false,"Warning":false},{"Group":false,"Display":"T12","ActiveSisterTool":true,"ValidSisterTools":false,"RemainingCycles":23,"ExpirationDateTimeRange":"[2020-07-15T14:20:02Z,2020-07-15T14:24:54Z)","Expired":false,"Warning":false},{"Group":false,"Display":"T6","ActiveSisterTool":true,"ValidSisterTools":false,"RemainingCycles":23,"ExpirationDateTimeRange":"[2020-07-15T14:20:02Z,2020-07-15T14:24:54Z)","Expired":false,"Warning":false},{"Group":false,"Display":"T4","ActiveSisterTool":false,"ValidSisterTools":true,"RemainingCycles":30,"ExpirationDateTimeRange":"[2020-07-15T16:41:10Z,2020-07-15T16:46:02Z)","Expired":false,"Warning":false},{"Group":false,"Display":"T1","ActiveSisterTool":true,"ValidSisterTools":false,"RemainingCycles":52,"ExpirationDateTimeRange":"[2020-07-15T16:41:10Z,2020-07-15T16:46:02Z)","Expired":false,"Warning":false},{"Group":false,"Display":"T5","ActiveSisterTool":false,"ValidSisterTools":false,"RemainingCycles":26,"ExpirationDateTimeRange":"[2020-07-15T18:47:42Z,2020-07-15T18:52:34Z)","Expired":false,"Warning":false},{"Group":true,"Display":"T30405","ActiveSisterTool":false,"ValidSisterTools":false,"RemainingCycles":78,"ExpirationDateTimeRange":"[2020-07-15T18:47:42Z,2020-07-15T18:52:34Z)","Expired":false,"Warning":false},{"Group":false,"Display":"T9","ActiveSisterTool":false,"ValidSisterTools":false,"RemainingCycles":60,"ExpirationDateTimeRange":"[2020-07-15T19:12:02Z,2020-07-15T19:16:54Z)","Expired":false,"Warning":false},{"Group":true,"Display":"T709","ActiveSisterTool":false,"ValidSisterTools":false,"RemainingCycles":83,"ExpirationDateTimeRange":"[2020-07-15T19:12:02Z,2020-07-15T19:16:54Z)","Expired":false,"Warning":false}],"DateTime":"2020-07-15T12:32:58.769Z"}';

var TLBM_JSON6 = '{"Operation":{"Id":26,"Display":"EA-T1XX-DC OP20"},"Tools":[{"Group":false,"Display":"T3","ActiveSisterTool":false,"ValidSisterTools":false,"ExpirationDateTime":"2020-07-15T12:58:06Z","ExpirationDateTimeRange":"[2020-07-15T12:58:06Z,2020-07-15T12:58:06Z]","Expired":true,"Warning":false},{"Group":false,"Display":"T4","ActiveSisterTool":false,"ValidSisterTools":false,"ExpirationDateTime":"2020-07-15T16:46:53Z","ExpirationDateTimeRange":"[2020-07-15T16:46:53Z,2020-07-15T16:46:53Z]","Expired":true,"Warning":false},{"Group":false,"Display":"T1","ActiveSisterTool":true,"ValidSisterTools":false,"ExpirationDateTime":"2020-07-15T18:06:52Z","ExpirationDateTimeRange":"[2020-07-15T18:06:52Z,2020-07-15T18:06:52Z]","Expired":true,"Warning":false},{"Group":false,"Display":"T5","ActiveSisterTool":false,"ValidSisterTools":false,"ExpirationDateTime":"2020-07-15T18:06:52Z","ExpirationDateTimeRange":"[2020-07-15T18:06:52Z,2020-07-15T18:06:52Z]","Expired":true,"Warning":false},{"Group":true,"Display":"T30405","ActiveSisterTool":false,"ValidSisterTools":false,"RemainingCycles":0,"Expired":true,"Warning":false},{"Group":false,"Display":"T7","ActiveSisterTool":true,"ValidSisterTools":true,"RemainingCycles":1,"ExpirationDateTimeRange":"[2020-07-15T18:24:47Z,2020-07-15T18:29:39Z)","Expired":false,"Warning":false},{"Group":false,"Display":"T6","ActiveSisterTool":true,"ValidSisterTools":false,"RemainingCycles":2,"ExpirationDateTimeRange":"[2020-07-15T18:29:39Z,2020-07-15T18:34:31Z)","Expired":false,"Warning":false},{"Group":false,"Display":"T12","ActiveSisterTool":true,"ValidSisterTools":false,"RemainingCycles":2,"ExpirationDateTimeRange":"[2020-07-15T18:29:39Z,2020-07-15T18:34:31Z)","Expired":false,"Warning":false},{"Group":false,"Display":"T10","ActiveSisterTool":true,"ValidSisterTools":false,"RemainingCycles":2,"ExpirationDateTimeRange":"[2020-07-15T18:29:39Z,2020-07-15T18:34:31Z)","Expired":false,"Warning":false},{"Group":false,"Display":"T9","ActiveSisterTool":false,"ValidSisterTools":false,"RemainingCycles":30,"ExpirationDateTimeRange":"[2020-07-15T20:50:47Z,2020-07-15T20:55:39Z)","Expired":false,"Warning":false},{"Group":true,"Display":"T709","ActiveSisterTool":false,"ValidSisterTools":false,"RemainingCycles":31,"ExpirationDateTimeRange":"[2020-07-15T20:50:47Z,2020-07-15T20:55:39Z)","Expired":false,"Warning":false}],"DateTime":"2020-07-15T18:24:47.201Z"}';


$.mockjax({
  url: /^http:\/\/localhost:8082\/ToolLivesByMachine\?MachineId=18.*$/,
  responseTime: 300,
  responseText: TLBM_JSON1
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/ToolLivesByMachine\?MachineId=19.*$/,
  responseTime: 500,
  responseText: TLBM_JSON2
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/ToolLivesByMachine\?MachineId=20.*$/,
  responseTime: 700,
  responseText: TLBM_JSON3
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/ToolLivesByMachine\?MachineId=21.*$/,
  responseTime: 1000,
  responseText: TLBM_JSON4
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/ToolLivesByMachine\?MachineId=22.*$/,
  responseTime: 1000,
  responseText: TLBM_JSON5
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/ToolLivesByMachine\?MachineId=23.*$/,
  responseTime: 1000,
  responseText: TLBM_JSON6
});

