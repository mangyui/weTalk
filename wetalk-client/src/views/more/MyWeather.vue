<template>
  <div class="bgMax max1100">
    <van-nav-bar class="litheme" :border="false" fixed title="天气" left-arrow @click-left="$store.commit('GOBACK')" >
      <van-icon name="hotel-o" slot="right" @click="showArea=true"/>
    </van-nav-bar>
    <div>
      <van-pull-refresh pulling-text="下拉刷新" v-model="isLoading" @refresh="onRefresh">
        <van-notice-bar v-show="weather.ganmao" :text="weather.ganmao"/>
        <div class="wea-wrap">
          <div class="wea-today-box">
            <b>{{weather.wendu}}℃</b>
            <span>{{today.type}}</span>
            <p v-if="today.high">{{today.high }} / {{ today.low }}</p>
            <i>{{today.fengxiang}}</i>
            <div>
              <h3>{{weather.city}}</h3>
              <h4>{{today.date}}</h4>
            </div>
          </div>
          <div class="wea-other">
            <div class="wea-other-item">
              <span>{{yesterday.date}}</span>
              <i>{{yesterday.type}}</i>
              <b>{{yesterday.high}} / {{yesterday.low}}</b>
            </div>
            <div class="wea-other-item" v-for="(item,index) in weather.forecast" :key="index">
              <span>{{item.date}}</span>
              <i>{{item.type}}</i>
              <b>{{item.high}} / {{item.low}}</b>
            </div>
          </div>
        </div>
      </van-pull-refresh>
    </div>
    <van-popup v-model="showArea" position="bottom">
      <van-area :area-list="areaList" :columns-num="2" title="城市"
      @cancel="showArea=false"
      @confirm="areaConfirm"/>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { areaList } from '@/util/Area.ts'

@Component
export default class MyWeather extends Vue {
  @Getter city!: string

  areaList: JSON = areaList
  showArea: boolean = false
  isLoading: boolean = false
  text: string = ''
  today: any = ''
  yesterday: any = ''
  weather: any = ''
  getWeather (mcity: string) : void {
    this.isLoading = true
    this.$toast.loading({
      mask: true,
      message: '加载中...'
    })
    mcity = mcity || '北京'
    this.$toGet.getWeather({ city: mcity })
      .then((res: any) => {
        let response: any = res.data
        this.text = response.ganmao
        this.weather = response
        this.today = response.forecast[0]
        this.yesterday = response.yesterday
        this.mydelete2(this.yesterday)
        for (let i = 0; i < this.weather.forecast.length; i++) {
          this.mydelete2(this.weather.forecast[i])
        }
        this.myadd2()
        this.isLoading = false
        this.$toast.clear()
      })
      .catch((error: any) => {
        this.text = error
        this.isLoading = false
        this.$toast.clear()
        console.log(error)
      })
  }
  mydelete2 (obj: any) {
    obj.high = obj.high.substring(2)
    obj.low = obj.low.substring(2)
  }
  myadd2 () {
    this.weather.forecast[0].date = '今天' + this.weather.forecast[0].date.substring(this.weather.forecast[0].date.length - 3)
    this.yesterday.date = '昨天' + this.yesterday.date.substring(this.yesterday.date.length - 3)
  }
  areaConfirm (value: Array<any>) {
    this.showArea = false
    this.getWeather(value[1].name)
  }
  onRefresh () {
    this.getWeather(this.city)
  }
  created () {
    this.getWeather(this.city)
  }
}
</script>

<style lang="less" scoped>
.bgMax{
  background: #fff;
  background: linear-gradient(to top,#7678f2,#8b81f9)!important;
}
.wea-wrap{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.wea-today-box{
  display: flex;
  text-align: center;
  flex-flow: column;
  padding: 20px;
  position: relative;
  color: #eee;
  b{
    font-size: 40px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p{
    margin: 8px;
    color: #eee;
    font-size: 15px;
  }
  i{
    font-size: 14px;
  }
  div{
    position: absolute;
    top: 20px;
    left: 15px;
    text-align: left;
    h3{
      font-size: 17px;
      margin-bottom: 8px;
      color: #fff;
    }
    h4{
      font-size: 14px;
      color: #eee;
    }
  }
}
.wea-other{
  padding: 10px 20px 10px;
  margin: 15px;
  background-color: #fff;
  border-radius: 10px;
}
.wea-other-item{
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #f9f9f9;
  height: 45px;
  line-height: 45px;
  align-items: center;
  color: #7678f2;
  font-size: 14px;
  &:nth-child(2){
    color: #f44;
  }
  &:nth-child(1){
    border-top: 0;
  }
}
</style>
