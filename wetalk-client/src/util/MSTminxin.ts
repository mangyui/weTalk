import { Component, Vue } from 'vue-property-decorator'

declare module 'vue/types/vue' {
  interface Vue {
    mScrollTop: number
  }
}

@Component({
  beforeRouteLeave (to: any, from: any, next: any) {
    let app: any = document.getElementById('app')
    this.mScrollTop = app.scrollTop > 0 ? app.scrollTop : 0
    next()
  }
})
export default class MSTminxin extends Vue {
  mScrollTop: number = 0
  activated () {
    setTimeout(() => {
      let app: any = document.getElementById('app')
      app.scrollTop = this.mScrollTop || 0
    }, 0)
  }
}
