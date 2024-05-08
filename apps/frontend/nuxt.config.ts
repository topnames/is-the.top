import path from 'node:path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  experimental: {
    componentIslands: true,
  },

  devServer: {
    https: {
      cert: '.dev/is-the.local.pem',
      key: '.dev/is-the.local-key.pem',
    },
    host: 'is-the.local',
    port: 443,
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    isSst: false,
    // Keys within public are also exposed client-side
    public: {
      backendUrl: 'https://127.0.0.1:3301',
    },
  },

  ignore: [
    'dist',
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  vue: {
    propsDestructure: true,
  },

  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/image',
    'nuxt-primevue',
    '@hypernym/nuxt-anime',
    '@vueuse/motion/nuxt',
    'nuxt-svgo',
  ],

  css: [
    '~/assets/css/main.scss',
    '@unocss/reset/tailwind.css',
  ],

  svgo: {
    defaultImport: 'component',
  },

  // nuxt-primevue
  primevue: {
    options: {
      unstyled: true,
      ripple: true,
    },
    importPT: { from: path.resolve(__dirname, './assets/vendor/primevue/presets/lara/') },
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  // @nuxtjs/color-mode
  // Removing classSuffix to match UnoCSS default selectors
  colorMode: {
    classSuffix: '',
  },

  // @nuxt/eslint
  eslint: {
    config: {
      // stylistic: true,
      standalone: false,
    },
  },
})
