'use strict'

module.exports = {
  //输出的环境变量名，建议保持初始值
  CURRENT_ENV : 'dev',
  useEslint: true,
  assetsSubDirectory: 'static',//webpack编译输出的二级文件夹
  assetsPublicPath: '/dist/',// webpack编译输出的发布路径
  autoOpenBrowser: true,
  host: 'localhost', // 默认打开的主域
  port: 8080, // 如果该端口被占用，会自动启动该端口+1的端口
  devtool: 'cheap-module-eval-source-map', //source map具体配置选项，详细参考  https://webpack.js.org/configuration/devtool/#development
  cacheBusting: true, //缓存破坏,当用source map debug的时候，设置为false有帮助
  cssSourceMap: true,
  https: false, //是否启用https 详细文档https://www.webpackjs.com/configuration/dev-server/#devserver-https
  proxyTable: { //需要 proxyTable 代理的接口（可跨域）
    // '/api/**': {
    //   target: 'https://bj.daojia.com/',//代理地址
    //   changeOrigin: true
    // }
  },
}
