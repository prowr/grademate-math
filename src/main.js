import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import PortalVue from 'portal-vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import '@/styles/global.scss' // Global variables SCSS
import '@/styles/styles.scss' // Global styles SCSS

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(PortalVue)
Vue.use(Toast, {
  position: 'top-right',
  timeout: 5000  // Default toast timeout
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
