// Copyright (C) 2025 Atsora Solutions
//
// SPDX-License-Identifier: Apache-2.0

require('./_helpers');

MOCK.respond('I18N/Catalog', function (call) {
  return { Value: 'I18N value for ' + (call.params.Key || 'unknown') };
}, { delay: 300 });
