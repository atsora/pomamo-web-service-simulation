// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var GetCycleProgressJSON1 = {
  'DataTime': '2017-03-14T10:55:19Z', 'Operation': {
    'Id': 12457, 'Display': '885041181E 885041181E/30',
    'MachiningDuration': 1441
  }, 'ByMachineModule': [{
    'MachineModule': { 'Id': 33, 'Display': 'ACMEWC110-2', 'Main': true },
    'Current': {
      'Begin': '2017-03-14T10:54:22Z', 'Completion': 0.243970717446809, 'Id': 10440, 'Order': 5, 'Display': 'Seq5 ',
      'Kind': 'Machining', 'StandardDuration': 235
    }, 'Sequences': [{
      'IsCurrent': false, 'IsCompleted': true, 'BeginPercent': 0,
      'EndPercent': 0.0936849410131853, 'Id': 10436, 'Order': 1, 'Display': 'Seq1 ', 'Kind': 'Machining', 'StandardDuration': 135
    },
    {
      'IsCurrent': false, 'IsCompleted': true, 'BeginPercent': 0.0936849410131853, 'EndPercent': 0.135322692574601,
      'Id': 10437, 'Order': 2, 'Display': 'SeqTwo ', 'Kind': 'Machining', 'StandardDuration': 60
    }, {
      'IsCurrent': false,
      'IsCompleted': true, 'BeginPercent': 0.135322692574601, 'EndPercent': 0.159611380985427, 'Id': 10438, 'Order': 3,
      'Display': 'Seq3 ', 'Kind': 'Stop', 'StandardDuration': 35
    }, {
      'IsCurrent': false, 'IsCompleted': true,
      'BeginPercent': 0.159611380985427, 'EndPercent': 0.305343511450382, 'Id': 10439, 'Order': 4, 'Display': 'Seq4 ',
      'Kind': 'Machining', 'StandardDuration': 210
    }, {
      'IsCurrent': true, 'IsCompleted': false,
      'BeginPercent': 0.305343511450382, 'EndPercent': 0.468424705065926, 'Id': 10440, 'Order': 5, 'Display': 'Seq5 ',
      'Kind': 'Machining', 'StandardDuration': 235
    }, {
      'IsCurrent': false, 'IsCompleted': false,
      'BeginPercent': 0.468424705065926, 'EndPercent': 0.650242886884108, 'Id': 10441, 'Order': 6, 'Display': 'Seq6 ',
      'Kind': 'Machining', 'StandardDuration': 262
    }, {
      'IsCurrent': false, 'IsCompleted': false,
      'BeginPercent': 0.650242886884108, 'EndPercent': 0.70853573907009, 'Id': 10442, 'Order': 7, 'Display': 'Seq7 ',
      'Kind': 'Machining', 'StandardDuration': 84
    }, {
      'IsCurrent': false, 'IsCompleted': false,
      'BeginPercent': 0.70853573907009, 'EndPercent': 0.736294240111034, 'Id': 10443, 'Order': 8, 'Display': 'Seq8 ',
      'Kind': 'Machining', 'StandardDuration': 40
    }, {
      'IsCurrent': false, 'IsCompleted': false,
      'BeginPercent': 0.736294240111034, 'EndPercent': 1.00902151283831, 'Id': 10444, 'Order': 9, 'Display': 'Seq9 ',
      'Kind': 'Machining', 'StandardDuration': 393
    }, {
      'IsCurrent': false, 'IsCompleted': false,
      'BeginPercent': 1.00902151283831, 'EndPercent': 1.04094378903539, 'Id': 10445, 'Order': 10, 'Display': 'Seq10 ',
      'Kind': 'Machining', 'StandardDuration': 46
    }, {
      'IsCurrent': false, 'IsCompleted': false,
      'BeginPercent': 1.04094378903539, 'EndPercent': 1.20263705759889, 'Id': 10446, 'Order': 11, 'Display': 'Seq11 ',
      'Kind': 'Machining', 'StandardDuration': 233
    }]
  }], 'Stop': false,
  'EstimatedCycleEndDateTime': '2017-03-14T11:15:55Z', 'Completion': 0.142471801040944,
  'ActiveEvents': [],
  'ComingEvents': []
};

