'use strict'
const path = require('path')
/*[id] 被 chunk 的 id 替换。
*[name] 被 chunk 的 name 替换（或者，在 chunk 没有 name 时使用 id 替换）。
*[hash] 被 compilation 生命周期的 hash 替换。
*[chunkhash] 被 chunk 的 hash 替换。
*注意 src/assets 中的资源webpack会当做模块解析 static中的资源webpack只是简单的复制
*/
module.exports = {
  //输出的环境变量名，建议保持初始值
  CURRENT_ENV : 'prod', 
  useEslint : false, //默认构建时关闭eslint检测
  //路径设置相关
  assetsRoot: path.resolve(__dirname, '../dist'),//webpack输出的目标文件夹路径,必须是本地文件系统上的绝对路径
  assetsSubDirectory: 'static',//webpack编译输出的二级文件夹,假如build.assetsRoot参数是/path/to/dist，build.assetsSubDirectory 参数是 static, 那么所以webpack资源会被编译到path/to/dist/static目录
  assetsPublicPath: '/dist/', //webpack编译输出的线上发布路径,这个是通过http服务器运行的url路径,最终生成的路径会和assetsSubDirectory结合
  //文件命名相关
  filename:'js/[name].[chunkhash].js', //编译输出js文件名格式
  chunkFilename: 'js/[name].[chunkhash:12].js',//没有指定输出名的js文件块输出的文件名格式
  styleFilename:'css/[name].[contenthash].css', //输出css文件名格式
  styleChunkFilename:'css/[contenthash:12].css',//没有指定输出名的css文件块输出的文件名格式
  imgname: 'img/[name].[hash:7].[ext]', // [src/assets/**/*] 中图片在文件中引入的名字以及生成在dist中的名字
  fontname: 'fonts/[name].[hash:7].[ext]', // [src/assets/**/*] 字体文件在文件中引入的名字以及生成在dist中的名字
  //Source Maps 相关配置,默认不生成
  productionSourceMap: false, //开启此选项，下面的devtool设置才会生效
  devtool: '#source-map',//选择一种 source map 格式来增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度，详细文档   // https://webpack.js.org/configuration/devtool
  //查看打包分析报告
  bundleAnalyzerReport: process.env.npm_config_report //运行`npm run build test --report` 在打包结束后可在浏览器查看打包分析报告，设置为true或者false，可总是自动开启或关闭该功能
}
