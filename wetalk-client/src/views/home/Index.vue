<template>
  <div class="home">
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar v-model="isActive" route @change="tabbarChange">
      <van-tabbar-item replace to="/home/lobby" @click="toTop(0)">
        <span>大厅</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? './icons/home_a.svg' : './icons/home.svg'"
        >
      </van-tabbar-item>
      <van-tabbar-item replace to="/home/refuseclass"  @click="toTop(1)">
        <span>乐分</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? './icons/dongtai_a.svg' : './icons/dongtai.svg'"
        >
      </van-tabbar-item>
      <div class="home-add-icon" @click="$store.commit('GOLEFT', '/postadd')">
        <van-icon name="plus" />
      </div>
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
  isActive: number = 0
  isTop: boolean = false
  toTop (index: number) {
    if (this.isActive === index && this.isTop) {
      let app: any = document.getElementById('app')
      app.scrollTop = 0
    }
    this.isTop = true
  }
  tabbarChange () {
    this.isTop = false
  }
  created () {
  }
}
</script>
