<template>
  <div class="audioBox" v-show="currentSong&&isPlay==1" @click="$store.commit('TOPAUSE')">
    <van-circle
      v-model="timeNow"
      :rate="timeDuration"
      :stroke-width="100"
      :color="gradientColor"
      size="40px"
    />
    <van-icon class="pause-icon" name="pause" color="#ee0a24"/>
    <audio id="Audio" ref="mAudio" @timeupdate="updateTime" :src="currentSong.url" autoplay loop="loop"> </audio>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component
export default class AudioBox extends Vue {
  @Getter isPlay!: number // ！声明肯定会有值
  @Getter currentSong!: any

  timeNow: number = 0
  timeDuration: number = 100
  gradientColor: object = {
    '0%': '#ffd01e',
    '100%': '#ee0a24'
  }
  @Watch('isPlay')
  changeAge (newValue: number, oldValue: number) {
    let au: any = document.getElementById('Audio')
    if (newValue === 2) {
      au.pause()
    } else if (newValue === 1 && oldValue === 2) {
      au.play()
    }
  }
  // getDuration () { // 该方法只走一首歌还好，点另一首就NaN
  //   this.timeDuration = this.$refs.mAudio.duration
  // }
  updateTime (e: any) {
    this.timeNow = parseInt(e.target.currentTime) / parseInt(e.target.duration) * 100
  }
}
</script>

<style lang="less" scoped>
#Audio{
  display: none;
}
.audioBox{
  position: fixed;
  right: 30px;
  bottom: 70px;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(241, 48, 35, 0.5);
  border-radius: 15px;
  font-size: 0;
  padding: 6px;
  opacity: 0.8;
  transition: all 0.28s ease;
  transform: translate(0%, 0);
  text-align: center;
  animation: Mybling .3s infinite alternate;
  .pause-icon{
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    font-size: 24px;
  }
}
@keyframes Mybling{
  from{
      box-shadow: 0 0 5px rgba(241, 48, 35, 0.3);
  }
  to{
      box-shadow: 0 0 15px rgba(241, 48, 35, 0.6);
  }
}
</style>
