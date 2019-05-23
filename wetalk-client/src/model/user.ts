class User {
  private id: string // 当前以时间为id
  public name: string = ''
  public sex: string = ''
  private avatar : string
  constructor (id: string, name: string, avatar: string, sex: string) {
    this.id = id
    this.name = name
    this.avatar = avatar
    this.sex = sex
    if (this.name === '') {
      this.name = '游客'
    }
  }
}

export default User
