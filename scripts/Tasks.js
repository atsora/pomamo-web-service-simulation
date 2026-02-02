// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock data for Tasks GraphQL service

// Sample task types
var mockTaskTypes = [
  'Quality',
  'Maintenance',
  'ShiftChangeMessage',
  'ShiftChangeAck',
  'DocAck'
];

// Sample roles
var mockTaskRoles = [
  'Operator',
  'Maintenance',
  'Quality',
  'Supervisor'
];

// Sample dimension units
var mockDimensionUnits = [
  'Mm',
  'Micro',
  'Inch'
];

// Sample maintenance part references
var mockMaintenancePartReferences = [
  'PART-001',
  'PART-002',
  'BEARING-SK-2205',
  'FILTER-AIR-500',
  'OIL-HYD-ISO46'
];

// Sample machine groups
var mockMachineGroups = [
  {
    'name': 'Production',
    'groups': [
      {
        'id': 'prod-line-1',
        'name': 'Production Line 1',
        'subGroups': [
          {
            'id': 'machine-18',
            'name': 'Machine 18',
            'subGroups': null
          },
          {
            'id': 'machine-20',
            'name': 'Machine 20',
            'subGroups': null
          }
        ]
      },
      {
        'id': 'prod-line-2',
        'name': 'Production Line 2',
        'subGroups': null
      }
    ]
  },
  {
    'name': 'Maintenance',
    'groups': [
      {
        'id': 'maint-zone-a',
        'name': 'Maintenance Zone A',
        'subGroups': null
      }
    ]
  }
];

// Sample task templates
var mockTaskTemplates = [
  {
    '__typename': 'ITaskTemplateQuality',
    'id': '1',
    'state': 'Active',
    'name': 'Quality Check - Dimensions',
    'description': 'Check critical dimensions every 50 parts',
    'machineGroup': 'prod-line-1',
    'frequency': {
      '__typename': 'NumberOfParts',
      'number': 50
    },
    'role': 'Quality',
    'commentRequirement': 'Optional',
    'dimensions': [
      {
        'id': 'dim-1',
        'name': 'Diameter',
        'value': 25.0,
        'unit': 'Mm',
        'tolerancePlus': 0.05,
        'toleranceMinus': 0.05,
        'numberOfParts': 3,
        'description': 'Main shaft diameter'
      },
      {
        'id': 'dim-2',
        'name': 'Length',
        'value': 100.0,
        'unit': 'Mm',
        'tolerancePlus': 0.1,
        'toleranceMinus': 0.1,
        'numberOfParts': 2,
        'description': 'Overall length'
      }
    ],
    'docs': [
      {
        'id': 'doc-1',
        'path': '/docs/quality/dimension-check.pdf',
        'version': 2
      }
    ]
  },
  {
    '__typename': 'ITaskTemplateMaintenance',
    'id': '2',
    'state': 'Active',
    'name': 'Daily Machine Inspection',
    'description': 'Check oil levels, filters, and general condition',
    'machineGroup': 'prod-line-1',
    'frequency': {
      '__typename': 'FixedDuration',
      'seconds': 86400
    },
    'role': 'Maintenance',
    'commentRequirement': 'Mandatory',
    'partReference': 'OIL-HYD-ISO46'
  },
  {
    '__typename': 'ITaskTemplateShiftChangeMessage',
    'id': '3',
    'state': 'Active',
    'name': 'End of Shift Report',
    'description': 'Leave a message for the next shift operator',
    'machineGroup': 'prod-line-1',
    'frequency': {
      '__typename': 'ShiftEnd',
      'seconds': 600
    },
    'role': 'Operator',
    'docs': []
  },
  {
    '__typename': 'ITaskTemplateShiftChangeAck',
    'id': '4',
    'state': 'Active',
    'name': 'Start of Shift Acknowledgement',
    'description': 'Acknowledge previous shift message',
    'machineGroup': 'prod-line-1',
    'frequency': {
      '__typename': 'ShiftStart',
      'seconds': 300
    },
    'role': 'Operator'
  },
  {
    '__typename': 'ITaskTemplateDocAck',
    'id': '5',
    'state': 'Draft',
    'name': 'New Procedure Acknowledgement',
    'description': 'Acknowledge reading of new safety procedure',
    'machineGroup': 'prod-line-1',
    'frequency': {
      '__typename': 'FixedTime',
      'time': '08:00:00',
      'weekDay': ['Monday']
    },
    'role': 'Operator',
    'doc': {
      'id': 'doc-2',
      'path': '/docs/safety/new-procedure-2025.pdf',
      'version': 1
    }
  }
];

