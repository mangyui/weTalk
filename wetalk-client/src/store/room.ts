import Room from '../model/room'

export default {
  state: {
    isLiving: true,
    room: {}
  },
  mutations: {
    closeOpenRoom (state: any, living: boolean) {
      state.isLiving = living
    },
    updateRoomNumber (state: any, number: number) {
      state.room.number = number
    },
    updateRoomname (state: any, username: string) {
      state.room.number = username
    },
    initRoomInfo (state: any, room: Room) {
      state.room = room
    }
  },
  actions: {}
}
