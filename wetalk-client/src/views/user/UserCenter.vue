<template>
  <div class="find-wrap borderBox height100">
    <van-nav-bar class="litheme" fixed :border="false"  @click-right="$store.commit('GOLEFT', '/setting')">
      <van-icon name="setting-o" slot="right"/>
    </van-nav-bar>
    <div class="find-user max1100 bgtheme" @click="$store.commit('GOLEFT', '/userhomepage')">
      <img :src="user.avatar">
      <div>
        <p>{{user.name}} <img class="icon-sex"  :src="user.sex==1?require('@/assets/img/male.svg'):require('@/assets/img/female.svg')"></p>
        <span>{{user.profile || '这个人超级懒，什么都没留下'}}</span>
        <van-icon class="me-icon" name="arrow" />
      </div>
    </div>
    <div class="my-info max1100">
      <!-- <van-cell-group title="">
        <van-cell title="动态" is-link icon="/icons/星星.svg" />
      </van-cell-group> -->
      <van-cell-group title="">
        <van-cell title="天气" is-link icon="./icons/weather.svg" @click="$store.commit('GOLEFT', '/weather')"/>
        <van-cell title="地图" is-link icon="./icons/map.svg" @click="$store.commit('GOLEFT', '/MyMap')"/>
      </van-cell-group>
      <van-cell-group title="">
        <van-cell title="用一用" is-link icon="./icons/expression.svg" @click="$store.commit('GOLEFT', '/applications')"/>
        <van-cell title="玩一玩" is-link icon="./icons/game.svg" @click="$store.commit('GOLEFT', '/games')"/>
        <van-cell title="听一听" is-link icon="./icons/music.svg" @click="$store.commit('GOLEFT', '/music')"/>
      </van-cell-group>
      <van-cell-group title="">
        <van-cell title="酷站" is-link icon="./icons/star.svg" @click="$store.commit('GOLEFT', '/other')"/>
        <!-- <van-cell title="事务" is-link icon="./icons/list.svg" /> -->
      </van-cell-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import User from '@/model/user'

@Component
export default class UserCenter extends Vue {
  private user: User = this.$store.getters.user
}
</script>

<style lang="less" scoped>
.find-wrap{
  background: #f9f9f9;
  padding-top: 44px;
  padding-bottom: 55px;
  overflow-y: auto;
}
.bgtheme{
  background: #7232dd;
  background: linear-gradient(to top,#382961,#7232dd)!important;
}
.find-user{
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
  // background: #fff;
  // border-bottom: 1px solid #f4f4f4;
  // background-image: linear-gradient(to bottom, #fff, #f9f9f9);
  >img {
    width: 75x;
    height: 75px;
    border-radius: 4px;
    margin-right: 20px;
    border: 1px solid #fff;
    box-shadow: 0 3px 10px rgba(0,0,0,0.15);
  }
  .me-icon{
    position: absolute;
    right: 15px;
    bottom: 50%;
    transform: translateY(50%);
    color: #999;
    font-size: 18px;
  }
  p{
    font-size: 17px;
    margin-bottom: 2px;
    color: #fefefe;
    font-weight: bold;
    margin-bottom: 5px;
    img{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fefefe;
      vertical-align: middle;
    }
  }
  span{
    font-size: 12px;
    color: #999;
  }
}
</style>
