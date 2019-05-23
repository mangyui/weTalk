import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import './plugins/museui.js'
import '@/styles/index.less'
import './guard.ts'
// const Toast = require('muse-ui-toast')

Vue.config.productionTip = false
// Vue.use(Toast)

new Vue({
  // el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app') // 与el: '#app'对应，手动挂载
