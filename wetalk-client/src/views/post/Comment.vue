<template>
  <div class="bgWhite max1100">
    <van-nav-bar class="litheme" :border="false" title="评论帖子" fixed left-arrow
      @click-left="$store.commit('GOBACK')"
       />
    <van-pull-refresh pulling-text="下拉刷新" v-model="isLoading" @refresh="onRefresh">
      <div class="post-box">
        <div class="post-item">
          <div class="post-user">
            <img src="http://p2.music.126.net/MHIswsnZuYdel2_roaLlYg==/109951164192558480.jpg?param=300x300">
            <div class="post-user-text">
              <p>沙雕</p>
              <span>9/13 21:46</span>
            </div>
          </div>
          <div class="post-content">
            <p>突然有一天西游记没经费了，于是师徒四人.....</p>
            <ImgBox :num="4" />
          </div>
        </div>
      </div>
    </van-pull-refresh>
    <div class="comment-line">评论TA</div>
    <van-field
      v-model="text"
      type="textarea"
      placeholder="请输入评论内容"
      rows="3"
      autosize
    />
    <div class="pad15">
      <van-uploader
        v-model="fileList"
        multiple
        :max-count="9"
      />
    </div>
    <van-button class="max-btn" type="info" @click="toPublish">发表评论</van-button>
    <br />
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
export default class PostComment extends Vue {
  text: string =''
  fileList: Array<any> = []
  isLoading: boolean = false
  onRefresh () {
    setTimeout(() => {
      this.$toast('刷新成功')
      this.isLoading = false
    }, 1000)
  }
  toPublish () {
    if (this.text.trim() === '') {
      this.$toast('你输入点内容会死吗？')
      return
    }
    console.log(this.fileList)
    this.$dialog.confirm({
      title: '确认评论该帖子？'
    }).then(() => {
      this.text = ''
      this.fileList = []
    }).catch(() => {
      // on cancel
    })
  }
  created () {
  }
}
</script>
