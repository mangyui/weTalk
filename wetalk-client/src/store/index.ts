import Vue from 'vue'
import Vuex from 'vuex'
import room from './room'
import user from './user'
import message from './message'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...room.state,
    ...user.state,
    ...message.state
  },
  mutations: {
    ...room.mutations,
    ...user.mutations,
    ...message.mutations
  },
  actions: {

  },
  getters: {
    user: state => state.user,
    msgList: state => state.msgList
  }
})
