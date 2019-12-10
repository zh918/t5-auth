const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const dist_name = 'dist'

module.exports = merge(baseWebpackConfig, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, dist_name),
        compress: true,
        host:'localhost',
        port: 9000,
        hot:true,
        open: true,
    }
});