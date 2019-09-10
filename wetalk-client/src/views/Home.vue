<template>
  <div class="home">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/home/lobby" icon="wap-home">
        大厅
      </van-tabbar-item>
      <van-tabbar-item replace to="/home/usercenter" icon="manager">
        我
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
