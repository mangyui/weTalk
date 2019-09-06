import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import './plugins/vantUI.js'
import '@/styles/index.less'
import '@/styles/mobile.less'
import './guard.ts'

import './api/get.js'
import './api/post.js'
import { Toast } from 'vant'

Vue.config.productionTip = false

window.addEventListener('popstate', (e: any) => {
  store.commit('WINBACK')
}, false)

declare module 'vue/types/vue' {
  interface Vue {
    $toast: Toast
    $toGet: any
    $toPost: any
  }
}

new Vue({
  // el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app') // 与el: '#app'对应，手动挂载
