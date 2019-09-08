<template>
  <div class="talk-room">
    <van-nav-bar fixed :title="'世界频道(' + myTalk.numberP + ')'" left-text="返回" left-arrow  @click-left="$store.commit('GOBACK')">
      <van-icon name="weapp-nav" slot="right" />
    </van-nav-bar>
    <div class="content-wrap">
     <van-notice-bar
        text="该聊天室内，所有都可见"
        left-icon="volume-o"
        mode="closeable"
      />
      <div class="mess-box" :style="{paddingBottom: isMore!=0?'160px':'55px'}">
        <div class="mess-list">
          <div class="list-item" v-for="(item,index) in msgList" :key="index">
            <div class="mess-item" v-if="item.type==1&&item.user.id!=user.id">
              <div class="mu-avatar">
                <img :src="item.user.avatar">
                <img class="icon-sex" :src="item.user.sex==1?require('@/assets/img/male.svg'):require('@/assets/img/female.svg')">
              </div>
              <div class="mess-item-right">
                <span>{{item.user.name}}</span>
                <p class="mess-item-content">{{item.content}}</p>
                <p class="mess-item-time">{{item.time}}</p>
              </div>
            </div>
            <div class="mess-item-me" v-else-if="item.type==1&&item.user.id==user.id">
              <div class="mu-avatar">
                <img :src="user.avatar">
                <img class="icon-sex" :src="user.sex==1?require('@/assets/img/male.svg'):require('@/assets/img/female.svg')">
              </div>
              <div class="mess-item-right">
                <span>{{user.name}}</span>
                <p class="mess-item-content" @touchstart="gtouchstart(index)" @touchend="gtouchend">{{item.content}}</p>
                <p class="mess-item-time">{{item.time}}</p>
              </div>
            </div>
            <div v-show="isShowInOut" class="mess-system" v-else>
              {{item.content}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <InputBox @changeMore="changeMore" @toSend="toSend"></InputBox>
    <van-action-sheet
      v-model="showMore"
      :actions="actions"
      cancel-text="取消"
      @select="onSelect"
      @cancel="showMore=false"
    />
  </div>
</template>

<script lang="ts">
// 😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😓 😪 😴 🙄 🤔 😬 🤐
import Message from '../model/message'
import User from '../model/user'
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class' // mapGetters 不适用
import MyTalk from '@/util/MyTalk'
import InputBox from '@/components/InputBox.vue' // 要写完整.vue

@Component({
  components: {
    InputBox
  }
})
export default class WorldRoom extends Vue {
  @Getter user!: User // ！声明肯定会有值
  @Getter msgList!: Message[]
  @Getter isShowInOut!: boolean

  myTalk!: MyTalk
  isMore: number = 0

  mIndex: number = -1
  showMore: boolean = false
  timeOutEvent: any
  actions: Array<any> = [
    { name: '复制' },
    { name: '撤回' }
  ]

  changeMore (newValue: number): void {
    this.isMore = newValue
  }
  backMess (index: number): void {
    this.myTalk.backoutMess(this.msgList[index])
  }
  toSend (sendText: string): void {
    if (sendText !== '') {
      this.myTalk.creatSending(sendText, 1)
    }
  }
  gtouchstart (mIndex: number) {
    // 开始触摸
    this.timeOutEvent = setTimeout(() => {
      this.showMore = true
      this.mIndex = mIndex
    }, 666)
  }
  gtouchend () {
    clearTimeout(this.timeOutEvent)
  }
  onSelect (item: any, index: number) {
    if (index === 1) {
      this.backMess(this.mIndex)
    }
    this.showMore = false
  }
  created () {
    this.myTalk = new MyTalk(this.user, 0)
    this.myTalk.createWebsocket()
  }
  beforeDestroy () {
    this.myTalk.creatSending(this.user.name + ' 退出聊天室', -1)
    this.myTalk.ws.close()
  }
}
</script>
