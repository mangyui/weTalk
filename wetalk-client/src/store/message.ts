import Message from '../model/message'

export default {
  state: {
    msgList: JSON.parse(sessionStorage.getItem('msgList') || '[]') || []
  },
  mutations: {
    addMsg (state: any, msg: Message) {
      state.msgList.push(msg)
      sessionStorage.setItem('msgList', JSON.stringify(state.msgList))
    }
  }
}
