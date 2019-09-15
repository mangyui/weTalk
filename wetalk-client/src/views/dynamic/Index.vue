<template>
  <div class="bgMax max1100">
    <van-nav-bar class="litheme" :border="false" title="动态圈" fixed right-text="发动态"
      @click-right="$store.commit('GOLEFT', '/dynamicadd')"
    >
    </van-nav-bar>
    <van-pull-refresh pulling-text="下拉刷新" v-model="isLoading" @refresh="onRefresh">
      <div class="post-box dongtai-box">
        <div class="post-item" v-for="(item,index) in 15" :key="index"  @click="$store.commit('GOLEFT', '/dynamicdetails/'+index)">
          <div class="post-user">
            <img src="http://p2.music.126.net/MHIswsnZuYdel2_roaLlYg==/109951164192558480.jpg?param=300x300">
            <div class="post-user-text">
              <p>泡泡鱼{{index}}号</p>
            </div>
            <span>9/13 17:12</span>
          </div>
          <div class="post-content">
            <p>今天天气很好，适合睡觉.....</p>
            <ImgBox :num="index" />
          </div>
          <div class="post-san">
            <div><van-icon name="eye-o"/>15</div>
            <div class="post-san-right"><van-icon name="chat-o" /><van-icon name="good-job-o" /></div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ImgBox from '@/components/ImgBox.vue'
import MSTminxin from '@/util/MSTminxin'

@Component({
  components: {
    ImgBox
  },
  mixins: [MSTminxin]
})
export default class Dynamic extends Vue {
  isLoading: boolean = false
  onRefresh () {
    setTimeout(() => {
      this.$toast('刷新成功')
      this.isLoading = false
    }, 1000)
  }
}
</script>

<style lang="less" scoped>
</style>
