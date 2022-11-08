export default {
  // Disable server-side rendering
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sasthosebok.com || স্বাস্থ্যসেবক',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '*sasthosebok.com* is a complete online service oriented organization. Install sasthosebok.com app to solve any medical problem no matter where you are in the country and get service. See less' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/logo.png' },

    ],
    script: [
      // { src: '@static/assets/js/bootstrap.bundle.min.js', type: 'text/javascript' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/static/assets/css/icofont.min.css",
    "@/static/assets/css/responsive-style.css",
    "@/static/assets/css/style.css",
    // "@/static/assets/css/bootstrap.min.css",

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vee-validate",
    { src: "~/plugins/highcharts.js", mode: 'client' },
    { src: '~/plugins/bootstrap.js', mode: 'client' },
    // { src: '~/plugins/vuex-persist.js', mode: 'client' },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/composition-api/module'
  ],
  
  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: true,
      brands: true,
    },
},


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/auth-next'
  ],
  
  

  toast: {
    position: 'top-center',
    duration: 2500,
    action : [
      {
        text : 'close',
        onClick : (e, toastObject) => {
          toastObject.goAway(0);
        }
      }],
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
  // auth: {
  //   strategies: {
  //     local: {
  //       scheme: 'refresh',
  //       localStorage: {
  //         prefix: 'auth.'
  //       },
  //       token: {
  //         prefix: 'access.',
  //         property: 'access',
  //         maxAge: 86400,
  //         type: 'Bearer'
  //       },
  //       refreshToken: {
  //         prefix: 'refresh.',
  //         property: 'refresh',
  //         data: 'refresh',
  //         maxAge: 60 * 60 * 24 * 15
  //       },
  //       user: {
  //         property: 'user',
  //         autoFetch: true
  //       },
  //       // endpoints: {
  //       //   login: { url: '/token/', method: 'post'},
  //       //   refresh: { url: '/token/refresh/', method: 'post' },
  //       //   user: { url: '/user', method: 'get' },
  //       //   // logout: { url: '/logout', method: 'post'}
  //       //   logout: false
  //       // },

  //       endpoints: {
  //         login: { url: '/auth/login/', method: 'post'},
  //         refresh: { url: '/auth/token-refresh/', method: 'post' },
  //         user: { url: '/auth/user/', method: 'get' },
  //         logout: { url: '/auth/logout', method: 'post' },

  //       },
  //       tokenType : "bearer",


  //     }
  //   }
  // },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName:'token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/user', method: 'get' , propertyName:'user'}
          // user: false
        },
        tokenType : "bearer",

      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'http://localhost:8000/',
    baseURL: 'https://api.sasthosebok.com/'

  },

  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
  },
  // loading: '~/components/LoadingBar.vue',

  publicRuntimeConfig: {
    // apibaseURL: 'http://localhost:8000',
    // HostURL: 'http://localhost:3000',
    HostURL: 'https://sasthosebok.com/',
    apibaseURL: 'https://api.sasthosebok.com/',
    apiToken: "y6&kvg54iu%!tg!aoas9d+$titza-d9w6%*6%f@4v1w5x=l(+9",
  },

}