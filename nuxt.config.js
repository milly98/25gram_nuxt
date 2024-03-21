module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '25gram',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/style.scss',
    "~node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  plugins: [
    "~plugins/bootstrap.js"
  ],
 
  modules: ['bootstrap-vue/nuxt'],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  
  router: {
    mode: `history`,
    extendRoutes (routes, resolve) {
      routes.length = 0
      routes.push({
        path: "/",
        component: resolve(__dirname, 'pages/HomeView.vue'),
        name: "home"
      })
      routes.push({
        path: "/solutions",
        component: resolve(__dirname, 'pages/SolutionsView.vue'),
        name: "solutions",
        meta: { transitionName: `slide` }
      })
      routes.push({
        path: "/solutions/:solName",
        component: resolve(__dirname, 'pages/SolutionDetailView.vue'),
        // name: "Home"
      })
      routes.push({
        path: "/customers",
        component: resolve(__dirname, 'pages/CustomersView.vue'),
        name: "customers",
        meta: { transitionName: `zoom` }
      })
      // routes.push({
      //   path: "/index",
      //   component: resolve(__dirname, 'pages/index.vue'),
      //   name: "index"
      // })
    }
  }
}

