module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': [2, 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 5 }],
    'indent': [2, 2],
    'no-unused-vars': [1, { 'vars': 'local', 'args': 'none' }],
    'quotes': [2, 'single'],
    'no-use-before-define': 1,
  }
}
