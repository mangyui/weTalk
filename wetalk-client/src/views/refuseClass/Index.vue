<template>
  <div class="bgWhite max1100">
    <van-nav-bar class="litheme" :border="false" title="垃圾分类" fixed />
    <div class="refuse-top-wrap">
      <div class="flex-cc refuse-top">
        <div @click="$store.commit('GOLEFT', '/garbageimg')">
          <van-icon :name="'./icons/camera.svg'" />
          <p>拍照识别</p>
        </div>
        <div @click="$store.commit('GOLEFT', '/refusesearch')">
          <van-icon :name="'./icons/search.svg'" />
          <p>搜索垃圾</p>
        </div>
      </div>
    </div>
    <div class="refuse-class-box">
      <div class="refuse-class-item" :style="{background: 'linear-gradient(to bottom right, '+ item.color+', '+item.color+')'}" v-for="(item, index) in classList" :key="index">
        <b>{{item.name}}</b>
        <p>{{item.desc}}</p>
        <ul>
          <li v-for="(it,id) in item.todo" :key="id">{{it}}</li>
        </ul>
         <van-icon class="class-icon" :name="'./icons/camera.svg'" />
         <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MSTminxin from '@/util/MSTminxin'

@Component({
  mixins: [MSTminxin]
})
export default class RefuseClass extends Vue {
  activeKey: number = 1
  classList: Array<any> = [{
    name: '可回收垃圾',
    desc: '指可回收可循环利用的废弃物',
    todo: ['保持清洁干燥，避免污染', '压力罐装容器，应清空并清洁压扁后投放', '易碎尖锐的，应包裹后投放'],
    color: '#64d1b6'
  }, {
    name: '有害垃圾',
    desc: '指对人体健康或自然环境造成直接或潜在危害的废弃物',
    todo: ['分类投放有害垃圾时，应注意轻放', '易碎尖锐的，应带包装或包裹后投放', '压力罐装容器，应排空内容物后投放'],
    color: '#f57f75'
  }, {
    name: '湿垃圾(厨余垃圾)',
    desc: '即易腐垃圾，易腐生物质生活废弃物',
    todo: ['沥干水分', '有外包装的应去除外包装', '与其他种类垃圾分开投放'],
    color: '#a18073'
  }, {
    name: '干垃圾(其他垃圾)',
    desc: '其他三类垃圾外的生活废弃物',
    todo: ['已污染的，应包裹后投放', '应保持周围环境整洁', '与其他种类垃圾分开投放'],
    color: '#7e8ca7'
  }]
}
</script>

<style lang="less" scoped>
.refuse-top-wrap{
  background: #8b81f9;
  background-image: linear-gradient(to bottom, #8b81f9, #7678f2);
}
.refuse-top{
  padding: 15px;
  >div{
    text-align: center;
    color: #efefef;
    font-size: 13px;
  }
  .van-icon{
    font-size: 28px;
    margin-bottom: 10px;
  }
}
.refuse-class-box{
  padding: 10px 15px;
  padding-bottom: 55px;
  .refuse-class-item{
    border-radius: 8px 8px 0 0;
    padding: 18px;
    padding-bottom: 25px;
    line-height: 21px;
    margin-bottom: -10px;
    position: relative;
    color: #fff;
    box-shadow: -3px 0 25px rgba(0,0,0,0.18);
    b{
      font-size: 16px;
    }
    p{
      margin: 5px 0;
    }
    ul{
      list-style: disc;
      font-size: 12px;
      padding-left: 15px;
    }
    .van-icon{
      position: absolute;
      right: 15px;
      top: 15px;
      font-size: 16px;
    }
    .class-icon{
      bottom: 20px;
      top: auto;
    }
  }
}
</style>
