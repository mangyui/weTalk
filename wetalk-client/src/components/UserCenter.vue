<template>
  <div class="usercenter">
    <div class="avatar-box" :style="{backgroundImage:'url(' + require('@/assets/img/user_bg' + bgindex+ '.svg')+')'}">
      <mu-avatar :size="75" color="#00bcd4">
        <img :src="user.avatar">
      </mu-avatar>
      <mu-button icon large  color="#eee" @click="refreshUser">
        <mu-icon value="refresh"></mu-icon>
      </mu-button>
    </div>
    <div class="info">
      <div class="info-item">
        <span>昵称：</span>
        <mu-text-field v-model="user.name" :max-length="10"></mu-text-field>
      </div>
      <div  class="info-item">
        <span>性别：</span>
        <mu-flex class="select-control-row">
          <mu-radio v-model="user.sex" value="男" label="男"></mu-radio>
          <mu-radio v-model="user.sex" value="女" label="女"></mu-radio>
        </mu-flex>
      </div>
      <!-- <div  class="info-item">
        <span>序号：</span>
        <p>{{user.id}}</p>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import User from '../model/user'
import Person from '@/assets/js/person'
let persons : Person[] = require('@/assets/js/persons').persons

@Component
export default class UserCenter extends Vue {
  private user: User = this.$store.getters.user
  private bgindex: number = Math.floor(Math.random() * 6)
  refreshUser () {
    this.bgindex = Math.floor(Math.random() * 6)
    var index = Math.floor(Math.random() * persons.length)
    this.$store.commit('updateUserAvatar', persons[index].avatar)
    this.$store.commit('updateUserName', persons[index].name)
  }
  beforeDestroy () {
    this.$store.commit('initUserInfo', this.user)
  }
}
</script>

<style scoped lang="less">
.avatar-box{
  padding: 45px 5px;
  background: #222;
  position: relative;
  // background-image: url('../assets/img/user_bg0.svg')
  .mu-avatar{
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  }
  .mu-button{
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
.info{
  background: #fff;
  width: 100%;
  max-width: 768px;
  margin: 15px auto;
  padding: 15px 5px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.05);
  .info-item{
    display: flex;
    padding: 10px 5px;
    align-items: center;
    span{
      width: 30%;
      color: #777;
    }
    p,.mu-input{
      margin: 0;
      width: auto;
      flex-grow: 1;
    }
  }
}
</style>
