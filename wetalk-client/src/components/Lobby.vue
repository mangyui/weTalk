<template>
  <div>
    <mu-paper :z-depth="0" class="">
      <mu-appbar :z-depth="0" color="lightBlue400">
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        大厅
        <mu-button icon slot="right">
          <mu-icon value="add"></mu-icon>
        </mu-button>
      </mu-appbar>
      <mu-list>
        <router-link to="/WorldRoom">
          <mu-list-item avatar button :ripple="false">
            <mu-list-item-action>
              <mu-avatar color="#2196f3">
                <mu-icon value="public"></mu-icon>
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
            <mu-avatar color="#2196f3">
              <mu-icon value="group_add"></mu-icon>
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>多人聊天室</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="speaker_notes_off"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar color="#2196f3">
              <mu-icon value="people"></mu-icon>
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>双人聊天室</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="speaker_notes_off"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar color="#2196f3">
              <mu-icon value="person"></mu-icon>
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>自言自语室</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="speaker_notes_off"></mu-icon>
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

<style lang="less" scoped>
.mu-list{
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
</style>
