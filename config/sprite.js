'use strict'
module.exports =  { // 雪碧图配置
  src: {
    path: 'src/assets/icons/', //图片存放的文件夹路径
    glob: '*.png' //文件夹内所有的png图片都会被合成雪碧图(支持正则表达式)
  },
  target: {
    image: 'src/style/sprite/sprite.png', // 生成的雪碧图存放路径
    css: 'src/style/sprite/sprite.css', //生成的css文件存放路径
    scss: 'src/style/sprite/sprite.scss' //生成的scss文件存放路径
  },
  padding: 10,  // icons padding
  cssImageRef: './sprite.png', // 生成图片相对css文件内引用的路径,上线时要把此处替换成雪碧图的线上绝对地址
  unit: 'px',//生成雪碧图的单位,可设置成rem
  scale: 1//雪碧图相对于原来图片大小的缩放比例，该值为分母
}