var GetCycleProgressJSON2 = {
  'CurrentTime': '2017-04-03T12:59:06Z',
  'Operation': { 'Id': 12457, 'Display': '885041181E 885041181E/30', 'MachiningDuration': 1441 },
  'ByMachineModule': [{
    'MachineModule': { 'Id': 33, 'Display': 'ACMEWC110-2', 'Main': true },
    'Current': { 'Begin': '2017-04-03T12:58:41Z', 'Completion': 0.108744141276596, 'Id': 10440, 'Order': 5, 'Display': 'Seq5 ', 'Kind': 'Machining', 'StandardDuration': 235 },
    'Sequences': [{ 'IsCurrent': false, 'IsCompleted': true, 'BeginPercent': 0, 'EndPercent': 0.0936849410131853, 'Id': 10436, 'Order': 1, 'Display': 'Seq1 ', 'Kind': 'Machining', 'StandardDuration': 135 }, { 'IsCurrent': false, 'IsCompleted': true, 'BeginPercent': 0.0936849410131853, 'EndPercent': 0.135322692574601, 'Id': 10437, 'Order': 2, 'Display': 'SeqTwo ', 'Kind': 'Machining', 'StandardDuration': 60 }, { 'IsCurrent': false, 'IsCompleted': true, 'BeginPercent': 0.135322692574601, 'EndPercent': 0.159611380985427, 'Id': 10438, 'Order': 3, 'Display': 'Seq3 ', 'Kind': 'Stop', 'StandardDuration': 35 }, { 'IsCurrent': false, 'IsCompleted': true, 'BeginPercent': 0.159611380985427, 'EndPercent': 0.305343511450382, 'Id': 10439, 'Order': 4, 'Display': 'Seq4 ', 'Kind': 'Machining', 'StandardDuration': 210 }, { 'IsCurrent': true, 'IsCompleted': false, 'BeginPercent': 0.305343511450382, 'EndPercent': 0.468424705065926, 'Id': 10440, 'Order': 5, 'Display': 'Seq5 ', 'Kind': 'Machining', 'StandardDuration': 235 }, { 'IsCurrent': false, 'IsCompleted': false, 'BeginPercent': 0.468424705065926, 'EndPercent': 0.650242886884108, 'Id': 10441, 'Order': 6, 'Display': 'Seq6 ', 'Kind': 'Machining', 'StandardDuration': 262 }, { 'IsCurrent': false, 'IsCompleted': false, 'BeginPercent': 0.650242886884108, 'EndPercent': 0.70853573907009, 'Id': 10442, 'Order': 7, 'Display': 'Seq7 ', 'Kind': 'Machining', 'StandardDuration': 84 }, { 'IsCurrent': false, 'IsCompleted': false, 'BeginPercent': 0.70853573907009, 'EndPercent': 0.736294240111034, 'Id': 10443, 'Order': 8, 'Display': 'Seq8', 'Kind': 'Machining', 'StandardDuration': 40 }, { 'IsCurrent': false, 'IsCompleted': false, 'BeginPercent': 0.736294240111034, 'EndPercent': 1.00902151283831, 'Id': 10444, 'Order': 9, 'Display': 'Seq9 ', 'Kind': 'Machining', 'StandardDuration': 393 }, { 'IsCurrent': false, 'IsCompleted': false, 'BeginPercent': 1.00902151283831, 'EndPercent': 1.04094378903539, 'Id': 10445, 'Order': 10, 'Display': 'Seq10 ', 'Kind': 'Machining', 'StandardDuration': 46 }, { 'IsCurrent': false, 'IsCompleted': false, 'BeginPercent': 1.04094378903539, 'EndPercent': 1.20263705759889, 'Id': 10446, 'Order': 11, 'Display': 'Seq11 ', 'Kind': 'Machining', 'StandardDuration': 233 }]
  }],
  'Stop': false, 'EstimatedCycleEndDateTime': '2017-04-03T13:20:14Z', 'Completion': 0.120418889590562,
  'ActiveEvents': [],
  'ComingEvents': [{
    'Message': 'End in', 'DateTime': '2017-03-14T11:12:55Z', 'Severity': { 'Name': 'Info', 'LevelName': 'Info', 'LevelValue': '80' }
  }]
};

