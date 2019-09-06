
import router from '@/router'

export default {
  state: {
    isleft: false,
    isright: false
  },
  mutations: {
    GOLEFT (state: any, path: any) {
      state.isleft = true
      state.isright = false
      router.push(path)
    },
    GORIGHT (state: any, path: any) {
      state.isleft = false
      state.isright = true
      router.push(path)
    },
    GOBACK (state: any) {
      state.isleft = false
      state.isright = true
      router.go(-1)
    },
    WINBACK (state: any) {
      state.isleft = false
      state.isright = true
    }
  }
}
