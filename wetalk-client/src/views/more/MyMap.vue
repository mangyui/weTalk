<template>
  <div>
    <van-nav-bar class="map-nav" fixed :border="false" title="地图" left-arrow @click-left="$store.commit('GOBACK')">
      <van-icon name="search" slot="right" @click="isSearch=true"/>
      <van-icon name="map-marked" slot="right" @click="toMe"/>
    </van-nav-bar>
    <form action="/" v-show="isSearch">
      <van-search class="map-search"
        v-model="value"
        placeholder="搜索地名"
        show-action
        @search="searchArea"
        @cancel="isSearch=false"
      />
    </form>
    <div id="MapBox">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import User from '@/model/user'

@Component
export default class MyMap extends Vue {
  private user: User = this.$store.getters.user

  isSearch: boolean = false
  value: string = ''
  BMap: any
  map: any
  point: any
  mk: any
  timeEve: any
  initMap () {
    this.map = new this.BMap.Map('MapBox') // 创建Map实例
    let mpoint = this.point || new this.BMap.Point(116.404, 39.915)
    this.map.centerAndZoom(mpoint, 50)
    this.map.enableScrollWheelZoom()
    this.map.enableDragging()

    this.$toast.clear()
  }
  getLocation (me: boolean) {
    const geolocation = new this.BMap.Geolocation()
    geolocation.getCurrentPosition((r: any) => {
      this.point = r.point
      let icon = new this.BMap.Icon('/icons/mapIcon.png', new this.BMap.Size(40, 50))
      if (this.mk) {
        this.mk.setPosition(this.point)
      } else {
        this.mk = new this.BMap.Marker(this.point, { icon: icon })
        this.initMap()
      }
      this.map.addOverlay(this.mk)
      if (me) {
        this.map.panTo(this.point)
      }
    }, (err: any) => {
      console.log(err)
      if (this.timeEve) {
        clearInterval(this.timeEve)
      }
    }, { provider: 'baidu' })
  }
  toMe () {
    if (this.point) {
      this.map.panTo(this.point)
    } else {
      this.getLocation(true)
    }
  }
  searchArea () {
    this.map.clearOverlays()
    let local = new this.BMap.LocalSearch(this.map, {
      renderOptions: { map: this.map }
    })
    local.search(this.value)
    if (this.mk) {
      this.map.addOverlay(this.mk)
    }
    // setTimeout(() => {
    //   this.map.setZoom(14)
    // }, 1000)
  }
  addEve () {
    this.timeEve = setInterval(() => {
      this.getLocation(false)
    }, 10000)
  }
  mounted () {
    this.$toast.loading({
      mask: true,
      message: '加载中...'
    })
    this.BMap = this.$win.BMap
    this.getLocation(true)
    this.addEve()
  }
  beforeDestroy () {
    if (this.timeEve) {
      clearInterval(this.timeEve)
    }
  }
}
</script>

<style lang="less" scoped>
#MapBox{
  width: 100%;
  height: 100%;
}
.map-search{
  position: fixed;
  top: 0;
  width: 360px;
  z-index: 99;
}
</style>
