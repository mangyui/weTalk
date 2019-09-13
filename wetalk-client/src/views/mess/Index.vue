<template>
  <div class="mess-wrap">
    <van-tabs v-model="active" :border="false" swipeable sticky line-width="26">
      <van-tab title="聊天室" name="m1">
        <talkRoom />
      </van-tab>
      <van-tab title="私信" name="m2">
        <privateChat />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import talkRoom from './TalkRoom.vue'
import privateChat from './PrivateChat.vue'

@Component({
  components: {
    talkRoom,
    privateChat
  }
})
export default class Message extends Vue {
  active: string = 'm1'
  created () {
  }
}
</script>

<style lang="less" scoped>
.mess-wrap{
  height: 100%;
  .van-tabs{
    height: 100%;
    /deep/ .van-tabs__nav--line{
      width: 55%;
      margin: 0 auto;
    }
  }
}
</style>
