<template>
  <div class="bgWhite max1100">
    <van-nav-bar fixed title="听一听" left-arrow @click-left="$store.commit('GOBACK')" ></van-nav-bar>
    <van-search
      v-model="text"
      placeholder="搜索音乐"
      @search="getMusic"
    />
    <div class="list-box">
      <div class="list-item" v-for="(item, index) in musics" :key="index" @click="toPlay(item)">
        <div class="list-item-left">
          <img v-lazy="item.pic">
          <div>
            <b>{{item.title}}</b>
            <p>{{item.author}}</p>
          </div>
        </div>
        <div class="list-item-right">
          <div v-if="isPlay!=0&&currentSong.songid==item.songid">
            <van-icon v-if="isPlay==1" name="pause-circle" color="#00a7ff"/>
            <van-icon v-else name="play-circle" color="#ccc"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component
export default class Music extends Vue {
  @Getter isPlay!: number // ！声明肯定会有值
  @Getter currentSong!: any
  @Getter city!: string
  musics: Array<any> = []
  text: string = ''
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
    if (this.currentSong.songid === song.songid) {
      if (this.isPlay === 1) {
        this.$store.commit('TOPAUSE')
      } else {
        this.$store.commit('TOJIXU')
      }
    } else {
      this.$store.commit('TOPLAY', song)
    }
  }
  created () {
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/listitem.less';
.list-box .list-item .list-item-left img{
  border-radius: 50%;
}
</style>
