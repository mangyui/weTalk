<template>
  <div class="bgWhite max1100">
    <van-nav-bar class="litheme" :border="false" fixed title="酷站" left-arrow @click-left="$store.commit('GOBACK')" ></van-nav-bar>
    <div class="list-box">
      <a class="list-item" :href="item.url" target="_blank" v-for="(item, index) in lists" :key="index">
        <div>
          <img :src="item.pic">
        </div>
        <p>{{item.title}}</p>
      </a>
      <div v-show="lists.length%3==2" class="list-item"></div>
    </div>
    <van-divider>陆续添加中</van-divider>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Other extends Vue {
  baseurl: any = {
    name: 'Web',
    params: {
      url: 'https://mccyu.com//'
    }
  }
  lists: Array<any> = [{
    title: '作者博客',
    pic: './imgs/myAvatar.jpg',
    url: 'https://mccyu.com/'
  }, {
    title: '作者Github',
    pic: './imgs/myAvatar.jpg',
    url: 'https://github.com/mangyui'
  }, {
    title: '站酷',
    pic: 'https://static.zcool.cn/git_z/z/common/images/svg/logo.svg',
    url: 'https://m.zcool.com.cn/home'
  }, {
    title: '掘金内推',
    pic: 'https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg',
    url: 'https://juejin.im/topic/5abb61e1092dcb4620ca3322?sort=newest'
  }, {
    title: 'V2EX',
    pic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2808347187,4059917386&fm=26&gp=0.jpg',
    url: 'https://www.v2ex.com/?tab=jobs'
  }, {
    title: '搜狗翻译',
    pic: 'https://dlweb.sogoucdn.com/translate/pc/static/img/logo@1x.dd6a432c.png',
    url: 'https://fanyi.sogou.com/'
  }, {
    title: '漫画斗破',
    pic: 'https://www.zymk.cn/static/images/default/logo.png',
    url: 'https://m.zymk.cn/1/'
  }]
  text: string = ''
  toIndex (index: number) {
    this.baseurl.params.url = this.lists[index].url
    this.$store.commit('GOLEFT', this.baseurl)
  }
  created () {
  }
}
</script>

<style lang="less" scoped>
.bgWhite{
  padding-left: 15px;
  padding-right: 15px;
}
.list-box{
  padding: 15px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .list-item{
    display: block;
    width: 90px;
    max-width: 30%;
    margin-bottom: 5px;
    padding: 0 5px;
    >div{
      width: 90px;
      height: 90px;
      position: relative;
      display: flex;
      align-items: center;
      border-radius: 5px;
      overflow: hidden;
      margin-bottom: 5px;
      text-align: center;
      // background: radial-gradient(#dbd8ff, #a39cf9);
    }
    img{
      width: 100%;
      background: #dbd8ff;
    }
    p{
      height: 40px;
      overflow: hidden;
      text-align: center;
    }
  }
}
</style>
