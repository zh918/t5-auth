const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
// const baseWebpackConfig = require('./webpack.base.happypack.config')

module.exports = merge(baseWebpackConfig, {
    devtool: 'cheap-module-eval-source-map',// 'source-map', //'inline-source-map',
});