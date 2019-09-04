<template>
  <div class="talk-bottom">
    <div class="talk-send">
      <textarea v-model="sendText" rows="1" name="text"></textarea>
      <van-icon name="smile-o" size="34px" @click="isMore=(isMore!=2?2:0)"/>
      <van-button v-show="sendText!=''" @click="toSend" type="danger">发送</van-button>
      <van-icon v-show="sendText==''" name="add-o" @click="isMore=(isMore!=1?1:0)" size="34px"/>
    </div>
    <div v-show="isMore==2" class="add-more">
      <div>

      </div>
    </div>
    <div v-show="isMore==1" class="add-more">
      <div><van-icon name="photo" size="30px" color="#1989fa"></van-icon><p>图片</p></div>
      <div><van-icon name="volume" size="30px" color="#f44"></van-icon><p>语音</p></div>
    </div>
  </div>
</template>

<script lang="ts">
// 😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😓 😪 😴 🙄 🤔 😬 🤐
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class InputBox extends Vue {
  sendText: string = ''
  isMore: number = 0
  @Watch('isMore')
  changeAge (newValue: number, oldValue: number) {
    console.log(`newValue: ${newValue}, oldValue: ${oldValue}`)
    this.$emit('changeMore', this.isMore)
  }
  public toSend (): any {
    if (this.sendText !== '') {
      this.$emit('toSend', this.sendText)
      this.sendText = ''
    }
  }
}
</script>

<style lang="less" scoped>
.add-more{
  background: #fdfdfd;
  display: flex;
  justify-content: space-evenly;
  padding: 25px 0;
  color: #666;
}
</style>
