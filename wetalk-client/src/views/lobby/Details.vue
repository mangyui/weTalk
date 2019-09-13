<template>
  <div class="bgMax max1100">
    <van-nav-bar class="litheme" :border="false" title="帖子详情" fixed left-arrow  @click-left="$store.commit('GOBACK')">
      <van-icon name="ellipsis" slot="right"/>
    </van-nav-bar>
    <van-pull-refresh pulling-text="下拉刷新" v-model="isLoading" @refresh="onRefresh">
      <div class="post-box">
        <div class="post-item">
          <div class="post-user">
            <img src="http://p2.music.126.net/MHIswsnZuYdel2_roaLlYg==/109951164192558480.jpg?param=300x300">
            <div class="post-user-text">
              <p>沙雕</p>
              <span>9/13 21:46</span>
            </div>
            <van-button round size="mini" type="info">关注</van-button>
          </div>
          <div class="post-content">
            <p>突然有一天西游记没经费了，于是师徒四人.....</p>
            <ImgBox :num="4" />
          </div>
          <br />
          <div class="post-san">
            <div><van-icon name="share"/>15</div>
            <div><van-icon name="chat-o" />15</div>
            <div><van-icon name="upgrade" />15</div>
          </div>
        </div>
      </div>
      <div class="post-details-tag">
        <van-image
          fit="cover"
          src="https://p3.ssl.qhimgs1.com/sdr/400__/t014b8f092184fe9f99.png"
        />
        <div class="tag-right">
            <p># 沙雕俱乐部</p>
            <span>666 只沙雕</span>
        </div>
        <van-icon name="arrow" />
      </div>
      <div class="comment-box post-box">
        <div class="post-item" v-for="(item,index) in 15" :key="index">
          <div class="post-user">
            <img src="http://p2.music.126.net/MHIswsnZuYdel2_roaLlYg==/109951164192558480.jpg?param=300x300">
            <div class="post-user-text">
              <p>沙雕</p>
              <span>9/13 21:46</span>
            </div>
            <div class="comment-right-icon">
              <van-icon name="upgrade" />
              <span>8</span>
            </div>
          </div>
          <div class="post-content">
            <p>突然有一天西游记没经费了，于是师徒四人.....</p>
            <ImgBox :num="index" />
          </div>
          <div class="my-right">
            <span class="comment-item-btn">评论</span>
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ImgBox from '@/components/ImgBox.vue'

@Component({
  components: {
    ImgBox
  }
})
export default class PostDetails extends Vue {
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
.post-details-tag{
  margin-bottom: 8px;
  display: flex;
  background: #fff;
  padding: 10px 15px;
  align-items: center;
  .van-image{
    width: 60px;
    height: 60px;
    /deep/ img {
      border-radius: 5px;
    }
  }
  .tag-right{
    padding-left: 10px;
    flex-grow: 1;
    p{
      font-size: 15px;
      margin-bottom: 5px;
      font-weight: bold;
    }
    span{
      font-size: 12px;
      color: #666;
    }
  }
}
.comment-item-btn{
  display: inline-block;
  font-size: 13px;
  color: #7232dd;
  margin-top: 10px;
}
</style>
