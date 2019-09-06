import Vue from 'vue'
import Vuex from 'vuex'
import room from './room'
import user from './user'
import message from './message'
import routerGo from './routerGo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...room.state,
    ...user.state,
    ...message.state,
    ...routerGo.state
  },
  mutations: {
    ...room.mutations,
    ...user.mutations,
    ...message.mutations,
    ...routerGo.mutations
  },
  actions: {

  },
  getters: {
    user: state => state.user,
    city: state => state.user.city,
    msgList: state => state.msgList,
    isleft: state => state.isleft,
    isright: state => state.isright
  }
})
