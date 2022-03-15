const _ = require('lodash')
module.exports = _.merge(require('@hairy/eslint/ts-uni@2.js'), {
  rules: {
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'unicorn/prevent-abbreviations': 'off'
  }
})
