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
      name: 'Home',
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
      path: '/worldroom',
      name: 'WorldRoom',
      component: () => import('@/views/WorldRoom.vue')
    },
    {
      path: '/userhomepage',
      name: 'UserHomePage',
      component: () => import('@/views/UserHomePage.vue')
    },
    {
      path: '/useredit',
      name: 'UserEdit',
      component: () => import('@/views/UserEdit.vue')
    },
    {
      path: '/setting',
      name: 'Setting',
      component: () => import('@/views/Setting.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
