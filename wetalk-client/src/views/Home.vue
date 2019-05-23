<template>
  <div class="home">
    <router-view />
    <mu-bottom-nav :value.sync="tab" @change="changeTab">
      <mu-bottom-nav-item value="labby" title="大厅" icon="home"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="usercenter" title="我" icon="account_circle"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class Home extends Vue {
  private tab: string = 'labby'
  changeTab () {
    if (this.tab === 'labby') {
      this.$router.push('/home/lobby')
    } else {
      this.$router.push('/home/usercenter')
    }
  }
  created () {
    if (this.$route.name === 'UserCenter') {
      this.tab = 'usercenter'
    }
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
