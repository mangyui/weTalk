import Vue from 'vue'
import store from '@/store'
import Message from '@/model/message'
import User from '@/model/user'

class MyTalk {
  public ws: any
  public user: User
  public numberP: number
  public isOver: boolean = false
  constructor (user: User, numberP: number) {
    this.ws = new WebSocket('ws://47.106.130.141:9612')
    // ws = new WebSocket('ws://' + window.location.host)
    this.user = user
    this.numberP = numberP
  }
  public creatSending (content: string, type: number): any {
    var time = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    var message = new Message(time, content, type, type === 1 ? this.user : null)
    var data = {
      message: message
    }
    this.ws.send(JSON.stringify(data))
  }
  public createWebsocket () : any {
    let numberP: number
    this.ws.onopen = (e: any) => {
      this.creatSending(this.user.name + ' 进入聊天室', 0)
    }
    this.ws.onmessage = (e: any) => {
      var resData = JSON.parse(e.data)
      // console.log('resData', resData)
      if (resData.isRemove) {
        store.commit('removeMsg', resData.message)
      } else {
        store.commit('addMsg', resData.message)
      }
      if (resData.message.type === -1) {
        this.numberP = (resData.number - 1)
      } else {
        this.numberP = resData.number
      }
      Vue.nextTick(() => {
        this.scrollBottom()
      })
    }
  }
  public backoutMess (message: Message) {
    var data = {
      message: message,
      isRemove: true
    }
    this.ws.send(JSON.stringify(data))
  }
  public scrollBottom (): any {
    try {
      const msgEl = document.querySelector('.mess-list .list-item:last-child')
      if (msgEl) {
        if (!this.isOver) {
          setTimeout(() => {
            this.isOver = true
            msgEl.scrollIntoView()
          }, 300)
        } else {
          msgEl.scrollIntoView()
        }
      }
    } catch (err) {
      console.error(err)
    }
  }
}
export default MyTalk
