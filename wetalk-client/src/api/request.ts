import axios from 'axios'
import { Notify } from 'vant'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
// 创建axios实例
const service = axios.create({
  timeout: 20000 // 请求超时时间
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.rec !== 0) {
      Notify({
        message: '请求错误',
        color: '#ad0000',
        background: '#ffe1e1'
      })
      return Promise.reject(res.msg)
    } else {
      return response.data
    }
  },
  error => {
    Notify({
      message: '网络错误',
      color: '#ad0000',
      background: '#ffe1e1'
    })
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
