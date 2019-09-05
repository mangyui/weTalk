module.exports = {
  publicPath: './',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'blue': '#f44'
        },
        javascriptEnabled: true
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
