module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      { registeredComponentsOnly: false, ignores: ['i18n'] },
    ],
    'vue/custom-event-name-casing': ['error', 'kebab-case', { ignores: [] }],
    'vue/html-button-has-type': ['error', { button: true, submit: true, reset: true }],
    'vue/html-comment-content-spacing': ['error', 'always', { exceptions: [] }],
    'vue/new-line-between-multi-line-property': ['error', { minLineOfMultilineProperty: 2 }],
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props', 'data', 'computed', 'methods'],
        deepData: true,
        ignorePublicMembers: true,
      },
    ],
    'vue/no-useless-v-bind': ['error', { ignoreIncludesComment: false, ignoreStringEscape: false }],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/require-name-property': ['error'],
    'vue/v-on-event-hyphenation': ['error', 'always', { autofix: false, ignore: [] }],
    'vue/v-on-function-call': ['error', 'never', { ignoreIncludesComment: false }],
    'vue/valid-next-tick': ['error'],
  },
};
