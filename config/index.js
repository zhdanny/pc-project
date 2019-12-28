'use strict'
const prod = require('./prod.js')
const test = require('./test.js')
const box = require('./box.js')
const dev = require('./dev.js')
const spriteConfig = require('./sprite.js')

module.exports = {
  //多入口配置
  pages: {
    'app': {
      filename: 'index.html', //入口html文件
      template: 'index.html', //html文件所引用的模板[多个入口可以共用一个模板]
      src: './src/main.js', //入口js
      inject: 'body', //js在生成html中的注入位置，默认为body标签
      chunks: ['app'] //打包后的文件名，为保持结构清晰，与pages的key保持一致
    },
    'barber': {
      filename: 'barber.html', //入口html文件
      template: 'index.html', //html文件所引用的模板[多个入口可以共用一个模板]
      src: './src/barber.js', //入口js
      inject: 'body', //js在生成html中的注入位置，默认为body标签
      chunks: ['barber'] //打包后的文件名，为保持结构清晰，与pages的key保持一致
    }
  },
  //通用配置
  commonConfig: {
    img2base64Limit: 4096, //图片转换成base64编码的大小上限，单位字节，默认不超过10kb会base64编码
    font2base64Limit: 4096, //字体文件转换成base64编码的大小上限，单位字节，默认不超过10kb会base64编码
    useSprite: true, // 雪碧图编译很耗时，如果不需要雪碧图功能请将useSprite置为false
    spriteConfig:spriteConfig, //雪碧图详细配置 
    htmlMinify: { //编译时对html的压缩策略
      removeComments: true, //是否去除注释
      collapseWhitespace: false, //是否折叠空行
    }
  },
  dev: dev,
  test: test,
  box: box,
  prod:prod
}
