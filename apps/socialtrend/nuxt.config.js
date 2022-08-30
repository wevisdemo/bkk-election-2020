const webTitle =
  'Social Listening: เลือกตั้งผู้ว่าฯ กทม. บนโลกออนไลน์ - Bangkok Election 2022'
const webDescription = `สรุปครบ 'เลือกตั้งผู้ว่าฯ กทม. 2565' และ 'เลือกตั้ง ส.ก.' เช็กประวัติ นโยบาย หมายเลขแคนดิเดต พร้อมคู่มือเลือกตั้ง และเช็กผลเลือกตั้ง กทม. แบบเรียลไทม์`
const ogImage = '/socialtrend/sociallistening_og.png'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: webTitle,
    htmlAttrs: {
      lang: 'th',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: webDescription,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: webTitle,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: webDescription,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: ogImage,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: webTitle,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: webDescription,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: ogImage,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.png' },
      // { rel: 'stylesheet', href: '/static/fonts/typography.css' },
      { rel: 'stylesheet', href: '/ui/style.css' },
    ],
  },

  mq: {
    defaultBreakpoint: 'desktop',
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1400,
      // desktopWide: 2000,
      // desktopUltraWide: Infinity,
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/style/index.scss',
    '../../static/fonts/typography.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/element-ui', '~/plugins/axios', '~/plugins/moment'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-mq',
    ...(process.env.BUILD_ENV === 'PRODUCTION' ? ['vue-plausible'] : []),
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/, /^ui/],
  },

  router: {
    base: '/socialtrend/',
  },

  server: {
    port: 3002,
  },

  tailwindcss: {
    cssPath: '../../packages/tailwind/style.css',
    viewer: false,
  },

  plausible: {
    domain: 'bkkelection2022.wevis.info',
    apiHost: 'https://analytics.punchup.world',
  },
}
