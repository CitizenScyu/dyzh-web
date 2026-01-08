import Vue from 'vue'
import App from './App.vue'
import router from './router'
require(`@/plugins/element-ui`)
require(`@/plugins/clipboard`)
require(`@/plugins/base64`)
require(`@/plugins/axios`)
require(`@/plugins/device`)
require(`@/plugins/particles`)


import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/light.min.css'
import './assets/css/dark.min.css'
import '@/icons' // icon

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// Umami 统计
const script = document.createElement('script')
script.defer = true
script.src = 'https://tongji.cloud.us.kg/daxiang'
script.setAttribute('data-website-id', 'dd9c6c3e-4ae7-4c7d-9684-6021e9325880')
document.head.appendChild(script)
