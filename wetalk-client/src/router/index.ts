import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home/lobby'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      redirect: '/home/lobby',
      children: [
        {
          path: 'lobby',
          name: 'Lobby',
          component: () => import('@/components/Lobby.vue')
        },
        {
          path: 'usercenter',
          name: 'UserCenter',
          component: () => import('@/components/UserCenter.vue')
        }
      ]
    },
    {
      path: '/WorldRoom',
      name: 'WorldRoom',
      component: () => import('@/views/WorldRoom.vue')
    },
    {
      path: '/UserEdit',
      name: 'UserEdit',
      component: () => import('@/views/UserEdit.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
