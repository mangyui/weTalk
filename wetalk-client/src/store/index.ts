import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import message from './message'
import routerGo from './routerGo'
import playSong from './playSong'
import setting from './setting'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...playSong.state,
    ...user.state,
    ...message.state,
    ...routerGo.state,
    ...setting.state
  },
  mutations: {
    ...playSong.mutations,
    ...user.mutations,
    ...message.mutations,
    ...routerGo.mutations,
    ...setting.mutations
  },
  actions: {

  },
  getters: {
    user: state => state.user,
    city: state => state.user.city,
    msgList: state => state.msgList,
    isleft: state => state.isleft,
    isright: state => state.isright,
    isPlay: state => state.isPlay,
    currentSong: state => state.currentSong,
    isShowInOut: state => state.isShowInOut
  }
})
