<template>
  <div>
    <mu-paper :z-depth="0" class="">
      <mu-appbar :z-depth="0" color="lightBlue400">
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        大厅
        <mu-menu slot="right">
          <mu-button icon>
            <mu-icon value="add"></mu-icon>
          </mu-button>
          <mu-list slot="content">
            <mu-list-item button>
              <mu-list-item-content>
                <mu-list-item-title>查找聊友</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
          </mu-list>
        </mu-menu>
      </mu-appbar>
      <mu-list>
        <mu-sub-header>Today</mu-sub-header>
        <router-link to="/WorldRoom">
          <mu-list-item avatar button :ripple="false">
            <mu-list-item-action>
              <mu-avatar>
                <img src="@/assets/logo.png">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-title>世界聊天室</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="chat_bubble" color="#2196f3"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
        </router-link>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>
              <img src="@/assets/logo.png">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>多人聊天室</mu-list-item-title>
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
          <mu-list-item-title>单人聊天室</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </mu-paper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Lobby extends Vue {
}
</script>
