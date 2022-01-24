module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'jsx-quotes': [1, 'prefer-single'],
    'prettier/prettier': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'object-curly-spacing': [1, 'always'],
    'comma-dangle': [1, 'never'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
