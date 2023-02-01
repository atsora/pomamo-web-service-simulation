// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// WARNING ! Use same structure as defined in WorkStructure !

var WorkReadJSON_missingKind = {
  'ErrorMessage': 'Missing work kind',
  'Status': 'WrongRequestParameter'
};
var WorkReadJSON_badKind = {
  'ErrorMessage': 'Bad work kind',
  'Status': 'WrongRequestParameter'
};


var WorkReadJSON_op1 = {
  'Id': 1,
  'Kind': 'Operation',
  'Display': 'Op_1',
  // Revision will not be used in version 9.0
  // Maybe restore later
  /*'AvailableRevisions': [ // Can be added later
    {
      'Number': 1
    },
    {
      'Number': 2
    }
  ],
  'Revision': {
    'Number': 2,
    'DateTime': '2020-02-15T20:00:00Z',
    'Description': 'Revision description',
    'Default': true
  },*/
  'Parents': [ // Affichage selon order si défini, sinon selon l'ordre ci dessous
    {
      'Id': 2,
      'Kind': 'Component',
      'Display': 'Comp_2'
    },
    {
      'Id': 4,
      'Kind': 'Part',
      'Display': 'Part_4'
    }
  ],
  'Children': [ // Affichage selon order si défini, sinon selon l'ordre ci dessous
    {
      'Id': 67,
      'Kind': 'Sequence',
      'Display': 'Seq_67',
      'Order': 12
    },
    {
      'Id': 66,
      'Kind': 'Sequence',
      'Display': 'Seq_66 bottom for vertical adaptation',
      'Order': 23
    },
    {
      'Id': 68,
      'Kind': 'Sequence',
      'Display': 'Seq_68',
      'Order': 5
    },
    {
      'Id': 69,
      'Kind': 'Sequence',
      'Display': 'Seq_69 on top with long text to check what happens',
      'Order': 3
    }
  ],
  'Properties': [
    {
      'Key': 'Name',
      'Value': 'my name'
    },
    {
      'Key': 'Code',
      'Value': 'my code'
    },
    // No link is sent (not defined) - possible
    // Default will be used to fill at creation
    // If nullable, nothing can be sent
    {
      'Key': 'Link',
      'Value': 'a URL to see what happens'
    },
    {
      'Key': 'IntValue',
      'Value': 54
    },
    {
      'Key': 'Duration',
      'Value': 540366 // in seconds == integer ! 6d 06:06:06
    },
    {
      'Key': 'Type',
      'Value': 'T2'
    },
    {
      'Key': 'Weight',
      'Value': 1.5
    },
    {
      'Key': 'IsBeautiful',
      'Value': false,
    }
  ]
};


// All values are un-set -> to check display
var WorkReadJSON_op_not_set = {
  'Id': 2,
  'Kind': 'Operation',
  'Display': 'Op_2',
  /*'AvailableRevisions': [ // Can be added later
    {
      'Number': 1
    }
  ],
  'Revision': {
    'Number': 1,
    'DateTime': '2020-02-15T20:00:00Z',
    'Description': 'Revision description',
    'Default': true
  },*/
  'Parents': [],
  'Children': [],
  'Properties': []
};

var WorkReadJSON_comp2 = {
  'Id': 2,
  'Kind': 'Component',
  'Display': 'Comp_2',
  /*'AvailableRevisions': [ // Can be added later
    {
      'Number': 1
    }
  ],
  'Revision': {
    'Number': 1,
    'DateTime': '2020-02-15T20:00:00Z',
    'Description': 'Revision description',
    'Default': true
  },*/
  'Properties': [
    {
      'Key': 'Name',
      'Value': 'C2_name'
    },
    {
      'Key': 'Code',
      'Value': 'CodeComp2_R1'
    }
  ]
};

var WorkReadJSON_proj = {
  'Id': 3,
  'Kind': 'Project',
  'Display': 'Proj_3'
  // To fill
};
var WorkReadJSON_part = {
  'Id': 4,
  'Kind': 'Part',
  'Display': 'Part_4'
  // To fill
};
var WorkReadJSON_workorder = {
  'Id': 5,
  'Kind': 'WorkOrder',
  'Display': 'W_O_5'
  // To fill
};

// REQUESTS 

// ERRORS
$.mockjax({
  url: 'http://localhost:8082/WorkRead',
  responseTime: 1000,
  responseText: WorkReadJSON_missingKind
});

$.mockjax({
  url: 'http://localhost:8082/WorkRead?Kind=pipo',
  responseTime: 1000,
  responseText: WorkReadJSON_badKind // and no id
});

$.mockjax({
  url: 'http://localhost:8082/WorkRead?Kind=Operation&Id=504',
  status: 504,
  responseTime: 1000
});

// OK
$.mockjax({
  url: 'http://localhost:8082/WorkRead?Kind=Operation&Id=1',
  responseTime: 1000,
  responseText: WorkReadJSON_op1
});

$.mockjax({
  url: 'http://localhost:8082/WorkRead?Kind=Operation&Id=2',
  responseTime: 1000,
  responseText: WorkReadJSON_op_not_set
});
$.mockjax({
  url: 'http://localhost:8082/WorkRead?Kind=Component&Id=2',
  responseTime: 1000,
  responseText: WorkReadJSON_comp2
});
$.mockjax({
  url: 'http://localhost:8082/WorkRead?Kind=Project&Id=*',
  responseTime: 1000,
  responseText: WorkReadJSON_proj
});
$.mockjax({
  url: 'http://localhost:8082/WorkRead?Kind=Part&Id=*',
  responseTime: 1000,
  responseText: WorkReadJSON_part
});
$.mockjax({
  url: 'http://localhost:8082/WorkRead?Kind=WorkOrder&Id=*',
  responseTime: 1000,
  responseText: WorkReadJSON_workorder
});

