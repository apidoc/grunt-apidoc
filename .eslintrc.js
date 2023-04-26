module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'standard',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  env: {
    'browser': false,
    'amd': true,
    'es6': true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-extra-parens': ['error', 'all'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'object-shorthand': 'off',
  }
}
