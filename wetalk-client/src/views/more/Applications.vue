<template>
  <div class="bgWhite max1100">
    <van-nav-bar class="litheme" :border="false" fixed title="用一用" left-arrow @click-left="$store.commit('GOBACK')" ></van-nav-bar>
    <van-search
      v-model="text"
      placeholder="搜索小应用"
      @search="getSearch"
    />
    <div class="list-box">
      <div class="list-item" v-for="(item, index) in lists" :key="index">
        <img :src="item.pic">
        <div class="list-item-left">
          <b>{{item.title}}</b>
          <p>{{item.desc}}</p>
        </div>
        <div class="list-item-right">
          <van-button size="small" @click="$store.commit('GOLEFT', item.url)">启动</van-button>
        </div>
      </div>
      <br />
      <van-divider>敬请期待</van-divider>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Applications extends Vue {
  lists: Array<any> = [{
    title: 'base64编码/解码',
    pic: 'http://images.liqucn.com/h018/h47/img201411030418350433_info300X300.png',
    desc: 'base64转化原文本，原文本转化base64',
    url: '/applications/base64'
  }, {
    title: '文字识别',
    pic: 'http://www.haoapp.mobi/upload/2017/07/8c38a552-3f18-4642-8df5-80a8d0dbb7b5.jpg',
    desc: '在线图像文字识别',
    url: {
      name: 'Web',
      params: {
        url: 'http://47.106.130.141:9530/#/'
      }
    }
  }]
  text: string = ''
  getSearch () {

  }
  created () {
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/listitem.less';
</style>
