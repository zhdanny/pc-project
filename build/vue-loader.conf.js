'use strict'
const utils = require('./utils')
const config = require('../config')
const npmConfigArgv = JSON.parse(process.env.npm_config_argv);
let isDev = npmConfigArgv.original[1] === 'dev' ? true : false;
let buildEnv = npmConfigArgv.remain[0] || 'test';

const sourceMapEnabled = isDev
  ? config.dev.cssSourceMap
  : config[buildEnv].productionSourceMap 

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: !isDev
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
