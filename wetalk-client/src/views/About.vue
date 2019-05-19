<template>
  <div class="about">
    <Lobby></Lobby>
    <mu-bottom-nav>
      <mu-bottom-nav-item title="大厅" icon="restore"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="我" icon="location_on"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Lobby from '@/components/Lobby.vue'

@Component({
  components: {
    Lobby
  }
})
export default class About extends Vue {
  public test: string = ''
  public ws: any
  public showTest () {
    console.log(this.test)
    // this.createWebsocket()
  }
  createWebsocket () {
    this.ws = new WebSocket('ws://localhost:8181')
    this.ws.onopen = (e: any) => {
      console.log('connection established')
      this.ws.send('send: created')
    }
    this.ws.onmessage = (e: any) => {
      console.log(e.data)
    }
  }
  created () {
    console.log('dsad')
    this.showTest()
  }
}
</script>

<style lang="less">
.about{
  .mu-bottom-nav-shift-wrapper{
    justify-content: space-around;
  }
  .mu-paper-round{
    height: calc(100% - 56px);
  }
}
</style>
