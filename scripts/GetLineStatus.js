// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var result1 = {};
result1.LineName = 'Cover 1613';
result1.Begin = '2015-02-25T07:00:00Z';
result1.Deadline = '2015-02-25T07:00:00Z';
result1.LineStatus = 'overdue';
result1.IntermediateWorkPieceStatus = new Array();
result1.IntermediateWorkPieceStatus[0] = { Id: 10, Display: 'OP 10', GlobalExpected: 4500, GlobalCompleted: 4500, ShiftExpected: 300, ShiftCompleted: 300 };
result1.IntermediateWorkPieceStatus[1] = { Id: 20, Display: 'OP 20', GlobalExpected: 4500, GlobalCompleted: 4500, ShiftExpected: 300, ShiftCompleted: 300 };
result1.IntermediateWorkPieceStatus[2] = { Id: 30, Display: 'OP 30', GlobalExpected: 4500, GlobalCompleted: 4500, ShiftExpected: 300, ShiftCompleted: 300 };
result1.IntermediateWorkPieceStatus[3] = { Id: 40, Display: 'OP 40', GlobalExpected: 4500, GlobalCompleted: 4500, ShiftExpected: 300, ShiftCompleted: 200 };
result1.IntermediateWorkPieceStatus[4] = { Id: 50, Display: 'OP 50', GlobalExpected: 4500, GlobalCompleted: 4000, ShiftExpected: 300, ShiftCompleted: 300 };
result1.IntermediateWorkPieceStatus[5] = { Id: 60, Display: 'OP 60', GlobalExpected: 4500, GlobalCompleted: 4000, ShiftExpected: 300, ShiftCompleted: 250 };
result1.IntermediateWorkPieceStatus[6] = { Id: 70, Display: 'OP 70', GlobalExpected: 4500, GlobalCompleted: 4500, ShiftExpected: 300, ShiftCompleted: 300 };
result1.IntermediateWorkPieceStatus[7] = { Id: 80, Display: 'OP 80', GlobalExpected: 4500, GlobalCompleted: 4500, ShiftExpected: 300, ShiftCompleted: 300 };
result1.IntermediateWorkPieceStatus[8] = { Id: 90, Display: 'OP 90', GlobalExpected: 4500, GlobalCompleted: 4500, ShiftExpected: 300, ShiftCompleted: 300 };
result1.IntermediateWorkPieceStatus[9] = { Id: 100, Display: 'OP 100', GlobalExpected: 4500, GlobalCompleted: 4500, ShiftExpected: 300, ShiftCompleted: 200 };
result1.IntermediateWorkPieceStatus[10] = { Id: 110, Display: 'OP 110', GlobalExpected: 4500, GlobalCompleted: 4000, ShiftExpected: 300, ShiftCompleted: 200 };
result1.IntermediateWorkPieceStatus[11] = { Id: 120, Display: 'OP 120', GlobalExpected: 4500, GlobalCompleted: 4500, ShiftExpected: 300, ShiftCompleted: 300 };


var result2 = {};
result2.LineName = 'Ring';
result2.Begin = '2015-02-25T07:00:00Z';
result2.Deadline = '2015-02-25T07:00:00Z';
result2.LineStatus = 'ontime';
result2.IntermediateWorkPieceStatus = new Array();
result2.IntermediateWorkPieceStatus[0] = { Id: 10, Display: 'Operation 110', GlobalExpected: 4500, GlobalCompleted: 4500, ShiftExpected: 300, ShiftCompleted: 300 };
result2.IntermediateWorkPieceStatus[1] = { Id: 20, Display: 'OP 20', GlobalExpected: 4500, GlobalCompleted: 4500, ShiftExpected: 300, ShiftCompleted: 250 };
result2.IntermediateWorkPieceStatus[2] = { Id: 30, Display: 'OP 30', GlobalExpected: 4500, GlobalCompleted: 4500, ShiftExpected: 300, ShiftCompleted: 300 };
result2.IntermediateWorkPieceStatus[3] = { Id: 40, Display: 'OP 40', GlobalExpected: 4500, GlobalCompleted: 4500, ShiftExpected: 300, ShiftCompleted: 200 };
result2.IntermediateWorkPieceStatus[4] = { Id: 50, Display: 'OP Very Long text', GlobalExpected: 4500, GlobalCompleted: 4500, ShiftExpected: 300, ShiftCompleted: 300 };


var result3 = {};
result3.ErrorMessage = 'No production line with id 4578';
result3.Status = 'PERMANENT';


$.mockjax({
  url: 'http://localhost:8082/GetLineStatus?LineId=11',
  responseTime: 1000,
  responseText: JSON.stringify(result1)
});

$.mockjax({
  url: 'http://localhost:8082/GetLineStatus?LineId=22',
  responseTime: 1000,
  responseText: JSON.stringify(result2)
});

$.mockjax({
  url: 'http://localhost:8082/GetLineStatus?LineId=88',
  responseTime: 1000,
  responseText: JSON.stringify(result3),
  status: 200
});

var counter = 0;
$.mockjax({
  url: 'http://localhost:8082/GetLineStatus?LineId=99',
  responseTime: 1000,
  response: function (settings) {
    if ((counter % 4) < 2) {
      this.responseText = JSON.stringify(result2);
    } else {
      this.status = 500;
      this.statusText = 'Internal Error';
    }
    counter++;
  }

});
