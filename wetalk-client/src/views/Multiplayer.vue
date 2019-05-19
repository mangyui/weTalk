<template>
  <div>
   <mu-paper :z-depth="0" class="">
      <mu-appbar :z-depth="0" color="lightBlue400">
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        Contacts
        <mu-button icon slot="right">
          <mu-icon value="search"></mu-icon>
        </mu-button>
      </mu-appbar>
      <mu-list>
        <mu-sub-header>Today</mu-sub-header>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>
              <img src="@/assets/logo.png">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Mike Li</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>
              <img src="@/assets/logo.png">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Maco Mai</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>
              <img src="@/assets/logo.png">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Alex Qin</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>
              <img src="@/assets/logo.png">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Allen Qun</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>
              <img src="@/assets/logo.png">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Myron Liu</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
      <mu-divider></mu-divider>
      <mu-list>
        <mu-sub-header>History</mu-sub-header>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>
              <img src="@/assets/logo.png">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Gaia Zhou</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>
              <img src="@/assets/logo.png">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Miller Wang</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
      <mu-bottom-nav>
        <mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Multiplayer extends Vue {
  public test: string = ''
  public ws: any
  public showTest () {
    console.log(this.test)
    this.createWebsocket()
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
.demo-list-wrap {
  width: 100%;
}
</style>
