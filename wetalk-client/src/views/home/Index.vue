<template>
  <div class="home">
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar route>
      <van-tabbar-item replace to="/home/lobby">
        <span>大厅</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? './icons/home_a.svg' : './icons/home.svg'"
        >
      </van-tabbar-item>
      <van-tabbar-item replace to="/home/dynamic">
        <span>动态</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? './icons/dongtai_a.svg' : './icons/dongtai.svg'"
        >
      </van-tabbar-item>
      <van-tabbar-item replace to="/home/message">
        <span>消息</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? './icons/message_a.svg' : './icons/message.svg'"
        >
      </van-tabbar-item>
      <van-tabbar-item replace to="/home/usercenter">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? './icons/me_a.svg' : './icons/me.svg'"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class Home extends Vue {
  created () {
  }
}
</script>
