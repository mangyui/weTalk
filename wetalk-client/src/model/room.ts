class Room {
  private id: number
	public name: string = ''
	private number: number
	constructor (id: number, name: string, number: number) {
		this.name = name
		this.id = id
    this.number = number
    if (this.name === '') {
      this.name = '第'+this.id+'号聊天室'
    }
	}
}

export default Room