// Sample task instances
var mockTaskInstances = [
  {
    'id': 'inst-1',
    'machineId': '18',
    'taskTemplate': mockTaskTemplates[0],
    'start': '2026-01-20T09:00:00',
    'end': '2026-01-20T10:00:00',
    'result': {
      '__typename': 'ITaskInstanceResultQuality',
      'dateTime': '2026-01-19T16:30:00',
      'completion': 'Validated',
      'comment': 'All measurements within tolerance',
      'measures': [
        {
          'dimensionId': 'dim-1',
          'value': 25.02
        },
        {
          'dimensionId': 'dim-2',
          'value': 100.05
        }
      ]
    }
  },
  {
    'id': 'inst-2',
    'machineId': '18',
    'taskTemplate': mockTaskTemplates[1],
    'start': '2025-11-13T08:00:00',
    'end': '2025-11-13T09:00:00',
    'result': {
      '__typename': 'ITaskInstanceResultMaintenance',
      'dateTime': '2025-11-13T08:15:00',
      'completion': 'Validated',
      'comment': 'Oil level OK, filter clean'
    }
  },
  {
    'id': 'inst-3',
    'machineId': '18',
    'taskTemplate': mockTaskTemplates[0],
    'start': '2026-01-20T09:00:00',
    'end': '2026-01-20T17:00:00',
    'result': null
  }
  ,
  // Past instances (no result)
  {
    'id': 'inst-4',
    'machineId': '21',
    'taskTemplate': mockTaskTemplates[0],
    'start': '2026-01-20T08:00:00',
    'end': '2026-01-20T09:00:00',
    'result': null
  },
  {
    'id': 'inst-5',
    'machineId': '22',
    'taskTemplate': mockTaskTemplates[1],
    'start': '2026-01-20T10:00:00',
    'end': '2026-01-20T11:00:00',
    'result': null
  },
  {
    'id': 'inst-6',
    'machineId': '18',
    'taskTemplate': mockTaskTemplates[2],
    'start': '2026-01-20T09:00:00',
    'end': '2026-01-20T17:00:00',
    'result': null
  },
  // Present-day instances (around current date)
  {
    'id': 'inst-7',
    'machineId': '18',
    'taskTemplate': mockTaskTemplates[0],
    'start': '2026-01-20T09:00:00',
    'end': '2026-01-20T17:00:00',
    'result': null
  },
  {
    'id': 'inst-8',
    'machineId': '20',
    'taskTemplate': mockTaskTemplates[3],
    'start': '2025-11-30T20:00:00',
    'end': '2025-12-16T04:00:00',
    'result': null
  },
  {
    'id': 'inst-9',
    'machineId': '18',
    'taskTemplate': mockTaskTemplates[1],
    'start': '2026-01-21T18:00:00',
    'end': '2026-01-21T19:00:00',
    'result': null
  },
  // Future instances (no result yet)
  {
    'id': 'inst-10',
    'machineId': '18',
    'taskTemplate': mockTaskTemplates[0],
    'start': '2026-01-10T08:00:00',
    'end': '2026-01-10T16:00:00',
    'result': null
  },
  {
    'id': 'inst-11',
    'machineId': '18',
    'taskTemplate': mockTaskTemplates[4],
    'start': '2026-01-22T09:00:00',
    'end': '2026-01-22T17:00:00',
    'result': null
  }
];

// GraphQL endpoint mock
var graphqlEndpoint = 'http://localhost:8080/graphql';

