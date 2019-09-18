<template>
  <div class="bgMax max1100">
    <van-nav-bar class="litheme" :border="false" title="垃圾识别" fixed left-arrow  @click-left="$store.commit('GOBACK')">
    </van-nav-bar>
    <div v-show="contentImg" class="garbage-box">
      <van-image
        class="garbage-img"
        fit="contain"
        :src="contentImg"
      />
      <p class="text-btn"><span @click="scanGarbage">点击识别</span></p>
      <div v-show="refuseList[0]">
        <div>
          <van-cell-group>
            <van-cell v-for="(item, index) in refuseList" :key="index" :title="item.gname">
              <span v-if="item.gtype=='可回收'" class="class-tag class-tag1" slot="default">{{item.gtype}}</span>
              <span v-if="item.gtype=='有害垃圾'" class="class-tag class-tag2" slot="default">{{item.gtype}}</span>
              <span v-if="item.gtype=='干垃圾'" class="class-tag class-tag3" slot="default">{{item.gtype}}</span>
              <span v-if="item.gtype=='湿垃圾'" class="class-tag class-tag4" slot="default">{{item.gtype}}</span>
            </van-cell>
          </van-cell-group>
        </div>
      </div>
    </div>
    <div class="garbage-img-btn">
      <van-button class="btn-theme" type="info">拍照</van-button>
      <van-uploader
        :after-read="readImg"
        capture="camera"
        :max-count="1">
        <van-button type="info">图库</van-button>
      </van-uploader>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class GarbageImg extends Vue {
  contentImg: any = ''
  imgFlie: any = ''
  refuseList: Array<any> = []
  readImg (file: any) {
    this.contentImg = file.content
    this.imgFlie = file.file
  }
  scanGarbage () {
    let data = new FormData()
    data.append('file', this.imgFlie)
    this.$toPost.garbageImg(data).then((res: any) => {
      console.log(res)
    }).catch((err: any) => {
      console.log(err)
    })
  }
  created () {
  }
}
</script>

<style lang="less" scoped>
.garbage-box{
  padding: 10px 0;
  .garbage-img{
    background-color: #fff;
    width: 100%;
    height: 240px;
    img{
      border-radius: 5px;
    }
  }
}
.garbage-img-btn{
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  display: flex;
  padding: 10px;
  background: rgba(255, 255, 255, 0.8);
  >.van-button{
    width: 50%;
    opacity: 0.8;
  }
  .van-uploader{
    width: 50%;
    /deep/ .van-uploader__input-wrapper,.van-button{
      width: 100%;
      opacity: 0.8;
    }
  }
  .btn-theme{
    margin-right: 10px;
  }
}
.text-btn{
  text-align: center;
  cursor: pointer;
  color: #1989fa;
  padding: 10px;
  span{
    padding: 5px 10px;
    border-radius: 3px;
    &:active{
      background: #c3defa;
    }
  }

}
</style>
