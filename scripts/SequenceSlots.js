// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var sequenceSlots = '{"ByMachineModule":[{"MachineModule":{"Id":3,"Display":"HeidenhainLsv2","Main":true},"Blocks":[{"Details":[{"Range":"[2017-01-16T08:54:58Z,2017-01-16T11:01:05Z)","Display":"sequenceTest1 sfkat 1: autotool (20 0)"}],"Id":4,"Display":"sequenceTest1 sfkat 1: autotool (20 0)","Range":"[2017-01-16T08:54:58Z,2017-01-16T11:01:05Z)","FgColor":"#000000","BgColor":"#00FFFF"}]}],"Range":"[2017-01-16T10:36:00Z,2017-01-16T10:36:00Z]"}';

$.mockjax({
  url : 'http://localhost:8082/SequenceSlots?MachineId=3*',
  responseTime : 1000,
  responseText : sequenceSlots
});
