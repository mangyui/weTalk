<template>
  <div class="bgMax max1100">
    <van-nav-bar class="litheme" :border="false" title="动态详情" fixed left-arrow  right-text="评论"
      @click-left="$store.commit('GOBACK')"
      @click-right="$store.commit('GOLEFT', '/dynamiccomment/1')" />
    <van-pull-refresh pulling-text="下拉刷新" v-model="isLoading" @refresh="onRefresh"  @click.native="isComment=false">
      <div class="dongtai-box post-box">
        <div class="post-item">
          <div class="post-user">
            <img src="https://img.zcool.cn/community/0104925d750033a801211d539d57f2.jpg@260w_195h_1c_1e_1o_100sh.jpg">
            <div class="post-user-text">
              <p>沙雕</p>
              <span>9/13 21:46</span>
            </div>
            <van-button round size="mini" type="info">关注</van-button>
          </div>
          <div class="post-content">
            <p class="p-max">突然有一天西游记没经费了，于是师徒四人.....</p>
            <ImgBox :num="4" />
          </div>
          <br />
          <div class="post-san">
            <div><van-icon name="eye-o"/>15</div>
            <div class="post-san-right"><van-icon name="chat-o" /><van-icon name="good-job-o" /></div>
          </div>
        </div>
      </div>
      <div class="comment-line">评论</div>
      <div class="comment-box post-box">
        <div class="post-item" v-for="(item,index) in 15" :key="index">
          <div class="post-user">
            <img src="http://p2.music.126.net/MHIswsnZuYdel2_roaLlYg==/109951164192558480.jpg?param=300x300">
            <div class="post-user-text">
              <p>沙雕</p>
              <span>9/13 21:46</span>
            </div>
          </div>
          <div class="post-content">
            <p>突然有一天西游记没经费了，于是师徒四人.....</p>
            <ImgBox :num="index" />
          </div>
          <div class="my-right">
            <span class="comment-item-btn" @click.stop="isComment=true">回复</span>
          </div>
        </div>
      </div>
    </van-pull-refresh>
    <InputBox v-if="isComment" @toSend="toSend"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ImgBox from '@/components/ImgBox.vue'
import InputBox from '@/components/InputBox.vue'

@Component({
  components: {
    ImgBox,
    InputBox
  }
})
export default class DynamicDetails extends Vue {
  isLoading: boolean = false
  isComment: boolean = false
  onRefresh () {
    setTimeout(() => {
      this.$toast('刷新成功')
      this.isLoading = false
    }, 1000)
  }
  toSend () {

  }
}
</script>

<style lang="less" scoped>
.comment-right-icon{
  display: flex;
  align-items: center;
  // background: #e8e2ff;
  border: 1px solid #e8e2ff;
  padding: 3px 5px 3px 5px;
  width: 50px;
  border-radius: 50px;
  .van-icon{
    font-size: 18px;
    margin-right: 10px;
  }
}
.comment-item-btn{
  display: inline-block;
  font-size: 13px;
  color: #7232dd;
  margin-top: 10px;
}
</style>