var GetCycleProgressJSON3 = {
  'CurrentTime': '2017-03-14T11:10:19Z', 'Operation': {
    'Id': 12457, 'Display': '885041181E 885041181E/30',
    'MachiningDuration': 1441
  }, 'ByMachineModule': [{
    'MachineModule': { 'Id': 33, 'Display': 'ACMEWC110-2', 'Main': true },
    'Current': {
      'Begin': '2017-03-14T10:54:22Z', 'Completion': 0.243970717446809, 'Id': 10440, 'Order': 5, 'Display': 'Seq5 ',
      'Kind': 'Machining', 'StandardDuration': 235
    }, 'Sequences': [{
      'IsCurrent': false, 'IsCompleted': true, 'BeginPercent': 0,
      'EndPercent': 0.0936849410131853, 'Id': 10436, 'Order': 1, 'Display': 'Seq1 ', 'Kind': 'Machining', 'StandardDuration': 135
    },
    {
      'IsCurrent': false, 'IsCompleted': true, 'BeginPercent': 0.0936849410131853, 'EndPercent': 0.135322692574601,
      'Id': 10437, 'Order': 2, 'Display': 'SeqTwo ', 'Kind': 'Machining', 'StandardDuration': 60
    }, {
      'IsCurrent': false,
      'IsCompleted': true, 'BeginPercent': 0.135322692574601, 'EndPercent': 0.159611380985427, 'Id': 10438, 'Order': 3,
      'Display': 'Seq3 ', 'Kind': 'Stop', 'StandardDuration': 35
    }, {
      'IsCurrent': false, 'IsCompleted': true,
      'BeginPercent': 0.159611380985427, 'EndPercent': 0.305343511450382, 'Id': 10439, 'Order': 4, 'Display': 'Seq4 ',
      'Kind': 'Machining', 'StandardDuration': 210
    }, {
      'IsCurrent': false, 'IsCompleted': true,
      'BeginPercent': 0.305343511450382, 'EndPercent': 0.468424705065926, 'Id': 10440, 'Order': 5, 'Display': 'Seq5 ',
      'Kind': 'Machining', 'StandardDuration': 235
    }, {
      'IsCurrent': true, 'IsCompleted': false,
      'BeginPercent': 0.468424705065926, 'EndPercent': 0.650242886884108, 'Id': 10441, 'Order': 6, 'Display': 'Seq6 ',
      'Kind': 'Machining', 'StandardDuration': 262
    }, {
      'IsCurrent': false, 'IsCompleted': false,
      'BeginPercent': 0.650242886884108, 'EndPercent': 0.70853573907009, 'Id': 10442, 'Order': 7, 'Display': 'Seq7 ',
      'Kind': 'Machining', 'StandardDuration': 84
    }, {
      'IsCurrent': false, 'IsCompleted': false,
      'BeginPercent': 0.70853573907009, 'EndPercent': 0.736294240111034, 'Id': 10443, 'Order': 8, 'Display': 'Seq8 ',
      'Kind': 'Machining', 'StandardDuration': 40
    }, {
      'IsCurrent': false, 'IsCompleted': false,
      'BeginPercent': 0.736294240111034, 'EndPercent': 1.00902151283831, 'Id': 10444, 'Order': 9, 'Display': 'Seq9 ',
      'Kind': 'Machining', 'StandardDuration': 393
    }, {
      'IsCurrent': false, 'IsCompleted': false,
      'BeginPercent': 1.00902151283831, 'EndPercent': 1.04094378903539, 'Id': 10445, 'Order': 10, 'Display': 'Seq10 ',
      'Kind': 'Machining', 'StandardDuration': 46
    }, {
      'IsCurrent': false, 'IsCompleted': false,
      'BeginPercent': 1.04094378903539, 'EndPercent': 1.20263705759889, 'Id': 10446, 'Order': 11, 'Display': 'Seq11 ',
      'Kind': 'Machining', 'StandardDuration': 233
    }]
  }], 'Stop': false,
  'EstimatedCycleEndDateTime': '2017-03-14T11:15:55Z', 'Completion': 0.40,
  'ActiveEvents': [],
  'ComingEvents': [{
    'Message': 'End in', 'DateTime': '2017-03-14T11:12:55Z', 'Severity': { 'Name': 'Warning', 'LevelName': 'Warning', 'LevelValue': '60' }
  }]
};

