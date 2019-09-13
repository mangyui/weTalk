<template>
  <div>
    <van-pull-refresh pulling-text="下拉刷新" v-model="isLoading" @refresh="onRefresh">
      <div class="post-box dongtai-box">
        <div class="post-item" v-for="(item,index) in 15" :key="index">
          <div class="post-user">
            <img :src="user.avatar">
            <div class="post-user-text">
              <p>{{user.name}}</p>
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
import User from '@/model/user'
import ImgBox from '@/components/ImgBox.vue'

@Component({
  components: {
    ImgBox
  }
})
export default class UserHomePage extends Vue {
  private user: User = this.$store.getters.user
  isLoading: boolean = false
  isScroll: boolean = false
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
