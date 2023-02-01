// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

/*
NEVER -> propose creation
var WorkStructureJSON_missingKind = {
  'ErrorMessage': 'Missing work kind',
  'Status': 'WrongRequestParameter'
};*/
var WorkStructureJSON_badKind = {
  'ErrorMessage': 'Bad work kind',
  'Status': 'WrongRequestParameter'
};

//If no kind is given, return all of them
var WorkStructureJSON_all = [
  {
    'Kind': 'WorkOrder',
    'Actions': [
      'Create'
      //...
    ]
    // ...
  },
  {
    'Kind': 'Project',
    'Actions': [
      'Create'
      //...
    ]
    // ...
  },
  {
    'Kind': 'Component',
    'Actions': [
      //...
    ]
    // ...
  },
  {
    'Kind': 'Operation',
    'Actions': [
      //...
    ]
    // ...
  }
];

/* CREATIONS can be done in :
- add child 
- add sibling
- clone
- from scratch, see WorkStructureJSON_all
 */
// Action Availability
////////// 1st version : DISPLAY ONLY = ready 2020 09 - waiting for web service
////////// 2nd version : Create, Duplicate, CreateChild
// + readonly=false = single update
////////// 3rd version : Merge, LinkParent, LinkChild
////////// 4th version : ReorderChildren
////////// After revisions are ready : NewRevision

var WorkStructureJSON_op = [{
  'Kind': 'Operation',
  'Actions': [ // == Buttons to display allowed actions
    // * Creation new -> see Create
    'Create', // To use when a structure can be created from scratch, not from a parent (Part / Work order / ...) will call WorkNew

    // * Global save -> removed. Individual field update will be used instead. - no "save" needed
    // See ReadOnly

    'NewRevision', // for objects that support a new revision (not yet, for the future database structure) == Similar to Save - A web service should maybe be created

    'Duplicate', // will call WorkNew == pre-filled NEW

    'Merge', // drag&drop today in Operation Explorer

    'LinkParent', // To link an existing parent. (drag&drop today)
    'LinkChild',  // To link an existing child. (drag&drop today)
    'CreateChild', // To create a new child that will be linked to this work info (correspond to right click / Link with new...)
    //'CreateParent', // NO ! 

    'ReorderChildren' // To allow to re-order the items for the same parent - later
  ],

  // Kind of parent when a new parent creation is allowed - empty for workorder
  'ParentKind': 'Project',
  // Kind of child when a new child creation is allowed - empty for process
  'ChildKind': 'Operation',

  'Properties': [
    {
      'Key': 'Name',
      'Label': 'Name',
      'Format': 'String',
      'Required': true, // Can't be empty (better than Optional: false, since false may be considered as a default value)
      'ReadOnly': true // No modification allowed -> use 'Duplicate' or 'NewRevision' to create a new one
    },
    {
      'Key': 'Code',
      'Label': 'Code',
      'Format': 'String',
      'Default': 'a code default to test',
      'Limits': {
        'Maxsize': 16 // Max number of chars for strings or URL
        // no default means ''
      }
    },
    {
      'Key': 'Link',
      'Label': 'Doc link',
      'Format': 'URL'
      //'Default': 'C://Programmes/PULSE'
      // HERE, we can add others limits : local, distant... To be defined LATER
    },
    {
      'Key': 'IntValue',
      'Label': 'Estimated int value',
      'Format': 'Integer',
      'Default': 10,
      'Limits': {
        'Min': 0,
        'Max': 12
      }
    },
    {
      'Key': 'Duration',
      'Label': 'Estimated duration with seconds',
      'Format': 'Duration',
      'Limits': { // Later... Start without
        'Min': 0, // in seconds
        //'Max': 600, // in seconds - default = 24h BUT it can be MORE ! Manage many days
        'Step': 'seconds',  // OR 'minutes' // For the moment, and by default, only seconds
        'Nullable': true // Important ! To allow checkbox to remove value
        // WARNING ! Value in seconds !
      }
    },
    {
      'Key': 'Type',
      'Label': 'Type',
      'Format': 'Enum',
      'Required': true,
      // 'Default': 'T1', = automatic
      'Limits': {
        'Enum': ['T1', 'T2', 'T3'],
        // No possible nullable ? Add 'no value' in enum if needed (= 1st ? )
        // Attention ! Si 'Required': true, then select by default the first one
      }
    },
    {
      'Key': 'Weight',
      'Label': 'Weight', // To write on the left of edit
      'Format': 'Float',
      'Unit': 'kg', // To write on the right of edit
      'Limits': {
        // To define
      }
    },
    {
      'Key': 'IsBeautiful',
      'Label': 'IsBeautiful',
      'Format': 'Boolean',
      'Default': true
    },
    { // To log silent erreur
      'Key': 'Table',
      'Label': 'Unknown format',
      'Format': 'Table', // To use later for field and stamping details

      // = sample of "not defined yet" property
    }
  ]
}];

var WorkStructureJSON_comp = [{
  'Kind': 'Component',
  'Actions': [],
  'Properties': [
    {
      'Key': 'Name',
      'Label': 'Name',
      'Format': 'String'
    },
    {
      'Key': 'Code',
      'Label': 'Code',
      'Format': 'String'
    },
    {
      'Key': 'Duration',
      'Label': 'Duration without days',
      'Format': 'Duration',
      'Limits': { // Later... Start without
        'Min': 0, // in seconds
        'Max': 600, // in seconds - default = 24h BUT it can be MORE ! Manage many days
        'Step': 'seconds',  // OR 'minutes' // For the moment, and by default, only seconds
      }
    },
  ]
}];

var WorkStructureJSON_proj = [{
  'Kind': 'Project',
  'Actions': [],
  'Properties': [
    // To fill for tests
  ]
}];

var WorkStructureJSON_part = [{
  'Kind': 'Part',
  'Actions': [],
  'Properties': [
    // To fill for tests
  ]
}];

var WorkStructureJSON_WorkOrder = [{
  'Kind': 'WorkOrder',
  'Actions': [],
  'Properties': [
    // To fill for tests
  ]
}];

// REQUESTS 

// ERRORS
$.mockjax({
  url: 'http://localhost:8082/WorkStructure', // = Work/Structure
  responseTime: 1000,
  responseText: WorkStructureJSON_all
});

$.mockjax({
  url: 'http://localhost:8082/WorkStructure?Kind=pipo',
  responseTime: 1000,
  responseText: WorkStructureJSON_badKind
});

$.mockjax({
  url: 'http://localhost:8082/WorkStructure?Kind=504',
  status: 504,
  responseTime: 1000
});


// operation structure
$.mockjax({
  url: 'http://localhost:8082/WorkStructure?Kind=Operation',
  responseTime: 1000,
  responseText: WorkStructureJSON_op
});

$.mockjax({
  url: 'http://localhost:8082/WorkStructure?Kind=Component',
  responseTime: 1000,
  responseText: WorkStructureJSON_comp
});

$.mockjax({
  url: 'http://localhost:8082/WorkStructure?Kind=Project',
  responseTime: 1000,
  responseText: WorkStructureJSON_proj
});

$.mockjax({
  url: 'http://localhost:8082/WorkStructure?Kind=Part',
  responseTime: 1000,
  responseText: WorkStructureJSON_part
});

$.mockjax({
  url: 'http://localhost:8082/WorkStructure?Kind=WorkOrder',
  responseTime: 1000,
  responseText: WorkStructureJSON_WorkOrder
});
