// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

var WorkSelectionJSON1 = {
  'WorkInfoGroup': [ // ORDERED list given by web service
    {
      'Display': 'WorkOrder',
      'Kind': 'WorkOrder',  // Operation, Component, Part...
      'Items': [ // ORDERED list
        {
          'Display': 'WorkOrder_1',
          'Kind': 'WorkOrder',
          'Id': 1 // To use in details
          // Here, probably add recent / old / range / modifiable / obsolete...
        },
        {
          'Display': 'WorkOrder_2',
          'Kind': 'WorkOrder',
          'Id': 2
        },
        {
          'Display': 'WorkOrder_3',
          'Kind': 'WorkOrder',
          'Id': 3
        },
        {
          'Display': 'WorkOrder_4',
          'Kind': 'WorkOrder',
          'Id': 4
        },
        {
          'Display': 'WorkOrder_5',
          'Kind': 'WorkOrder',
          'Id': 5
        },
        {
          'Display': 'WorkOrder_6 to hide at start',
          'Kind': 'WorkOrder',
          'Id': 6
        }
      ]
    },
    {
      'Display': 'Component',
      'Kind': 'Component',
      'Items': [ // ORDERED list
        {
          'Display': 'Comp_1',
          'Kind': 'Component',
          'Id': 1 // To use in details
          // Here, probably add recent / old / range / modifiable...
        },
        {
          'Display': 'C2_searchstring',
          'Kind': 'Component',
          'Id': 2
        },
        {
          'Display': 'Comp-3',
          'Kind': 'Component',
          'Id': 3
        }
      ]
    }
  ]
};

var WorkSelectionJSON2 = {
  'WorkInfoGroup': [ // ORDERED list
    {
      'Display': 'Operation',
      'Kind': 'Operation',  // Operation, Component, Part...
      'Items': [ // ORDERED list
        {
          'Display': 'myoperation_1',
          'Kind': 'operation',
          'Id': 1 // To use in details
          // Here, probably add recent / old / range / modifiable...
        },
        {
          'Display': 'myoperation_22',
          'Kind': 'Operation',
          'Id': 2
        }
      ]
    }
  ]
};

var WorkSelectionJSON3 = WorkSelectionJSON1;

var WorkSelectionJSON_parent_comp_2 = WorkSelectionJSON2;

// Search : grammaire à définir
// string = recherche textuelle (on id, display, ...) or key:<value>
// where key: id, kind, parent, child, revision, machine, detected_since
// 
// id:
//
// kind:component => search only in components
// kind:home => return only the objects
// kind:(home|project|job|workorder|component|part|operation|sequence|intermediateworkpiece)
// 
// parent:<kind>:<id>
// child:<kind>:<id>
//
// revision:latest, revision:-1
// 
// machine:(machine id or machine display): return only the items that were detected on a specific machine
//
// detected_since:date/time
//
// Probably more later.
// Extract from PivotalTracker of possible syntaxes:
/* Possible but not implemented yet
created_on:11/16/2012
updated_since:"Nov 16 2012"
accepted_before:11/16/2012
created:today
updated:-1w
accepted:-2weeks..today
*/

$.mockjax({
  url: 'http://localhost:8082/WorkSelection',
  responseTime: 1000,
  responseText: WorkSelectionJSON1
});

$.mockjax({
  url: 'http://localhost:8082/WorkSelection?Search=Kind:Operation',
  responseTime: 1000,
  responseText: WorkSelectionJSON2
});

$.mockjax({
  url: 'http://localhost:8082/WorkSelection?Search=Kind:home',
  responseTime: 1000,
  responseText: WorkSelectionJSON3
});

$.mockjax({
  url: 'http://localhost:8082/WorkSelection?Search=parent:Component:2',
  responseTime: 1000,
  responseText: WorkSelectionJSON_parent_comp_2
});

$.mockjax({
  url: 'http://localhost:8082/WorkSelection?Search=504',
  status: 504,
  responseTime: 1000
});