var GetCycleProgressJSON4 = {
  'CurrentTime': '2017-03-14T11:14:19Z', 'Operation': {
    'Id': 12457, 'Display': '885041181E 885041181E/30',
    'MachiningDuration': 1441
  }, 'ByMachineModule': [{
    'MachineModule': { 'Id': 33, 'Display': 'ACMEWC110-2', 'Main': true },
    'Current': {
      'Begin': '2017-03-14T10:54:22Z', 'Completion': 0.243970717446809, 'Id': 10440, 'Order': 5, 'Display': 'Seq5 ',
      'Kind': 'Machining', 'StandardDuration': 235
    }, 'Sequences': [{
      'IsCurrent': false, 'IsCompleted': true, 'BeginPercent': 0,
      'EndPercent': 0.0936849410131853, 'Id': 10436, 'Order': 1, 'Display': 'Seq1 ', 'Kind': 'Machining', 'StandardDuration': 135
    },
    {
      'IsCurrent': false, 'IsCompleted': true, 'BeginPercent': 0.0936849410131853, 'EndPercent': 0.135322692574601,
      'Id': 10437, 'Order': 2, 'Display': 'SeqTwo ', 'Kind': 'Machining', 'StandardDuration': 60
    }, {
      'IsCurrent': false,
      'IsCompleted': true, 'BeginPercent': 0.135322692574601, 'EndPercent': 0.159611380985427, 'Id': 10438, 'Order': 3,
      'Display': 'Seq3 ', 'Kind': 'Stop', 'StandardDuration': 35
    }, {
      'IsCurrent': false, 'IsCompleted': true,
      'BeginPercent': 0.159611380985427, 'EndPercent': 0.305343511450382, 'Id': 10439, 'Order': 4, 'Display': 'Seq4 ',
      'Kind': 'Machining', 'StandardDuration': 210
    }, {
      'IsCurrent': false, 'IsCompleted': true,
      'BeginPercent': 0.305343511450382, 'EndPercent': 0.468424705065926, 'Id': 10440, 'Order': 5, 'Display': 'Seq5 ',
      'Kind': 'Machining', 'StandardDuration': 235
    }, {
      'IsCurrent': false, 'IsCompleted': true,
      'BeginPercent': 0.468424705065926, 'EndPercent': 0.650242886884108, 'Id': 10441, 'Order': 6, 'Display': 'Seq6 ',
      'Kind': 'Machining', 'StandardDuration': 262
    }, {
      'IsCurrent': false, 'IsCompleted': true,
      'BeginPercent': 0.650242886884108, 'EndPercent': 0.70853573907009, 'Id': 10442, 'Order': 7, 'Display': 'Seq7 ',
      'Kind': 'Machining', 'StandardDuration': 84
    }, {
      'IsCurrent': false, 'IsCompleted': true,
      'BeginPercent': 0.70853573907009, 'EndPercent': 0.736294240111034, 'Id': 10443, 'Order': 8, 'Display': 'Seq8 ',
      'Kind': 'Machining', 'StandardDuration': 40
    }, {
      'IsCurrent': true, 'IsCompleted': false,
      'BeginPercent': 0.736294240111034, 'EndPercent': 1.00902151283831, 'Id': 10444, 'Order': 9, 'Display': 'Seq9 ',
      'Kind': 'Machining', 'StandardDuration': 393
    }, {
      'IsCurrent': false, 'IsCompleted': false,
      'BeginPercent': 1.00902151283831, 'EndPercent': 1.04094378903539, 'Id': 10445, 'Order': 10, 'Display': 'Seq10 ',
      'Kind': 'Machining', 'StandardDuration': 46
    }, {
      'IsCurrent': false, 'IsCompleted': false,
      'BeginPercent': 1.04094378903539, 'EndPercent': 1.20263705759889, 'Id': 10446, 'Order': 11, 'Display': 'Seq11 ',
      'Kind': 'Machining', 'StandardDuration': 233
    }]
  }], 'Stop': false,
  'EstimatedCycleEndDateTime': '2017-03-14T11:15:55Z', 'Completion': 0.80,
  'ActiveEvents': [],
  'ComingEvents': [{
    'Message': 'Stop in', 'DateTime': '2017-03-14T11:15:55Z', 'Severity': { 'Name': 'Warning', 'LevelName': 'Warning', 'LevelValue': '60' }
  }]
};

