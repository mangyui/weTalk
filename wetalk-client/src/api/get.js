import request from './request'
import Vue from 'vue'

const baseUrl = process.env.NODE_ENV === 'production' ? 'http://47.106.130.141:9612' : 'http://localhost:9612' // api的base_url

const toGet = {
  // 天气
  getWeather (datas) {
    return request({
      url: baseUrl + '/other/weather',
      method: 'get',
      params: datas
    })
  },
  // 获取音乐
  getMusics (datas) {
    return request({
      url: baseUrl + '/other/musics',
      method: 'get',
      params: datas
    })
  }
}

Vue.prototype.$toGet = toGet
