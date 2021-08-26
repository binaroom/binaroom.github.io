import Vue from 'vue'
import App from './App.vue'

import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import './assets/fa/css/all.min.css'

import './assets/css/style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import NProgress from 'vue-nprogress'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(NProgress)

const nprogress = new NProgress()
nprogress.configure({ showSpinner: true });

AOS.init()

Vue.config.productionTip = false

new Vue({
  router,
  nprogress,
  render: h => h(App),
}).$mount('#app')
