const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          red: '#03a9f4',
          blue: '#3eaf7c',
          orange: '#f08d49',
          'text-color': '#111'
        }
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
            // 该项仅在使用 Circle 组件时需要
            selectorBlackList: ['van-circle__layer']
          })
        ]
      }
    }
  },
  configureWebpack: {
    externals: {
      'BMap': 'BMap'
    }
  },
  devServer: {
    // port: 8087, // 端口号
    // host: '0.0.0.0',
    open: true // 配置自动启动浏览器
  }
}
