<template>
  <div class="bgMax max1100 refuse-search-wrap">
    <form class="fix-top search-box" action="/">
      <van-search
        v-model="text"
        placeholder="搜索垃圾"
        show-action
        @search="onSearch"
        @cancel="$store.commit('GOBACK')"
      />
    </form>
    <div v-show="isSearch">
      <p class="s-text">搜索最热</p>
      <van-cell-group>
        <van-cell v-for="(item, index) in refuseMost" :key="index" :title="item.gName">
          <span v-if="item.gType=='可回收'" class="class-tag class-tag1" slot="default">{{item.gType}}</span>
          <span v-if="item.gType=='有害垃圾'" class="class-tag class-tag2" slot="default">{{item.gType}}</span>
          <span v-if="item.gType=='干垃圾'" class="class-tag class-tag3" slot="default">{{item.gType}}</span>
          <span v-if="item.gType=='湿垃圾'" class="class-tag class-tag4" slot="default">{{item.gType}}</span>
        </van-cell>
      </van-cell-group>
    </div>
    <div v-show="!isSearch">
      <van-cell-group>
        <van-cell v-for="(item, index) in refuseList" :key="index" :title="item.gname">
          <span v-if="item.gtype=='可回收'" class="class-tag class-tag1" slot="default">{{item.gtype}}</span>
          <span v-if="item.gtype=='有害垃圾'" class="class-tag class-tag2" slot="default">{{item.gtype}}</span>
          <span v-if="item.gtype=='干垃圾'" class="class-tag class-tag3" slot="default">{{item.gtype}}</span>
          <span v-if="item.gtype=='湿垃圾'" class="class-tag class-tag4" slot="default">{{item.gtype}}</span>
        </van-cell>
      </van-cell-group>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MSTminxin from '@/util/MSTminxin'

@Component({
  mixins: [MSTminxin]
})
export default class Search extends Vue {
  text: string =''

  refuseList: Array<any> = []
  refuseMost: Array<any> = []
  isSearch: boolean = true
  onSearch () {
    if (this.text.trim() !== '') {
      this.$toast.loading({
        mask: true,
        message: '加载中...'
      })
      this.$toGet.getGarbage({ garbageName: this.text }).then((res: any) => {
        if (res.code === 200) {
          this.refuseList = res.data
          this.isSearch = false
          this.$toast.clear()
        } else {
          this.$toast('你搜的是什么鬼东西？')
        }
      }).catch((err: any) => {
        console.log(err)
      })
    }
  }
  getMost () {
    this.$toGet.recentGs().then((res: any) => {
      this.refuseMost = res.data
    }).catch((err: any) => {
      console.log(err)
    })
  }
  created () {
    this.getMost()
  }
}
</script>

<style lang="less" scoped>
.s-text{
  margin-top: 30px;
  padding: 0 15px;
  color: #666;
}

</style>
