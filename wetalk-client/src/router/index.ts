import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/multiplayer',
      name: 'multiplayer',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Multiplayer.vue')
    },
    {
      path: '/WorldRoom',
      name: 'WorldRoom',
      component: () => import(/* webpackChunkName: "about" */ '@/views/WorldRoom.vue')
    }
  ]
})
