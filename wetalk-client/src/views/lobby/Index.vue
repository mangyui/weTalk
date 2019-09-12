<template>
  <div class="bgMax">
    <van-nav-bar class="litheme" :border="false" title="大厅" fixed>
      <van-icon name="plus" slot="right" />
    </van-nav-bar>
    <van-pull-refresh pulling-text="下拉刷新" v-model="isLoading" @refresh="onRefresh">
      <div class="post-box">
        <div class="post-item" v-for="(item,index) in 15" :key="index">
          <div class="post-user">
            <img src="http://p2.music.126.net/MHIswsnZuYdel2_roaLlYg==/109951164192558480.jpg?param=300x300">
            <p>沙雕{{index}}号</p>
          </div>
          <div class="post-content">
            <p>突然有一天西游记没经费了，于是师徒四人.....</p>
            <img src="http://img3.imgtn.bdimg.com/it/u=2626141675,3645652680&fm=26&gp=0.jpg" @click="toShowImg('http://img3.imgtn.bdimg.com/it/u=2626141675,3645652680&fm=26&gp=0.jpg')">
          </div>
          <b class="post-tag">
            # 沙雕俱乐部
          </b>
          <div class="post-san">
            <div><van-icon name="share"/>15</div>
            <div><van-icon name="chat-o" />15</div>
            <div><van-icon name="good-job-o" />15</div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
    <van-image-preview
      v-model="showImg"
      :images="imgs"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Lobby extends Vue {
  isLoading: boolean = false
  showImg: boolean = false
  imgs: Array<any> = []
  onRefresh () {
    setTimeout(() => {
      this.$toast('刷新成功')
      this.isLoading = false
    }, 1000)
  }
  toShowImg (img: string) {
    this.imgs[0] = img
    this.showImg = true
  }
}
</script>

<style lang="less" scoped>
.post-box{
  .post-item{
    padding: 15px;
    border-bottom: 8px solid #f8f8f8;
    background: #fefefe;
    .post-user{
      display: flex;
      align-items: center;
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      p{
        flex-grow: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-left: 15px;
        color: #666;
      }
    }
    .post-content{
      p{
        font-weight: bold;
        width: 100%;
        margin: 10px 0;
        max-height: 100px;
        overflow: hidden;
        font-size: 15px;
      }
      img{
        max-height: 240px;
        border-radius: 5px;
      }
    }
    .post-tag{
      display: inline-block;
      background: #dfd7ff;
      border-radius: 100px;
      padding: 5px 15px;
      margin: 10px 0;
    }
    .post-san{
      display: flex;
      justify-content: space-around;
      margin-top: 5px;
      >div{
        display: flex;
        align-items: center;
        .van-icon{
          font-size: 26px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
