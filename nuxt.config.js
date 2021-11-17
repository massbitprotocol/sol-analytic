import webpack from 'webpack';

const description = `Find and consume data faster from the leading Polkadot/Substrate protocols using our free MassBit explorer. The world’s decentralised data is now available to query using GraphQL.`;
const color = `#2C3ACF`;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MassBit',
    bodyAttrs: {
      class: ['antialiased bg-white text-base'],
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/fonts.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/validate', ssr: true },
    '~/plugins/helpers/utils',
    '~/plugins/helpers/filters',
    '~/plugins/helpers/directives',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  loading: {
    color,
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.API_BASE_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_BASE_URL,
    },
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/dayjs-module
    '@nuxtjs/dayjs',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://portal-vue.linusb.org/
    'portal-vue/nuxt',
  ],

  tailwindcss: {
    viewer: false,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  dayjs: {
    plugins: ['utc', 'relativeTime', 'duration'],
  },

  sitemap: {
    hostname: 'https://solanalytic.massbit.io',
    gzip: true,
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'MassBit',
      short_name: 'MassBit',
      description,
      lang: 'en',
      theme_color: color,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-property-in-object', { loose: true }]],
    },
    transpile: ['vee-validate'],
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _: 'lodash',
      }),
    ],
  },
};
