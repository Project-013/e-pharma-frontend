export default {
  // Disable server-side rendering
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "sasthosebok.com || স্বাস্থ্যসেবক",
    // title: 'E-Health',
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      },
      {
        hid: "description",
        name: "description",
        content:
          "sasthosebok.com is a complete online service-oriented healthcare organization. The purpose of which is to ensure digital healthcare to the people",
      },
      {
        name: "keywords",
        content:
          "Online healthcare service,Doctor service,Home nursing,Home physiotherapy,Home sample collection,Emergency oxygen delivery,Children’s home care,Medical product shop,Healthcare services near me,Online healthcare consultation,Healthcare tips and advice,Best healthcare providers in Sylhet,Best healthcare providers in Bangladesh,Healthcare products and equipment,How to find a reliable healthcare provider,Benefits of online healthcare services,Top healthcare tips,Best healthcare products,Affordable healthcare plans,স্বাস্থ্যসেবক, স্বাস্থ্য ,সেবক,sasthosebok,sastho sebok,sastho,sastho,",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Sajib Sutradhar" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/img/logo.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    ],

    script: [
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3545205458668722",
        crossorigin: "anonymous",
      },
    ],
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
    { src: "~/plugins/bootstrap.js", mode: "client" },
    { src: "~/plugins/vue-datepicker", ssr: false },
    // {
    //   src: "~/plugins/tawk-messenger.client.js",
    //   mode: "client",
    // },
    { src: "~/plugins/materialize-table.js", mode: "client" },
    // { src: "~/plugins/vuex-persist.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/composition-api/module"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/toast",
    "@nuxtjs/auth-next",
    // "nuxt-lazy-load",
  ],

  toast: {
    position: "top-center",
    duration: 50000,
    action: [
      {
        text: "X",
        onClick: (e, toastObject) => {
          toastObject.goAway(0);
        },
      },
    ],
    register: [
      // Register custom toasts
      {
        name: "my-error",
        message: "Oops...Something went wrong",
        options: {
          type: "error",
        },
      },
    ],
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/auth/login", method: "post", propertyName: "token" },
          logout: { url: "/auth/logout", method: "post" },
          user: { url: "/auth/user/", method: "get", propertyName: "user" },
          // user: false
        },
        tokenType: "bearer",
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:8000/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
  },
  loading: "~/components/LoadingBar.vue",

  publicRuntimeConfig: {
    apibaseURL: 'http://localhost:8000',
    // type: "v1",
    uniProject: false,
    isApp: false,
    // apiToken2: "y6&kvg54iu%!tg!aoas9d+$titza-d9w6%*6%f@4v1w5x=l(+9",

  },
};
