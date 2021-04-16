export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'E-learning',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './assets/images/logo/primary.svg' },
      { rel: 'stylesheet',href: `./assets/fonts-google/cssf992.css?family=Oswald:400,500,700%7CRoboto:400,500%7CRoboto:400,500&amp;display=swap`},
      { type:'text/css',rel: 'stylesheet',href: `./assets/vendor/perfect-scrollbar.css`},
      { type:'text/css',rel: 'stylesheet',href: `./assets/css/material-icons.css`},
      { type:'text/css',rel: 'stylesheet',href: `./assets/css/fontawesome.css`},
      { type:'text/css',rel: 'stylesheet',href: `./assets/vendor/spinkit.css`},
      { type:'text/css',rel: 'stylesheet',href: `./assets/css/app.css`},

    ],
    script:[
      { src: `./assets/vendor/jquery.min.js`},
      { src: `./assets/vendor/popper.min.js`},
      { src: `./assets/vendor/bootstrap.min.js`},
      { src: `./assets/vendor/perfect-scrollbar.min.js`},
      { src: `./assets/vendor/dom-factory.js`},
      { src: `./assets/vendor/material-design-kit.js`},
      { src: `./assets/js/app.js`},
      { src: `./assets/js/hljs.js`},
      { src: `./assets/js/app-settings.js`},
      { src: `./assets/js/settings.js`},
      { src: `./assets/vendor/moment.min.js`},
      { src: `./assets/vendor/moment-range.js`},
      { src: `./assets/vendor/Chart.min.js`},
      { src: `./assets/js/chartjs-rounded-bar.js`},
      { src: `./assets/js/chartjs.js`},
      { src: `./assets/js/page.instructor-dashboard.js`},
      { src: `./assets/vendor/list.min.js`},
      { src: `./assets/js/list.js`},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
// module.buildModulesexports = {
//   mode:'universal',
//   router = {
//     middleware:'test'
//   }
// },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}
