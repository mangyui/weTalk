import Message from '../model/message'

export default {
  state: {
    msgList: JSON.parse(sessionStorage.getItem('msgList') || '[]') || []
  },
  mutations: {
    addMsg (state: any, msg: Message) {
      state.msgList.push(msg)
      sessionStorage.setItem('msgList', JSON.stringify(state.msgList))
    },
    removeMsg (state: any, msg: Message) {
      let index = '-1'
      for (const key in state.msgList) {
        if (state.msgList.hasOwnProperty(key)) {
          if (state.msgList[key].time === msg.time && msg.user && state.msgList[key].user.id === msg.user.id) {
            console.log('key', state.msgList[key])
            index = key
          }
        }
      }
      // console.log('index', msg, new Message(state.msgList[3].time, state.msgList[3].content, state.msgList[3].type, state.msgList[3].user))
      console.log('index', index)
      if (index !== '-1') {
        let time = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
        let message = new Message(time, (msg.user ? msg.user.name : '用户') + ' 撤回了一条消息', 0, null)
        state.msgList.splice(index, 1, message)
        // state.msgList.push(msg)
        sessionStorage.setItem('msgList', JSON.stringify(state.msgList))
      }
    }
  }
}
