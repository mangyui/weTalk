<template>
  <div>
 <van-pull-refresh pulling-text="下拉刷新" v-model="isLoading" @refresh="onRefresh">
      <div class="post-box">
        <div class="post-item" v-for="(item,index) in 15" :key="index" @click="$store.commit('GOLEFT', '/postdetails/'+index)">
          <div class="post-user">
            <img :src="user.avatar">
            <div class="post-user-text">
              <p>{{user.name}}</p>
              <span>9/13 21:46</span>
            </div>
          </div>
          <div class="post-content">
            <p>突然有一天西游记没经费了，于是师徒四人.....</p>
            <ImgBox :num="index"/>
          </div>
          <b class="post-tag">
            <div>
              <span>#</span><p>沙雕俱乐部</p>
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
import { Component, Vue, Prop } from 'vue-property-decorator'
import User from '@/model/user'
import ImgBox from '@/components/ImgBox.vue'

@Component({
  components: {
    ImgBox
  }
})
export default class UserHomePage extends Vue {
  @Prop() user!: User
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
