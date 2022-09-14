module.exports = {
  extends: ['@bryce-loskie'],
  rules: {
    'no-console': 'off',
  },
  overrides: [
    {
      files: ['playground/**/*.*'],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
  ],
}
