// Copyright (C) 2009-2023 Lemoine Automation Technologies
//
// SPDX-License-Identifier: Apache-2.0

// Mock for `WorkStructure[?Kind=<X>]` — array of work-structure definitions.
// Each entry describes one Kind (WorkOrder / Component / Operation / Part /
// Project) with its editable Properties.

require('./_helpers');

(function () {
  function stringProp (key, label, opts) {
    return Object.assign({ Key: key, Label: label, Format: 'String' }, opts || {});
  }
  function intProp (key, label, opts) {
    return Object.assign({ Key: key, Label: label, Format: 'Integer' }, opts || {});
  }
  function durationProp (key, label, opts) {
    return Object.assign({ Key: key, Label: label, Format: 'Duration' }, opts || {});
  }
  function boolProp (key, label, opts) {
    return Object.assign({ Key: key, Label: label, Format: 'Boolean' }, opts || {});
  }
  function enumProp (key, label, enumValues, opts) {
    return Object.assign({
      Key: key, Label: label, Format: 'Enum',
      Limits: Object.assign({ Enum: enumValues }, (opts && opts.Limits) || {})
    }, opts || {});
  }

  var STRUCTURES = [
    {
      Kind: 'WorkOrder',
      Properties: [
        stringProp('Name', 'Name', { Required: true, Limits: { Maxsize: 64 } }),
        stringProp('Code', 'Code', { Limits: { Maxsize: 16 } }),
        stringProp('ExternalCode', 'External code'),
        enumProp('Status', 'Status', ['Planned', 'InProgress', 'Done', 'Cancelled'], { Default: 'Planned' })
      ]
    },
    {
      Kind: 'Project',
      Properties: [
        stringProp('Name', 'Name', { Required: true }),
        stringProp('Code', 'Code')
      ]
    },
    {
      Kind: 'Part',
      Properties: [
        stringProp('Name', 'Name', { Required: true }),
        stringProp('Code', 'Code'),
        intProp('TargetCount', 'Target count', { Limits: { Min: 1, Max: 100000 } })
      ]
    },
    {
      Kind: 'Component',
      Properties: [
        stringProp('Name', 'Name', { Required: true }),
        stringProp('Code', 'Code'),
        intProp('QuantityPerPart', 'Quantity per part', { Default: 1, Limits: { Min: 1 } })
      ]
    },
    {
      Kind: 'Operation',
      Properties: [
        stringProp('Name', 'Name', { Required: true }),
        stringProp('Code', 'Code'),
        durationProp('MachiningDuration', 'Machining duration', { Default: 120, Limits: { Min: 0, Max: 3600 } }),
        durationProp('SetupDuration', 'Setup duration', { Default: 600 }),
        intProp('TargetCycleTime', 'Target cycle time (s)', { Limits: { Min: 1, Step: 1 } }),
        boolProp('Active', 'Active', { Default: true })
      ]
    }
  ];

  MOCK.respond('WorkStructure', function (call) {
    if (call.params.Kind) {
      // Match only the requested Kind; empty array means "unknown kind"
      // → component re-shows the kind picker.
      return STRUCTURES.filter(function (s) {
        return s.Kind.toLowerCase() === String(call.params.Kind).toLowerCase();
      });
    }
    return STRUCTURES;
  }, { delay: 300 });
})();
