// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

//var CurrentIsoFileJSON23_real = '{"CurrentDateTime":"2022-05-17T08:45:49Z","ByMachineModule":[{"MachineModule":{"Id":28,"Display":"FemaNakamura-LowerTurret","Main":false},"IsoFile":{"Id":20003,"Display":"O8453PRG - Corrected.P-3"},"Range":"[2016-06-28T08:51:02Z,)"},{"MachineModule":{"Id":27,"Display":"FemaNakamura-UpperTurret","Main":false},"IsoFile":{"Id":20002,"Display":"O8453PRG - Corrected.P-2"},"Range":"[2015-01-15T08:10:09Z,)"},{"MachineModule":{"Id":26,"Display":"FemaNakamura-LeftTurret","Main":false},"IsoFile":{"Id":20001,"Display":"O8453PRG - Corrected.P-1"},"Range":"[2015-01-11T08:23:07Z,)"}],"IsoFiles":"O8453PRG - Corrected.P-3 O8453PRG - Corrected.P-2 O8453PRG - Corrected.P-1"}';
var CurrentIsoFileJSON23 = '{"CurrentDateTime":"2022-05-17T08:45:49Z", "IsoFiles":"O8453PRG - Corrected.P-3 O8453PRG - Corrected.P-2 O8453PRG - Corrected.P-1"}';

$.mockjax({
  url : 'http://localhost:8082/IsoFile/Current?MachineId=23',
  responseTime : 1000,
  responseText : CurrentIsoFileJSON23
});

$.mockjax({
  url : 'http://localhost:8082/IsoFile/Current?MachineId=9',
  responseTime: 1000,
  status: 504
});
