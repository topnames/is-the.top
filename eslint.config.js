import antfu from '@antfu/eslint-config'
// `@ts-expect-error` will complains "unused" in dev environment when the eslint file exists, so here we uses `@ts-ignore`
// eslint-disable-next-line ts/prefer-ts-expect-error
// @ts-ignore cannot find module eslintConfig in CI pipeline test as it's not generated by nuxt yet
import frontendNuxtConfig from 'frontend/eslintConfig'

export default frontendNuxtConfig(antfu(
  {
    typescript: true,
    vue: true,
    unocss: true,
    ignores: [
      '.sst',
      '**/assets/vendor/**',
    ],
  },
  {
    files: ['apps/backend/**'],
    rules: {
      // Disable automatically transform `type` to `interface`, because Hono require the Bindings to be type.
      'ts/consistent-type-definitions': 'off',
    },
  },
  {
    rules: {
      // Allow trailing space in comments, for possible JSDoc formattings
      'style/no-trailing-spaces': ['error', { ignoreComments: true }],
      // Relaxes inline statements a bit
      'style/max-statements-per-line': ['error', { max: 2 }],
    },
  },
  // Allow trailing space for markdown formatting
  {
    files: ['**/*.md'],
    rules: {
      'style/no-trailing-spaces': 'off',
    },
  },
))
