import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './css/reset.css'
import axios from 'axios'
Vue.config.productionTip = false

Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://www.apiopen.top/'
axios.defaults.headers.post['Content-Type'] = 'json'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
