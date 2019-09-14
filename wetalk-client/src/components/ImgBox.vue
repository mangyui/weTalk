<template>
  <div>
    <div v-if="imgList.length==1" class="img1-box">
      <img :src="imgList[0]" @click.stop="toShowImg(0)">
    </div>
    <div v-else :class="imgList.length==4?'img9-box img4-box':'img9-box'">
      <div v-for="(imgitem,imgindex) in imgList" :key="imgindex"  @click.stop="toShowImg(imgindex)">
        <van-image
          fit="cover"
          lazy-load
          :src="imgitem"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ImgBox extends Vue {
  @Prop() num!: number
  showImg: boolean = false
  imgList: Array<any> = []
  created () {
    for (let i = 0; i < this.num; i++) {
      this.imgList.push('https://img.zcool.cn/community/013a835d78c419a801211d53128042.jpg@260w_195h_1c_1e_1o_100sh.jpg')
    }
    if (this.imgList.length > 9) {
      this.imgList.splice(9)
    }
  }
  toShowImg (index: number) {
    this.$ImagePreview({
      images: this.imgList,
      startPosition: index,
      closeOnPopstate: true,
      loop: false,
      lazyLoad: true
    })
  }
}
</script>

<style lang="less" scoped>
.img1-box{
  img{
    max-width: 100%;
    max-height: 240px;
    border-radius: 5px;
  }
}
.img9-box{
  display: flex;
  flex-wrap: wrap;
  >div{
    font-size: 0;
    margin-right: 7.5px;
    margin-top: 7.5px;
    &:nth-child(3n){
      margin-right: 0;
    }
  }
  .van-image{
    width: 110px;
    height: 110px;
    /deep/ img{
      border-radius: 5px;
    }
  }
}

.img4-box{
  >div{
    margin-right: 7.6px;
    &:nth-child(3n){
      margin-right: 7.6px;
    }
  }
}
</style>
