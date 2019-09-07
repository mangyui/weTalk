
export default {
  state: {
    isPlay: 0,
    currentSong: {
      songid: 0
    }
  },
  mutations: {
    TOPLAY (state: any, song: any) {
      state.currentSong = song
      state.isPlay = 1
    },
    TOPAUSE (state: any) {
      state.isPlay = 2
    },
    TOJIXU (state: any) {
      state.isPlay = 1
    }
  }
}
