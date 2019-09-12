<template>
  <div class="usercenter">
    <van-nav-bar class="my-nav-bar" fixed title="我的主页" :border="false" left-arrow  @click-left="$store.commit('GOBACK')">
      <van-icon name="edit" slot="right" @click="$store.commit('GOLEFT', '/UserEdit')"/>
    </van-nav-bar>
    <div class="user-bg">
      <div class="bg-mask" :style="{backgroundImage: 'url('+user.avatar+')'}"></div>
      <div class="top-mask"></div>
      <!-- <van-icon class="edit-btn" name="edit" size="26px" ></van-icon> -->
      <van-icon class="re-btn" name="replay" size="26px" @click="refreshUser"></van-icon>
    </div>
    <div class="user-box max1100">
      <img :src="user.avatar">
      <div>
        <b>{{user.name}}</b>
        <p>{{user.sex==1?'男':'女'}} &nbsp;&nbsp;{{user.province}}&nbsp;&nbsp; {{user.city}}</p>
      </div>
    </div>
    <div class="my-info max1100">

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import User from '@/model/user'
import Person from '@/util/Person'
let persons : Person[] = require('@/util/Persons').persons

@Component
export default class UserHomePage extends Vue {
  private user: User = this.$store.getters.user
  refreshUser () {
    var index = Math.floor(Math.random() * persons.length)
    this.$store.commit('updateUserAvatar', persons[index].avatar)
    this.$store.commit('updateUserName', persons[index].name)
  }
}
</script>

<style lang="less" scoped>
.usercenter{
  background: #f9f9f9;
}
.user-bg{
  width: 100%;
  height: 150px;
  position: relative;
  overflow: hidden;
  .edit-btn{
    position: absolute;
    top: 10px;
    right: 15px;
    color: #fff;
    z-index: 20;
  }
}
.bg-mask{
  position: absolute;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  filter: blur(20px);
  z-index: 10;
}
.top-mask{
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.45);
  z-index: 11;
}
.user-box{
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-top: -50px;
  position: relative;
  z-index: 20;
  img {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    margin-right: 20px;
    border: 1px solid #fff;
    box-shadow: 0 3px 10px rgba(0,0,0,0.15);
  }
  >div{
    text-align: left;
  }
  b{
    font-weight: bold;
    color: #fff;
    font-size: 18px;
  }
  p{
    margin: 10px 0;
    font-size: 13px;
    color: #666;
    text-align: left;
  }
}
</style>
