<template>
  <div class="bgMax max1100">
    <van-nav-bar class="litheme" :border="false" title="大厅" fixed left-text="话题">
      <van-icon name="search" slot="right"  @click="$store.commit('GOLEFT', '/search')"/>
    </van-nav-bar>
    <van-pull-refresh pulling-text="下拉刷新" v-model="isLoading" @refresh="onRefresh">
      <div class="post-box">
        <div class="post-item" v-for="(item,index) in 15" :key="index" @click="$store.commit('GOLEFT', '/postdetails/'+index)">
          <div class="post-user">
            <img src="http://p2.music.126.net/MHIswsnZuYdel2_roaLlYg==/109951164192558480.jpg?param=300x300">
            <div class="post-user-text">
              <p>沙雕{{index+1}}号</p>
              <span>9/13 21:46</span>
            </div>
          </div>
          <div class="post-content">
            <p>突然有一天西游记没经费了，于是师徒四人.....</p>
            <ImgBox :num="index"/>
          </div>
          <b class="post-tag">
            <div>
              <span>#</span><p>沙雕俱乐部</p><van-icon name="arrow" />
            </div>
          </b>
          <div class="post-san">
            <div><van-icon name="share"/>15</div>
            <div><van-icon name="comment-o" />15</div>
            <div><van-icon name="upgrade" />15</div>
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
export default class Lobby extends Vue {
  isLoading: boolean = false
  onRefresh () {
    setTimeout(() => {
      this.$toast('刷新成功')
      this.isLoading = false
    }, 1000)
  }
  mounted () {
  }
}
</script>

<style lang="less" scoped>

</style>
