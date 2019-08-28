'use strict'
const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['vue/dist/vue.esm.js','vue-router','vuex']
  },
  output: {
    path: path.join(__dirname, '../static/js'), //放在项目的static/js目录下面
    filename: '[name].dll.js', //打包文件的名字
    library: '[name]_library' //可选 暴露出的全局变量名
    // vendor.dll.js中暴露出的全局变量名。
    // 主要是给DllPlugin中的name使用，
    // 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
          warnings: false,
          drop_console:true,
          drop_debugger:true
        }
      }),
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'), //生成上文说到清单文件，放在当前build文件下面
      name: '[name]_library'
    }),  
  ]
};
