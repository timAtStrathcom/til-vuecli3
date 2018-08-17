module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/airbnb'
  ],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'max-len': ['error', 120],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ['error', 'never'],

    'import/extensions': ['error', {
      'js': 'never',
      'vue': 'never',
      'json': 'always',
    }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": true, "peerDependencies": false}],

    'vue/attributes-order': ['off'],
    'vue/max-attributes-per-line': ['off'],
    'vue/name-property-casing': ['error', 'kebab-case'],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
