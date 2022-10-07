// eslint-disable-next-line no-undef
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        // eslint-disable-next-line no-undef
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    plugins: [
      '@typescript-eslint',
      'import'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
    root: true,
    rules: {
      // turn on errors for missing imports
      'import/no-unresolved': 'error'
    },
    "settings": {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      },
      "import/resolver": {
        "typescript": {
          "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
  
          // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default
  
          // use <root>/path/to/folder/tsconfig.json
          "project": './tsconfig.json',
        }
      }
    }
  };