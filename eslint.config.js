import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "prettier/prettier": [
        "warn",
        {
          "trailingComma": "none",
          "tabWidth": 2,
          "semi": false,
          "singleQuote": true,
          "bracketSpacing": true,
          "printWidth": 100,
          "arrowParens": "avoid",
          "useTabs": false,
          "endOfLine": "auto"
        }
      ],
      "array-bracket-spacing": "error",
      "arrow-parens": ["error", "as-needed"],
      "camelcase": [
        "off",
        {
          "properties": "always"
        }
      ],
      "linebreak-style": ["off", "unix"],
      "max-len": "off",
      "no-await-in-loop": "error",
      "no-console": [
        "error",
        {
          "allow": ["info", "warn", "error"]
        }
      ],
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      "quote-props": ["error", "as-needed"],
      "comma-dangle": ["error", "never"],
      "space-before-function-paren": [
        "error",
        {
          "anonymous": "always",
          "named": "never"
        }
      ],
      "strict": ["error", "global"],
      "global-require": "error",
      "function-paren-newline": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-empty-interface": [
        "error",
        {
          "allowSingleExtends": true
        }
      ],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "jsx-quotes": "warn",
      "jsx-a11y/anchor-is-valid": "off",
      "react-hooks/exhaustive-deps": "off",
      "import/no-unresolved": "off",
      "import/extensions": "off",
      "import/prefer-default-export": "off",
      "import/newline-after-import": [
        "error",
        {
          "count": 1
        }
      ],
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "pathGroups": [
            {
              "pattern": "@/services/**",
              "group": "internal"
            },
            {
              "pattern": "@/api/**",
              "group": "internal"
            },
            {
              "pattern": "@/ui/**",
              "group": "internal"
            },
            {
              "pattern": "@/hooks/**",
              "group": "internal"
            },
            {
              "pattern": "@/utils/**",
              "group": "internal"
            },
            {
              "pattern": "@/models/**",
              "group": "internal"
            },
            {
              "pattern": "@/styles/**",
              "group": "internal"
            },
            {
              "pattern": "@/config/**",
              "group": "internal"
            },
            {
              "pattern": "@/constants/**",
              "group": "internal"
            }
          ],
          "pathGroupsExcludedImportTypes": ["builtin"],
          "newlines-between": "never",
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ]
    }
  },
)
