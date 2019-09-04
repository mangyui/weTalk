class User {
  public id: string // 当前以时间为id
  public name: string = ''
  public sex: number = 0
  private avatar : string
  public cityCode: string
  public province: string
  public city: string
  constructor (id: string, name: string, avatar: string, sex: number) {
    this.id = id
    this.name = name
    this.avatar = avatar
    this.sex = sex
    this.cityCode = ''
    this.province = ''
    this.city = ''
    if (this.name === '') {
      this.name = '游客'
    }
  }
  getUserId (): string {
    return this.id
  }
}

export default User
