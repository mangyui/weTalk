<template>
  <div>
    <van-nav-bar title="大厅" fixed>
      <van-icon name="plus" slot="right" />
    </van-nav-bar>
    <div class="max1100 content-wrap roomList">
      <van-pull-refresh pulling-text="下拉刷新" v-model="isLoading" @refresh="onRefresh">
        <div style="margin: 0 8px;">
          <van-search placeholder="请输入搜索关键词" v-model="searchText" />
        </div>
        <div class="room-card" @click="$store.commit('GOLEFT', '/worldroom')">
          <p>世界聊天室</p>
          <b>13人</b>
          <img :src="require('@/assets/img/katong2.png')" alt="">
        </div>
        <div :class="index%2==0?'room-card liblue':'room-card lired'" v-for="(item,index) in 4" :key="index">
          <p>聊天室{{index}}</p>
          <b>{{10+index}}人</b>
          <img :src="require('@/assets/img/katong'+index%2+'.png')" alt="">
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Lobby extends Vue {
  searchText: string = ''
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
.roomList{
  padding: 1px 0 40px;
  .room-card{
    height: 100px;
    border-radius: 3px 10px 2px 10px;
    margin: 20px;
    padding: 15px;
    background: linear-gradient(-45deg,#261b45,#5843a0);
    box-shadow: 0 0 24px rgba(0,0,0,0.18);
    position: relative;
    p{
      color: #fefefe;
      font-size: 20px;
      font-weight: bold;
    }
    b{
      position: absolute;
      bottom: 15px;
      left: 15px;
      font-size: 13px;
      color: #efefef;
    }
    img{
      position: absolute;
      right: 24px;
      bottom: 0px;
      height: 110%;
      width: auto;
      transition: 0.28s;
      &:hover{
        bottom: 5px
      }
    }
  }
}
</style>
