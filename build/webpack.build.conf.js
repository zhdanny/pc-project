'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const manifest = require('./vendor-manifest.json');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const buildEnv = JSON.parse(process.env.npm_config_argv).remain[0] || 'test';


const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config[buildEnv].productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  performance: {
    hints: false
  },
  devtool: config[buildEnv].productionSourceMap ? config[buildEnv].devtool : false,
  output: {
    path: config[buildEnv].assetsRoot,
    filename: utils.assetsPath(config[buildEnv].filename),
    chunkFilename: utils.assetsPath(config[buildEnv].chunkFilename)
  },
  optimization: {

    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: config[buildEnv].productionSourceMap,
        uglifyOptions: {
          warnings: false,
          drop_console:true,
          drop_debugger:true
        }
      }),
      new OptimizeCSSPlugin({
      cssProcessorOptions: config[buildEnv].productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    ],
  },

  plugins: [

    new webpack.DefinePlugin({
      CURRENT_ENV: JSON.stringify(config[buildEnv].CURRENT_ENV)
     }),
    new webpack.DllReferencePlugin({
      manifest,
    }),
    new MiniCssExtractPlugin({
      filename: 'static/'+ config[buildEnv].styleFilename,
      chunkFilename: 'static/' +  config[buildEnv].styleChunkFilename // use contenthash *
    }),
   
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config[buildEnv].assetsSubDirectory,
        ignore: ['.*','*.dll.js']
      }
    ]),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: ['//static.daojia.com/isdfe/common/js/vendor.dll.js'],
      append: false,
      publicPath: false
    })
  ]
})

if (config[buildEnv].bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
