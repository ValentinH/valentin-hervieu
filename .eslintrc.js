module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
    'next',
    'next/core-web-vitals',
  ],
  // even if already in ignore file, this is required to avoid warning in VSCode on these files
  ignorePatterns: ['.eslintrc.js', 'next.config.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react-hooks'],
  root: true,
  rules: {
    'react/function-component-definition': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'arrow-body-style': 0,
    'import/extensions': [
      2,
      {
        json: 'always',
        ts: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.+(ts|tsx)'],
      },
    ],
    'import/order': [
      2,
      {
        alphabetize: {
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'internal',
            pattern: '#*/**',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'max-classes-per-file': 0,
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-nested-ternary': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    radix: ['error', 'as-needed'],
    'react-hooks/exhaustive-deps': 2,
    'react-hooks/rules-of-hooks': 2,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/require-default-props': [
      0,
      {
        ignoreFunctionalComponents: true,
      },
    ],
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
  },
}
