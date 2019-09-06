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
