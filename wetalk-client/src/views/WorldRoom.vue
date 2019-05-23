<template>
  <div class="talk-room">
    <mu-paper :z-depth="0" class="demo-list-wrap">
      <mu-appbar :z-depth="0" color="cyan">
        <mu-button icon slot="left" @click="toback">
          <mu-icon value="arrow_back"></mu-icon>
        </mu-button>
        世界聊天室
        <mu-badge class="barBadge" :content="number" slot="right" circle color="secondary">
          <mu-icon value="person"></mu-icon>
        </mu-badge>
      </mu-appbar>
      <div class="mess-box">
        <div class="mess-list">
          <div class="list-item" v-for="(item,index) in msgList" :key="index">
            <div class="mess-item" v-if="item.type==1&&item.user.id!=user.id">
              <mu-avatar>
                <img :src="item.user.avatar">
                <img class="icon-sex" :src="item.user.sex=='男'?require('@/assets/img/male.svg'):require('@/assets/img/female.svg')" alt="">
              </mu-avatar>
              <div class="mess-item-right">
                <span>{{item.user.name}}</span>
                <p class="mess-item-content">{{item.content}}</p>
                <p class="mess-item-time">{{item.time}}</p>
              </div>
            </div>
            <div class="mess-item-me" v-else-if="item.type==1&&item.user.id==user.id">
              <mu-avatar>
                <img :src="user.avatar">
                <img class="icon-sex" :src="user.sex=='男'?require('@/assets/img/male.svg'):require('@/assets/img/female.svg')" alt="">
              </mu-avatar>
              <div class="mess-item-right">
                <span>{{user.name}}</span>
                <p class="mess-item-content">{{item.content}}</p>
                <p class="mess-item-time">{{item.time}}</p>
              </div>
            </div>
            <div class="mess-system" v-else>
              {{item.content}}
            </div>
          </div>
        </div>
      </div>
    </mu-paper>
    <div class="talk-bottom">
      <div class="talk-send">
        <textarea v-model="sendText" @keyup.enter="toSend" rows="1" name="text"></textarea>
        <mu-button @click="toSend" color="primary" :disabled="sendText==''?true:false">发送</mu-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Message from '../model/message'
import User from '../model/user'
import { Component, Vue } from 'vue-property-decorator'
import { mapState, mapMutations, mapGetters } from 'vuex'

@Component({
  computed: {
    // ...mapGetters(['user', 'msgList'])  ??????
  },
  methods: {
    ...mapMutations(['addMsg'])
  }
})
export default class WorldRoom extends Vue {
  sendText: string = ''
  number: string = '0' // ui组件要string型的
  // mesgLists: Array<Object> = []
  ws: any
  private user: User = this.$store.getters.user
  private msgList: Message[] = this.$store.getters.msgList
  public createWebsocket () {
    this.ws = new WebSocket('ws://mccyu.com:9615')
    this.ws.onopen = (e: any) => {
      // console.log('connection established')
      this.creatSending(this.user.name + ' 进入聊天室', 0)
    }
    this.ws.onmessage = (e: any) => {
      // console.log(e)
      var resData = JSON.parse(e.data)
      // console.log(message.user, this.user, message.user === this.user)
      // this.mesgLists.push({ message })
      this.$store.commit('addMsg', resData.message)
      if (resData.message.type === -1) {
        this.number = (resData.number - 1) + ''
      } else {
        this.number = resData.number + ''
      }
      // console.log(this.msgList)
      this.$nextTick(() => {
        try {
          const msgEl = document.querySelector('.mess-list .list-item:last-child')
          if (msgEl) {
            msgEl.scrollIntoView()
          }
        } catch (err) {
          console.error(err)
        }
      })
    }
  }
  creatSending (content: string, type: number) {
    var time = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    var message = new Message(time, content, type, type === 1 ? this.user : null)
    var data = {
      message: message
    }
    this.ws.send(JSON.stringify(data))
  }
  toSend () {
    if (this.sendText !== '') {
      this.creatSending(this.sendText, 1)
      this.sendText = ''
    }
  }
  toback () {
    this.$router.push('/')
  }
  created () {
    this.createWebsocket()
  }
  beforeDestroy () {
    this.creatSending(this.user.name + ' 退出聊天室', -1)
    this.ws.close()
  }
}
</script>

<style lang="less">
.mu-paper-round{
  background: #fafafa;
}
.mess-box{
  text-align: left;
  padding: 0 10px 10px;
  height: calc(100% - 37px);
  overflow: auto;
  .mess-system{
    text-align: center;
    margin: 9px 0;
    font-size: 12px;
    color: #aaa;
  }
  .mess-item,.mess-item-me{
    display: flex;
    align-items: top;
    padding-right: 40px;
    margin: 10px 0;
    .mu-avatar{
      flex-shrink: 0;
      position: relative;
      .icon-sex{
        position: absolute;
        right: -4px;
        bottom: -8px;
        width: 20px;
        background: #fff;
        height: 20px;
      }
    }
    .mess-item-right{
      margin-left: 15px;
      margin-right: 15px;
      flex-grow: 1;
      width: 0;
      span{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
      }
      p.mess-item-content{
        margin: 0;
        font-size: 14px;
        padding: 10px 14px;
        background: #fff;
        border-radius: 3px;
        box-shadow: 0 1px 1px rgba(0,0,0,0.1);
        position: relative;
        &::after{
          display: block;
          content: '';
          border: 7px solid;
          border-width: 5px 7px;
          position: absolute;
          top: 2px;
          right: 100%;
          border-color: transparent #fff transparent transparent;
        }
      }
      p.mess-item-time{
        margin: 0;
        text-align: right;
        font-size: 12px;
        color: #777;
        letter-spacing: 0.8px;
      }
    }
  }
  .mess-item-me{
    flex-direction: row-reverse;
    padding-left: 40px;
    padding-right: 0px;
    .mess-item-right{
      span{
        text-align: right
      }
      p.mess-item-content{
        background: #2196f3;
        color: #fff;
        &:after{
          right: unset;
          left: 100%;
          border-color: transparent transparent transparent #2196f3;
        }
      }
      p.mess-item-time{
        text-align: left
      }
    }
  }
}
.talk-room{
  .mu-paper-round{
    height: calc(100% - 56px);
  }
}
.talk-bottom{
  position: fixed;
  bottom: 0;
  width: 100%;
  .talk-send{
    display: flex;
    padding: 5px 5px;
    align-items: flex-end;
    background: #fefefe;
    box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
    textarea{
      flex-grow: 1;
      min-height: 36px;
      max-height: 240px;
      border: 1px solid #cccc;
      border-radius: 2px;
      margin-right: 5px;
    }
  }
}
</style>
