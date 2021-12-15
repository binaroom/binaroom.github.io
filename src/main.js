import Vue from 'vue'
import App from './App.vue'

import router from './router'

import VueSupabase from 'vue-supabase'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import './assets/fa/css/all.min.css'

import './assets/css/style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import NProgress from 'vue-nprogress'

import {VueSpinners} from '@saeris/vue-spinners'

Vue.config.productionTip = false

Vue.use(VueSupabase, {
  supabaseUrl: "https://dsryzuznqufyhlnodxyi.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODQ4ODI4MiwiZXhwIjoxOTU0MDY0MjgyfQ.wu8WQnl-kS1Ee5PBkdsBaF0h-VRwzWQZXk69usbwyD4",
  supabaseOptions: {}
})
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(NProgress)
Vue.use(VueSpinners)

const nprogress = new NProgress()
nprogress.configure({ showSpinner: true });

AOS.init()

Vue.config.productionTip = false

new Vue({
  router,
  nprogress,
  render: h => h(App),
}).$mount('#app')
