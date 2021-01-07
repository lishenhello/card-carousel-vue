var path = require('path')
var webpack = require('webpack')

// 执行环境
const NODE_ENV = process.env.NODE_ENV
console.log('--------- NODE_ENV -------',NODE_ENV)

module.exports = {
  // 根据不同的执行环境配置不同的入口
  // publicPath: NODE_ENV === 'production' ? './' : '/',
  lintOnSave: 'warning',
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }])
  },
  // entry: './src/main.js',
  outputDir: 'dist',

  devServer: {
    open: true,
    port: '5556'
  }
}
