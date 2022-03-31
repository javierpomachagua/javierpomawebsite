import { createSEOMeta } from './utils/seo'

export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /**
   * https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-env
   */
  env: {
    HOST_NAME: process.env.HOST_NAME
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Javier Pomachagua Pérez',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...createSEOMeta({
        title: 'Javier Pomachagua Pérez',
        description: 'Desarrolador Fullstack Laravel & Nuxt',
        image:
          'https://res.cloudinary.com/dy09hqrno/image/upload/v1623886883/Foto_Perfil_tscpeg.jpg',
        url: process.env.HOST_NAME
      })
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Livvic:wght@400;500;600;700&display=swap'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/helpers.js',
    { src: '~/plugins/vue-easy-slider.js', mode: 'client' }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt/image
    '@nuxt/image',
    // Doc: https://github.com/nuxt-community/google-analytics-module
    '@nuxtjs/google-analytics',
    // Doc: https://github.com/nuxt-community/svg-module/ https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // https://github.com/nicolasbeauvais/vue-social-sharing
    'vue-social-sharing/nuxt',
    // Doc: https://cloudinary.nuxtjs.org/
    '@nuxtjs/cloudinary',
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },

  image: {
    cloudinary: {
      baseURL: process.env.CLOUDINARY_URL
    }
  },

  cloudinary: {
    cloudName: process.env.CLOUDINARY_ID,
    useComponent: true
  },

  pwa: {
    meta: {
      title: 'Javier Pomachagua Pérez'
    },
    manifest: {
      name: 'Javier Pomachagua Pérez',
      lang: 'es'
    }
  },
  /*
   ** Exclude from generation
   */
  generate: {
    fallback: true
  }
}
