import antfu from '@antfu/eslint-config';

export default antfu(
  {
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
    },
  },
  {
    rules: {
      /** TYPESCRIPT */
      '@typescript-eslint/indent': [
        'error',
        2,
        {
          ignoredNodes: [
            'TSTypeParameterInstantiation',
          ],
          SwitchCase: 1,
        },
      ],
      /** END TYPESCRIPT */

      /** ARRAY */
      'array-bracket-newline': [
        'error',
        {
          minItems: 1,
        },
      ],
      'array-element-newline': [
        'error',
        {
          minItems: 1,
        },
      ],
      /** END ARRAY */

      /** OBJECT */
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            minProperties: 1,
          },
        },
      ],
      'object-curly-spacing': [
        'error',
        'always',
      ],
      'object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: false,
        },
      ],
      /** END OBJECT */

      /** VUE */
      'vue/block-order': [
        'error',
        {
          order: [
            'script',
            'template',
            'style',
          ],
        },
      ],
      'vue/padding-line-between-tags': [
        'error',
      ],
      'vue/first-attribute-linebreak': [
        'error',
        {
          singleline: 'beside',
          multiline: 'below',
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        },
      ],
      'vue/multiline-html-element-content-newline': [
        'error',
        {
          ignoreWhenEmpty: true,
          allowEmptyLines: false,
        },
      ],
      'vue/singleline-html-element-content-newline': [
        'error',
        {
          ignoreWhenEmpty: true,
        },
      ],
    },
    /** END VUE */
  },
);
