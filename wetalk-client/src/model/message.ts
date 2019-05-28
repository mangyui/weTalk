import User from './user'

class Message {
  public time: string
  public content: string = ''
  public type: number //  0 为系统消息(加入聊天室) -1（退出聊天室） 1为用户消息
  public user: User | null
  constructor (time: string, content: string, type: number, user: User | null) {
    this.time = time
    this.content = content
    this.type = type
    this.user = user
  }
}

export default Message
