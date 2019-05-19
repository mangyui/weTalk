<template>
  <div class="talk-room">
    <mu-paper :z-depth="0" class="demo-list-wrap">
      <mu-appbar :z-depth="0" color="cyan">
        <mu-button icon slot="left" @click="toback">
          <mu-icon value="arrow_back"></mu-icon>
        </mu-button>
        世界聊天室
        <mu-button icon slot="right">
          <mu-icon value="person"></mu-icon>
        </mu-button>
      </mu-appbar>
      <div class="mess-box">
        <div class="mess-list">
          <div class="mess-item" v-for="(item,index) in msgList" :key="index">
            <mu-avatar>M</mu-avatar>
            <div class="mess-item-right">
              <span>名字</span>
              <p class="mess-item-content">{{item.msg}}</p>
              <p class="mess-item-time">19/05/18 22:51:22</p>
            </div>
          </div>
        </div>
      </div>
    </mu-paper>
    <div class="talk-bottom">
      <div class="talk-send">
        <textarea v-model="sendText" rows="1" name="text"></textarea>
        <mu-button @click="toSend" color="primary" :disabled="sendText==''?true:false">发送</mu-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class WorldRoom extends Vue {
  sendText: string = ''
  msgList: Array<Object> = [{
    msg: '这是一段话一段话一段话一段话一段话一段话一段话一段话一段话'
  }]
  public ws: any
  createWebsocket () {
    this.ws = new WebSocket('ws://localhost:9615')
    this.ws.onopen = (e: any) => {
      console.log('connection established')
      this.ws.send('send: created')
    }
    this.ws.onmessage = (e: any) => {
      console.log(e.data)
      this.msgList.push({ msg: e.data })
      this.$nextTick(() => {
        try {
          const msgEl = document.querySelector('.mess-list > .mess-item:last-child')
          if (msgEl) msgEl.scrollIntoView()
        } catch (err) {
          console.error(err)
        }
      })
    }
  }
  toSend () {
    if (this.sendText !== '') {
      this.ws.send(this.sendText)
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
  .mess-item{
    display: flex;
    align-items: top;
    width: calc(100% - 55px);
    margin: 10px 0;
    .mu-avatar{
      flex-shrink: 0;
    }
    .mess-item-right{
      margin-left: 15px;
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
        font-size: 13px;
        padding: 9px 14px;
        background: #fff;
        border-radius: 3px;
        box-shadow: 0 1px 1px rgba(0,0,0,0.1);
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
}
.talk-room{
  .mu-paper-round{
    height: calc(100% - 37px);
  }
}
.talk-bottom{
  position: fixed;
  bottom: 0;
  width: 100%;
  .talk-send{
    display: flex;
    padding: 2px 5px;
    align-items: flex-end;
    textarea{
      flex-grow: 1;
      min-height: 36px;
      max-height: 240px;
      border: 1px solid #cccc;
      border-radius: 2px 0 0 2px;
    }
  }
}
</style>
