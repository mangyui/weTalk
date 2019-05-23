import User from '../model/user'

export default {
  state: {
    user: JSON.parse(localStorage.getItem('user') || '{}') || {}
  },
  mutations: {
    updateUserAvatar (state: any, avatar: string) {
      state.user.avatar = avatar
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    updateUserName (state: any, name: string) {
      state.user.name = name
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    initUserInfo (state: any, user: User) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    logoutUser (state: any) {
      state.user = {}
      localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {}
}
