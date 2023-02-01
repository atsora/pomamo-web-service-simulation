// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var GetMachineStatusByIWP = '{"LineDisplay":"my_LINE", "IWPDisplay":"my_IWP","NbPiecesDone": 66,"GoalPeriod": 222,"GoalNow": 123,"List":[{"MachineId":18,"NbPiecesDone":22,"GoalPeriod":20,"Color":"#00FF00"},{"MachineId":19,"NbPiecesDone":4,"GoalPeriod":20,"Color":"#FF0000"}]}';

var GetMachineStatusByIWP_changePiecesDone = '{"LineDisplay":"your_LINE", "IWPDisplay":"your_IWP","NbPiecesDone": 50,"GoalPeriod": 100,"GoalNow": 45,"List":[{"MachineId":18,"NbPiecesDone":2,"GoalPeriod":20,"Color":"#00FF00"},{"MachineId":19,"NbPiecesDone":44,"GoalPeriod":20,"Color":"#FF0000"}]}';

var _order_GetMachineStatusByIWP = 1;
$.mockjax({
  url : /^http:\/\/localhost:8082\/GetMachineStatusByIWP\?LineId=18\&IwpId=18\&Begin=.*/, 
  responseTime : 2000,
  response : function (settings) {
    if ( _order_GetMachineStatusByIWP == 1 ) {
      this.responseText = GetMachineStatusByIWP;
      _order_GetMachineStatusByIWP = 2;
    } else {
      this.responseText = GetMachineStatusByIWP_changePiecesDone;
      _order_GetMachineStatusByIWP = 1;
    }
  }
});