// Helper function to parse GraphQL query
function parseGraphQLRequest(data) {
  try {
    var parsed = typeof data === 'string' ? JSON.parse(data) : data;
    return parsed;
  } catch (e) {
    return null;
  }
}

// Helper function to match query/mutation
function getOperationName(query) {
  // Extract operation name from query string
  var match = query.match(/(?:query|mutation)\s+(\w+)/);
  if (match) return match[1];

  // Try to match field name at the start
  match = query.match(/{\s*(\w+)/);
  return match ? match[1] : null;
}

function getTaskInstanceForMachine(machineId) {
  var candidates = mockTaskInstances.filter(function (inst) {
    // Only return instances that are not yet validated
    return inst.machineId === String(machineId) && inst.result === null;
  });

  if (!candidates.length) {
    return null;
  }

  var now = new Date();

  // 1) Prefer an in-progress task
  for (var i = 0; i < candidates.length; i++) {
    var s = new Date(candidates[i].start);
    var e = new Date(candidates[i].end);
    if (!isNaN(s.getTime()) && !isNaN(e.getTime()) && s.getTime() <= now.getTime() && now.getTime() <= e.getTime()) {
      return candidates[i];
    }
  }

  // 2) Otherwise, pick the next upcoming task
  var next = null;
  for (var j = 0; j < candidates.length; j++) {
    var ss = new Date(candidates[j].start);
    if (!isNaN(ss.getTime()) && ss.getTime() > now.getTime()) {
      if (next === null || ss.getTime() < new Date(next.start).getTime()) {
        next = candidates[j];
      }
    }
  }
  if (next) {
    return next;
  }

  // 3) Fallback: latest past task
  var last = candidates[0];
  for (var k = 1; k < candidates.length; k++) {
    var le = new Date(last.end);
    var ke = new Date(candidates[k].end);
    if (!isNaN(ke.getTime()) && (isNaN(le.getTime()) || ke.getTime() > le.getTime())) {
      last = candidates[k];
    }
  }
  return last;
}

// Mock GraphQL responses
$.mockjax({
  url: graphqlEndpoint,
  type: 'POST',
  response: function (settings) {
    var requestData = parseGraphQLRequest(settings.data);
    if (!requestData) {
      this.responseText = {
        'errors': [{ 'message': 'Invalid request format' }]
      };
      return;
    }

    var query = requestData.query || '';
    var variables = requestData.variables || {};
    var operationName = requestData.operationName || getOperationName(query);

    // Handle different queries
    if (query.includes('taskTypes')) {
      this.responseText = {
        'data': {
          'taskTypes': mockTaskTypes
        }
      };
    }
    else if (query.includes('taskRoles')) {
      this.responseText = {
        'data': {
          'taskRoles': mockTaskRoles
        }
      };
    }
    else if (query.includes('dimensionUnits')) {
      this.responseText = {
        'data': {
          'dimensionUnits': mockDimensionUnits
        }
      };
    }
    else if (query.includes('maintenancePartReferences')) {
      this.responseText = {
        'data': {
          'maintenancePartReferences': mockMaintenancePartReferences
        }
      };
    }
    else if (query.includes('taskMachineGroups')) {
      this.responseText = {
        'data': {
          'taskMachineGroups': mockMachineGroups
        }
      };
    }
    else if (query.includes('taskTemplates') && !query.includes('taskTemplatesByRole')) {
      this.responseText = {
        'data': {
          'taskTemplates': mockTaskTemplates
        }
      };
    }
    else if (query.includes('taskTemplate(')) {
      var templateId = variables.taskTemplateId || '1';
      var template = mockTaskTemplates.find(t => t.id === templateId);
      this.responseText = {
        'data': {
          'taskTemplate': template || null
        }
      };
    }
    else if (query.includes('taskInstanceByMachineId')) {
      var machineId = variables.machineId;
      if (!machineId) {
        var matchMachine = query.match(/machineId\s*:\s*"([^"]+)"/);
        machineId = matchMachine ? matchMachine[1] : null;
      }

      var instance = machineId ? getTaskInstanceForMachine(machineId) : null;
      this.responseText = {
        'data': {
          'taskInstanceByMachineId': instance || null
        }
      };
    }
    else if (query.includes('taskInstance(')) {
      // Supports queries like: { taskInstance(taskInstanceId: "inst-1") { start end taskTemplate { name } } }
      var instanceId = variables.taskInstanceId;
      if (!instanceId) {
        var matchId = query.match(/taskInstance\s*\(\s*taskInstanceId\s*:\s*\"([^\"]+)\"\s*\)/);
        instanceId = matchId ? matchId[1] : 'inst-1';
      }

      var instance = mockTaskInstances.find(inst => inst.id === instanceId);
      this.responseText = {
        'data': {
          'taskInstance': instance || null
        }
      };
    }
    else if (query.includes('taskTemplatesByRole(')) {
      var role = variables.role || 'Operator';
      var filtered = mockTaskTemplates.filter(t => t.role === role);
      this.responseText = {
        'data': {
          'taskTemplatesByRole': filtered
        }
      };
    }
    else if (query.includes('taskTemplatesByRoleGroup')) {
      var role = variables.role || 'Operator';
      var machineGroup = variables.machineGroup || 'prod-line-1';
      var filtered = mockTaskTemplates.filter(t => t.role === role && t.machineGroup === machineGroup);
      this.responseText = {
        'data': {
          'taskTemplatesByRoleGroup': filtered
        }
      };
    }
    else if (query.includes('taskInstancesNext')) {
      var role = variables.role || 'Operator';
      var machineGroup = variables.machineGroup || 'prod-line-1';
      var filtered = mockTaskInstances.filter(inst =>
        inst.result === null &&
        inst.taskTemplate.role === role &&
        inst.taskTemplate.machineGroup === machineGroup
      );
      this.responseText = {
        'data': {
          'taskInstancesNext': filtered
        }
      };
    }
    else if (query.includes('TaskInstanceResultsLast')) {
      var taskTemplateId = variables.taskTemplateId || '1';
      var number = variables.number || 10;
      var filtered = mockTaskInstances
        .filter(inst => inst.taskTemplate.id === taskTemplateId && inst.result !== null)
        .slice(0, number);
      this.responseText = {
        'data': {
          'TaskInstanceResultsLast': filtered
        }
      };
    }
    else if (query.includes('taskInstanceResultsInRange')) {
      var taskTemplateId = variables.taskTemplateId || '1';
      var filtered = mockTaskInstances.filter(inst =>
        inst.taskTemplate.id === taskTemplateId && inst.result !== null
      );
      this.responseText = {
        'data': {
          'taskInstanceResultsInRange': filtered
        }
      };
    }
    // Return all task instances (including those with null result)
    else if (query.includes('allTaskInstances')) {
      // Optional filtering by machineId (keeps backward compatibility)
      var machineId = variables.machineId;
      if (!machineId) {
        var matchMachine = query.match(/allTaskInstances\s*\(\s*machineId\s*:\s*"([^"]+)"\s*\)/);
        machineId = matchMachine ? matchMachine[1] : null;
      }

      var result = mockTaskInstances;
      if (machineId) {
        result = mockTaskInstances.filter(function (inst) {
          return inst.machineId === String(machineId);
        });
      }

      this.responseText = {
        'data': {
          'allTaskInstances': result
        }
      };
    }
    // Handle mutations
    else if (query.includes('createTaskTemplateQuality')) {
      var newTemplate = {
        '__typename': 'ITaskTemplateQuality',
        'id': String(mockTaskTemplates.length + 1),
        'state': 'Active',
        'name': variables.taskTemplate?.name || 'New Quality Task',
        'description': variables.taskTemplate?.description || null,
        'machineGroup': variables.taskTemplate?.machineGroup || 'prod-line-1',
        'frequency': variables.taskTemplate?.frequency || { '__typename': 'NumberOfParts', 'number': 10 },
        'role': variables.taskTemplate?.role || 'Quality',
        'commentRequirement': variables.taskTemplate?.commentRequirement || 'Optional',
        'dimensions': variables.taskTemplate?.dimensions || [],
        'docs': []
      };
      this.responseText = {
        'data': {
          'createTaskTemplateQuality': newTemplate
        }
      };
    }
    else if (query.includes('createTaskTemplateMaintenance')) {
      var newTemplate = {
        '__typename': 'ITaskTemplateMaintenance',
        'id': String(mockTaskTemplates.length + 1),
        'state': 'Active',
        'name': variables.taskTemplate?.name || 'New Maintenance Task',
        'description': variables.taskTemplate?.description || null,
        'machineGroup': variables.taskTemplate?.machineGroup || 'prod-line-1',
        'frequency': variables.taskTemplate?.frequency || { '__typename': 'FixedDuration', 'seconds': 86400 },
        'role': variables.taskTemplate?.role || 'Maintenance',
        'commentRequirement': variables.taskTemplate?.commentRequirement || 'Optional',
        'partReference': variables.taskTemplate?.partReference || null
      };
      this.responseText = {
        'data': {
          'createTaskTemplateMaintenance': newTemplate
        }
      };
    }
    else if (query.includes('createTaskTemplateDocAck')) {
      var newTemplate = {
        '__typename': 'ITaskTemplateDocAck',
        'id': String(mockTaskTemplates.length + 1),
        'state': 'Active',
        'name': variables.taskTemplate?.name || 'New Doc Ack Task',
        'description': variables.taskTemplate?.description || null,
        'machineGroup': variables.taskTemplate?.machineGroup || 'prod-line-1',
        'frequency': variables.taskTemplate?.frequency || { '__typename': 'FixedTime', 'time': '08:00:00', 'weekDay': ['Monday'] },
        'role': variables.taskTemplate?.role || 'Operator',
        'doc': {
          'id': variables.taskTemplate?.docId || 'doc-new',
          'path': '/docs/new-doc.pdf',
          'version': 1
        }
      };
      this.responseText = {
        'data': {
          'createTaskTemplateDocAck': newTemplate
        }
      };
    }
    else if (query.includes('createTaskTemplateShiftChangeMessage')) {
      var newTemplate = {
        '__typename': 'ITaskTemplateShiftChangeMessage',
        'id': String(mockTaskTemplates.length + 1),
        'state': 'Active',
        'name': variables.taskTemplate?.name || 'New Shift Change Message',
        'description': variables.taskTemplate?.description || null,
        'machineGroup': variables.taskTemplate?.machineGroup || 'prod-line-1',
        'frequency': variables.taskTemplate?.frequency || { '__typename': 'ShiftEnd', 'seconds': 600 },
        'role': variables.taskTemplate?.role || 'Operator',
        'docs': []
      };
      this.responseText = {
        'data': {
          'createTaskTemplateShiftChangeMessage': newTemplate
        }
      };
    }
    else if (query.includes('createTaskTemplateShiftChangeAck')) {
      var newTemplate = {
        '__typename': 'ITaskTemplateShiftChangeAck',
        'id': String(mockTaskTemplates.length + 1),
        'state': 'Active',
        'name': variables.taskTemplate?.name || 'New Shift Change Ack',
        'description': variables.taskTemplate?.description || null,
        'machineGroup': variables.taskTemplate?.machineGroup || 'prod-line-1',
        'frequency': variables.taskTemplate?.frequency || { '__typename': 'ShiftStart', 'seconds': 300 },
        'role': variables.taskTemplate?.role || 'Operator'
      };
      this.responseText = {
        'data': {
          'createTaskTemplateShiftChangeAck': newTemplate
        }
      };
    }
    else if (query.includes('editTaskTemplateQuality') ||
      query.includes('editTaskTemplateMaintenance') ||
      query.includes('editTaskTemplateDocAck') ||
      query.includes('editTaskTemplateShiftChangeMessage') ||
      query.includes('editTaskTemplateShiftChangeAck')) {
      var id = variables.taskTemplate?.id || '1';
      var template = mockTaskTemplates.find(t => t.id === id);
      if (template) {
        // Merge updates
        var updated = Object.assign({}, template, variables.taskTemplate);
        var mutationName = query.match(/(editTaskTemplate\w+)/)?.[1] || 'editTaskTemplate';
        var response = {};
        response[mutationName] = updated;
        this.responseText = {
          'data': response
        };
      } else {
        this.responseText = {
          'errors': [{ 'message': 'Task template not found' }]
        };
      }
    }
    else if (query.includes('validateTaskInstance')) {
      var instanceId = variables.validation?.id || 'inst-3';
      var instance = mockTaskInstances.find(inst => inst.id === instanceId);
      if (instance) {
        // Create result based on task template type
        var result = {
          'dateTime': new Date().toISOString(),
          'completion': variables.validation?.completion || 'Validated'
        };

        if (instance.taskTemplate.__typename === 'ITaskTemplateQuality') {
          result.__typename = 'ITaskInstanceResultQuality';
          result.comment = variables.validation?.comment || null;
          result.measures = variables.validation?.measures || [];
        } else if (instance.taskTemplate.__typename === 'ITaskTemplateMaintenance') {
          result.__typename = 'ITaskInstanceResultMaintenance';
          result.comment = variables.validation?.comment || null;
        } else if (instance.taskTemplate.__typename === 'ITaskTemplateShiftChangeMessage') {
          result.__typename = 'ITaskInstanceResultShiftChange';
          result.comment = variables.validation?.comment || 'Shift change message';
        } else if (instance.taskTemplate.__typename === 'ITaskTemplateShiftChangeAck') {
          result.__typename = 'ITaskInstanceResultShiftChangeAck';
        } else if (instance.taskTemplate.__typename === 'ITaskTemplateDocAck') {
          result.__typename = 'ITaskInstanceResultDocAck';
        }

        instance.result = result;
        this.responseText = {
          'data': {
            'validateTaskInstance': instance
          }
        };
      } else {
        this.responseText = {
          'errors': [{ 'message': 'Task instance not found' }]
        };
      }
    }
    else if (query.includes('correctTaskInstanceValidation')) {
      var instanceId = variables.validation?.id || 'inst-1';
      var instance = mockTaskInstances.find(inst => inst.id === instanceId);
      if (instance && instance.result) {
        // Update existing result
        instance.result.dateTime = new Date().toISOString();
        instance.result.completion = variables.validation?.completion || instance.result.completion;
        if (variables.validation?.comment) {
          instance.result.comment = variables.validation.comment;
        }
        if (variables.validation?.measures) {
          instance.result.measures = variables.validation.measures;
        }
        this.responseText = {
          'data': {
            'correctTaskInstanceValidation': instance
          }
        };
      } else {
        this.responseText = {
          'errors': [{ 'message': 'Task instance not found or not yet validated' }]
        };
      }
    }
    else if (query.includes('addTaskTemplateDocument')) {
      var templateId = variables.taskTemplateId || '1';
      var docId = variables.docId || 'doc-new';
      var template = mockTaskTemplates.find(t => t.id === templateId);
      if (template && template.docs) {
        var newDoc = {
          'id': docId,
          'path': '/docs/added-document.pdf',
          'version': 1
        };
        template.docs.push(newDoc);
        this.responseText = {
          'data': {
            'addTaskTemplateDocument': template
          }
        };
      } else {
        this.responseText = {
          'errors': [{ 'message': 'Task template not found or does not support documents' }]
        };
      }
    }
    else if (query.includes('removeTaskTemplateDocument')) {
      var templateId = variables.taskTemplateId || '1';
      var docId = variables.docId || 'doc-1';
      var template = mockTaskTemplates.find(t => t.id === templateId);
      if (template && template.docs) {
        template.docs = template.docs.filter(d => d.id !== docId);
        this.responseText = {
          'data': {
            'removeTaskTemplateDocument': template
          }
        };
      } else {
        this.responseText = {
          'errors': [{ 'message': 'Task template not found or does not support documents' }]
        };
      }
    }
    else {
      this.responseText = {
        'errors': [{ 'message': 'Unknown query or mutation: ' + (operationName || 'unnamed') }]
      };
    }
  },
  responseTime: 500
});
