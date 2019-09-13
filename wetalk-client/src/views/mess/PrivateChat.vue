<template>
  <div class="max1100">
    <div class="list-box">
      <div class="list-item" v-for="(item, index) in 15" :key="index">
        <img v-lazy="'http://p2.music.126.net/MHIswsnZuYdel2_roaLlYg==/109951164192558480.jpg?param=300x300'">
        <div class="mess-right-l">
          <b>二愣子{{index}}</b>
          <p>在干嘛呢</p>
        </div>
        <span>2019/02/18</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component
export default class PrivateChat extends Vue {
  chatList: Array<any> = []
  created () {
  }
}
</script>

<style lang="less" scoped>
.list-box{
  padding: 5px 15px 45px;
  .list-item{
    display: flex;
    padding: 15px 0 5px;
    >img{
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .mess-right-l{
      flex-grow: 1;
      padding: 10px 0px 20px 15px;
      border-bottom: 1px solid #f9f9f9;
      p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 11px;
        color: #888;
      }
      b{
        display: block;
        font-size: 15px;
        color: #111;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    span{
      font-size: 11px;
      color: #888;
    }
  }
}
</style>
