const { moduleInterop } = require('@textlint/module-interop');

module.exports = {
  rules: {
    'no-todo': moduleInterop(require('textlint-rule-no-todo'))
  },
  rulesConfig: {
    'no-todo': true
  }
};
