<template>
  <div class="bgWhite max1100">
    <van-nav-bar fixed title="听一听" left-arrow @click-left="$store.commit('GOBACK')" ></van-nav-bar>
    <van-search
      v-model="text"
      placeholder="搜索音乐"
      @search="getMusic"
    />
    <div class="music-box">
      <div class="music-item" v-for="(item, index) in musics" :key="index" @click="toPlay(item)">
        <div class="music-item-left">
          <img :src="item.pic">
          <div>
            <b>{{item.title}}</b>
            <p>{{item.author}}</p>
          </div>
        </div>
        <div class="music-item-right">
          <div v-if="isPlay!=0&&currentSong.songid==item.songid">
            <van-icon v-if="isPlay==1" name="pause-circle" size="2em" color="#00a7ff"/>
            <van-icon v-else name="play-circle" size="2em" color="#ccc"/>
          </div>
        </div>
      </div>
    </div>
    <audio id="Audio" ref="mAudio" :src="currentSong.url" autoplay loop="loop"> </audio>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Music extends Vue {
  musics: Array<any> = []
  text: string = ''
  isPlay: number = 0
  currentSong: any = {}
  getMusic () {
    if (this.text.trim() !== '') {
      this.$toast.loading({
        mask: true,
        message: '加载中...'
      })
      this.$toGet.getMusics({ name: this.text })
        .then((response: any) => {
          this.musics = response.result
          this.$toast.clear()
        })
        .catch((error: any) => {
          console.log(error)
          this.$toast.clear()
        })
    }
  }
  toPlay (song: any) {
    if (this.currentSong.songid === song.songid && this.isPlay === 1) {
      this.$refs.mAudio.pause()
      this.isPlay = 2
    } else {
      this.currentSong = song
      if (this.isPlay === 2) {
        this.$refs.mAudio.play()
      }
      this.isPlay = 1
    }
  }
  created () {
  }
}
</script>

<style lang="less" scoped>
#Audio{
  display: none;
}
.music-box{
  padding: 10px;
  .music-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 7px;
    overflow: hidden;
    .music-item-left{
      display: flex;
      padding-right: 10px;
      max-width: 80%;
      overflow: hidden;
      img{
        width: 60px;
        height: 60px;
        border-radius: 4px;
        margin-right: 10px;
      }
      b{
        font-size: 1em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p{
        font-size: 0.9em;
        color: #777;
        margin-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
