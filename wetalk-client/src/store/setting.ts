export default {
  state: {
    isShowInOut: JSON.parse(localStorage.getItem('isShowInOut') || '') || false
  },
  mutations: {
    SETShowInOut (state: any, isF: boolean) {
      state.isShowInOut = isF
      localStorage.setItem('isShowInOut', state.isShowInOut)
    }
  }
}
