<template>
  <div class="bgWhite max1100">
    <van-nav-bar fixed title="玩一玩" left-arrow @click-left="$store.commit('GOBACK')" ></van-nav-bar>
    <van-search
      v-model="text"
      placeholder="搜索小游戏"
      @search="getSearch"
    />
    <div class="list-box">
      <div class="list-item" v-for="(item, index) in lists" :key="index">
        <div class="list-item-left">
          <img :src="item.pic">
          <div>
            <b>{{item.title}}</b>
            <p>{{item.desc}}</p>
          </div>
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
    pic: 'http://img1.gamersky.com/image2014/09/20140920lyq_15/gamersky_01small_02_20149201413568.jpg',
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
