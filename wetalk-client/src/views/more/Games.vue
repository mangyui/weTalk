<template>
  <div class="bgWhite max1100">
    <van-nav-bar class="litheme" :border="false" fixed title="玩一玩" left-arrow @click-left="$store.commit('GOBACK')" ></van-nav-bar>
    <van-search
      v-model="text"
      placeholder="搜索小游戏"
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
          <van-button size="small" @click="$store.commit('GOLEFT', item.url)">打开</van-button>
            <!-- <van-icon name="pause-circle" color="#00a7ff"/> -->
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
export default class Games extends Vue {
  lists: Array<any> = [{
    title: 'Flappy Bird',
    pic: 'http://i5.72g.com/upload/201408/201408041006053007.JPG',
    desc: '像素鸟，穿越管道',
    url: {
      name: 'Web',
      params: {
        url: 'http://demo.mccyu.com/flappybird/'
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