var GetCycleProgressJSON5 = {
  'CurrentTime': '2017-03-14T11:17:19Z', 'Operation': {
    'Id': 12457, 'Display': '885041181E 885041181E/30',
    'MachiningDuration': 1441
  }, 'ByMachineModule': [{
    'MachineModule': { 'Id': 33, 'Display': 'ACMEWC110-2', 'Main': true },
    'Current': {
      'Begin': '2017-03-14T10:54:22Z', 'Completion': 0.243970717446809, 'Id': 10440, 'Order': 5, 'Display': 'Seq5 ',
      'Kind': 'Machining', 'StandardDuration': 235
    }, 'Sequences': [{
      'IsCurrent': false, 'IsCompleted': true, 'BeginPercent': 0,
      'EndPercent': 0.0936849410131853, 'Id': 10436, 'Order': 1, 'Display': 'Seq1 ', 'Kind': 'Machining', 'StandardDuration': 135
    },
    {
      'IsCurrent': false, 'IsCompleted': true, 'BeginPercent': 0.0936849410131853, 'EndPercent': 0.135322692574601,
      'Id': 10437, 'Order': 2, 'Display': 'SeqTwo ', 'Kind': 'Machining', 'StandardDuration': 60
    }, {
      'IsCurrent': false,
      'IsCompleted': true, 'BeginPercent': 0.135322692574601, 'EndPercent': 0.159611380985427, 'Id': 10438, 'Order': 3,
      'Display': 'Seq3 ', 'Kind': 'Stop', 'StandardDuration': 35
    }, {
      'IsCurrent': false, 'IsCompleted': true,
      'BeginPercent': 0.159611380985427, 'EndPercent': 0.305343511450382, 'Id': 10439, 'Order': 4, 'Display': 'Seq4 ',
      'Kind': 'Machining', 'StandardDuration': 210
    }, {
      'IsCurrent': false, 'IsCompleted': true,
      'BeginPercent': 0.305343511450382, 'EndPercent': 0.468424705065926, 'Id': 10440, 'Order': 5, 'Display': 'Seq5 ',
      'Kind': 'Machining', 'StandardDuration': 235
    }, {
      'IsCurrent': false, 'IsCompleted': true,
      'BeginPercent': 0.468424705065926, 'EndPercent': 0.650242886884108, 'Id': 10441, 'Order': 6, 'Display': 'Seq6 ',
      'Kind': 'Machining', 'StandardDuration': 262
    }, {
      'IsCurrent': false, 'IsCompleted': true,
      'BeginPercent': 0.650242886884108, 'EndPercent': 0.70853573907009, 'Id': 10442, 'Order': 7, 'Display': 'Seq7 ',
      'Kind': 'Machining', 'StandardDuration': 84
    }, {
      'IsCurrent': false, 'IsCompleted': true,
      'BeginPercent': 0.70853573907009, 'EndPercent': 0.736294240111034, 'Id': 10443, 'Order': 8, 'Display': 'Seq8 ',
      'Kind': 'Machining', 'StandardDuration': 40
    }, {
      'IsCurrent': false, 'IsCompleted': true,
      'BeginPercent': 0.736294240111034, 'EndPercent': 1.00902151283831, 'Id': 10444, 'Order': 9, 'Display': 'Seq9 ',
      'Kind': 'Machining', 'StandardDuration': 393
    }, {
      'IsCurrent': true, 'IsCompleted': false,
      'BeginPercent': 1.00902151283831, 'EndPercent': 1.04094378903539, 'Id': 10445, 'Order': 10, 'Display': 'Seq10 ',
      'Kind': 'Machining', 'StandardDuration': 46
    }, {
      'IsCurrent': false, 'IsCompleted': false,
      'BeginPercent': 1.04094378903539, 'EndPercent': 1.20263705759889, 'Id': 10446, 'Order': 11, 'Display': 'Seq11 ',
      'Kind': 'Machining', 'StandardDuration': 233
    }]
  }], 'Stop': false,
  'EstimatedCycleEndDateTime': '2017-03-14T11:15:55Z', 'Completion': 0.90,
  'ActiveEvents': [{
    'Message': 'STOPPED', 'DateTime': '2017-03-14T11:15:55Z', 'Severity': { 'Name': 'Error', 'LevelName': 'Error', 'LevelValue': '40' }
  }],
  'ComingEvents': []
};

//ErrorDTO no cycle progress information
var invalidMachineResponse = {
  'ErrorMessage': 'Invalid machine',
  'Status': 'WrongRequestParameter'
};

$.mockjax({
  url: /^http:\/\/localhost:8082\/CycleProgress\?MachineId=1.*$/,
  responseTime: 1000,
  responseText: GetCycleProgressJSON1
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CycleProgress\?MachineId=2.*$/,
  responseTime: 1000,
  responseText: GetCycleProgressJSON2
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CycleProgress\?MachineId=3.*$/,
  responseTime: 10,
  responseText: GetCycleProgressJSON3
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CycleProgress\?MachineId=4.*$/,
  responseTime: 10,
  responseText: GetCycleProgressJSON4
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CycleProgress\?MachineId=5.*$/,
  responseTime: 10,
  responseText: GetCycleProgressJSON5
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CycleProgress\?MachineId=8.*$/,
  responseTime: 1000,
  responseText: invalidMachineResponse,
  status: 200
});

$.mockjax({
  url: /^http:\/\/localhost:8082\/CycleProgress\?MachineId=9.*$/,
  responseTime: 1000,
  status: 504
});
