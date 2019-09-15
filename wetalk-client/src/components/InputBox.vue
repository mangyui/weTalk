<template>
  <div class="talk-bottom">
    <div class="talk-send">
      <textarea class="input-mess" v-model="sendText" rows="1" name="text" @focus="isMore=0"></textarea>
      <van-icon class="input-icon" name="smile-o" @click="isMore=(isMore!=2?2:0)"/>
      <van-button v-show="sendText!=''" @click="toSend" type="danger">发送</van-button>
      <van-icon v-if="isPic" class="input-icon" v-show="sendText==''" name="add-o" @click="isMore=(isMore!=1?1:0)"/>
    </div>
    <div class="send-more" :style="isMore==0?'height: 0':''">
      <div v-show="isMore==2" class="emoticon-box">
        <span v-for="(item, index) in Emoticon" :key="index" @click="sendText+=item">
          {{item}}
        </span>
      </div>
      <div v-show="isMore==1" class="add-more">
        <div>
          <van-uploader>
            <van-icon class="input-icon" name="photo" color="#1989fa"></van-icon><p>图片</p>
          </van-uploader>
        </div>
        <div><van-icon class="input-icon" name="volume" color="#f44"></van-icon><p>语音</p></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'

@Component
export default class InputBox extends Vue {
  @Prop() isPic!: boolean
  sendText: string = ''
  isMore: number = 0
  Emoticon: Array<any> = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '😊',
    '😇', '🙂', '🙃', '😉', '😓', '😪', '😴', '🙄', '🤔', '😬', '🤐'
  ]
  @Watch('isMore')
  changeAge (newValue: number, oldValue: number) {
    // console.log(`newValue: ${newValue}, oldValue: ${oldValue}`)
    this.$emit('changeMore', this.isMore)
  }
  public noMore () {
    this.isMore = 0
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
.send-more{
  padding: 0 10px;
  height: 150px;
  display: flex;
  align-items: center;
  background: #fdfdfd;
  overflow: hidden;
  transition: 0.1s;
}
.add-more{
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  padding: 25px 0;
  color: #666;
}
.input-mess{
  font-size: 16px;
  resize:none;
  padding: 5px 5px 0;
}
.input-icon{
  font-size: 30px;
}
.emoticon-box{
  padding: 0 5px;
  display: flex;
  flex-wrap: wrap;
  span{
    display: inline-block;
    text-align: center;
    width: 49px;
    font-size: 20px;
    margin-bottom: 10px;
  }
}
</style>
