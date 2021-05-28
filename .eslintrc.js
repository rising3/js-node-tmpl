module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  plugins: ['react', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/all',
    'plugin:prettier/recommended',
  ],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        endOfLine: 'lf',
        semi: false,
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
      },
    ],
  },
}
