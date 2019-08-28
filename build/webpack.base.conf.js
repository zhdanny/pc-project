'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpritesmithPlugin = require('webpack-spritesmith')
const scssTemplate = require('./sprites/scss.js')
const cssTemplate = require('./sprites/css.js')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const npmConfigArgv = JSON.parse(process.env.npm_config_argv)
let spriteConfig = config.commonConfig.spriteConfig || false;
let isDev = npmConfigArgv.original[1] === 'dev' ? true : false;
let buildEnv = npmConfigArgv.remain[0] || 'test';
let eslintFlag = isDev ? config.dev.useEslint : config[buildEnv].useEslint;
let mutiEntry = {};
let pluginsArr = [];
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
//多入口配置
for (let key in config.pages) {
  let page = config.pages[key]
  mutiEntry[key] = page.src;
  pluginsArr.push(
    new HtmlWebpackPlugin({
      filename: page.filename,
      template: page.template,
      chunks: page.chunks,
      inject: page.inject,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
        removeAttributeQuotes: false
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    })
  )
}


const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: true
  }
})

let webpackConfig = {
  context: path.resolve(__dirname, '../'),
  entry: mutiEntry,
  output: {
    path: config[buildEnv].assetsRoot,
    filename: '[name].js',
    publicPath: isDev
      ? config.dev.assetsPublicPath
      : config[buildEnv].assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve('src'),//缩小文件搜索范围
      resolve('node_modules') //缩小文件搜索范围
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // 'vue$': 'vue/dist/vue.runtime.esm.js',
      '@': resolve('src'),
    }
  },
  plugins: [...pluginsArr,new CaseSensitivePathsPlugin({
    debug: true
  })],
  module: {
    noParse: /node_modules\/(element-ui\.js)/,
    rules: [
      ...(eslintFlag ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory=true',
        include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: config.commonConfig.img2base64Limit,
          name: utils.assetsPath(isDev ? 'img/[name].[hash:7].[ext]' : config[buildEnv]['imgname'])
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit:  config.commonConfig.font2base64Limit,
          name: utils.assetsPath(isDev ?  'fonts/[name].[hash:7].[ext]':config[buildEnv].fontname)
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
// 配置sprite插件
if (config.commonConfig.useSprite && spriteConfig) {
  var spriteType = { unit: spriteConfig.unit, scale: spriteConfig.scale }
  var cssPath = []
  if (spriteConfig.target.css) {
    cssPath.push([path.resolve(__dirname, '../' + spriteConfig.target.css), {
      format: 'css_template'
    }]);
  }
  if (spriteConfig.target.scss) {
    cssPath.push([path.resolve(__dirname, '../' + spriteConfig.target.scss), {
      format: 'scss_template'
    }]);
  }
  webpackConfig.plugins.push(new SpritesmithPlugin({
    src: {
      cwd: path.resolve(__dirname, '../' + spriteConfig.src.path),
      glob: spriteConfig.src.glob
    },
    target: {
      image: path.resolve(__dirname, '../' + spriteConfig.target.image),
      css: cssPath
    },
    apiOptions: {
      cssImageRef: spriteConfig.cssImageRef
    },
    spritesmithOptions: {
      algorithm: 'top-down',
      padding: spriteConfig.padding || 10
    },
    customTemplates: {
      'css_template': cssTemplate(spriteType),
      'scss_template': scssTemplate(spriteType)
    }
  })
  )
}
module.exports = webpackConfig;
