module.exports = {
  extends: ['plugin:react/recommended', 'react-hooks'],
  rules: {
    quotes: ['error', 'single'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  env: { browser: true, es6: true, jest: true },
};
