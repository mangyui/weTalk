import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Index.vue'

import Lobby from '@/views/post/Index.vue'
import Dynamic from '@/views/dynamic/Index.vue'
import Message from '@/views/mess/Index.vue'
import UserCenter from '@/views/user/UserCenter.vue'

import Search from '@/views/home/Search.vue'
import PostDetails from '@/views/post/Details.vue'
import PostComment from '@/views/post/Comment.vue'
import PostAdd from '@/views/post/Add.vue'

import DynamicDetails from '@/views/dynamic/Details.vue'
import DynamicComment from '@/views/dynamic/Comment.vue'
import DynamicAdd from '@/views/dynamic/Add.vue'
import WorldRoom from '@/views/WorldRoom.vue'

import UserHomePage from '@/views/user/UserHomePage.vue'
import UserEdit from '@/views/user/UserEdit.vue'
import Setting from '@/views/Setting.vue'
import Weather from '@/views/more/MyWeather.vue'

import Music from '@/views/more/Music.vue'
import MyMap from '@/views/more/MyMap.vue'
import Games from '@/views/more/Games.vue'
import Applications from '@/views/more/Applications.vue'

import Base64 from '@/views/applications/Base64.vue'
import Other from '@/views/more/Other.vue'
import Web from '@/views/web/Index.vue'
import Login from '@/views/login/Index.vue'

Vue.use(Router)

const router:Router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home/lobby'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/lobby',
      children: [
        {
          path: 'lobby',
          name: 'Lobby',
          component: () => import('@/views/post/Index.vue')
        },
        {
          path: 'dynamic',
          name: 'Dynamic',
          component: Dynamic // () => import('@/views/dynamic/Index.vue')
        },
        {
          path: 'message',
          name: 'Message',
          component: Message // () => import('@/views/mess/Index.vue')
        },
        {
          path: 'usercenter',
          name: 'UserCenter',
          component: UserCenter // () => import('@/views/user/UserCenter.vue')
        }
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search // () => import('@/views/home/Search.vue')
    },
    {
      path: '/postdetails/:id',
      name: 'PostDetails',
      component: PostDetails // () => import('@/views/post/Details.vue')
    },
    {
      path: '/postcomment/:id',
      name: 'PostComment',
      component: PostComment // () => import('@/views/post/Comment.vue')
    },
    {
      path: '/postadd',
      name: 'PostAdd',
      component: PostAdd // () => import('@/views/post/Add.vue')
    },
    {
      path: '/dynamicdetails/:id',
      name: 'DynamicDetails',
      component: DynamicDetails // () => import('@/views/dynamic/Details.vue')
    },
    {
      path: '/dynamiccomment/:id',
      name: 'DynamicComment',
      component: DynamicComment // () => import('@/views/dynamic/Comment.vue')
    },
    {
      path: '/dynamicadd',
      name: 'DynamicAdd',
      component: DynamicAdd // () => import('@/views/dynamic/Add.vue')
    },
    {
      path: '/worldroom',
      name: 'WorldRoom',
      component: WorldRoom // () => import('@/views/WorldRoom.vue')
    },
    {
      path: '/userhomepage',
      name: 'UserHomePage',
      component: UserHomePage // () => import('@/views/user/UserHomePage.vue')
    },
    {
      path: '/useredit',
      name: 'UserEdit',
      component: UserEdit // () => import('@/views/user/UserEdit.vue')
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting // () => import('@/views/Setting.vue')
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather // () => import('@/views/more/MyWeather.vue')
    },
    {
      path: '/music',
      name: 'Music',
      component: Music // () => import('@/views/more/Music.vue')
    },
    {
      path: '/mymap',
      name: 'MyMap',
      component: MyMap // () => import('@/views/more/MyMap.vue')
    },
    {
      path: '/games',
      name: 'Games',
      component: Games // () => import('@/views/more/Games.vue')
    },
    {
      path: '/applications',
      name: 'Applications',
      component: Applications // () => import('@/views/more/Applications.vue')
    },
    {
      path: '/applications/base64',
      name: 'Base64',
      component: Base64 // () => import('@/views/applications/Base64.vue')
    },
    {
      path: '/other',
      name: 'Other',
      component: Other // () => import('@/views/more/Other.vue')
    },
    {
      path: '/web/:url',
      name: 'Web',
      component: Web // () => import('@/views/web/Index.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: Login // () => import('@/views/login/Index.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// router.onError((error) => {
//   const pattern = /Loading chunk (\d)+ failed/g
//   const isChunkLoadFailed = error.message.match(pattern)
//   const targetPath = router.history.pending.fullPath
//   if (isChunkLoadFailed) {
//     router.replace(targetPath)
//   }
// })

export default router
