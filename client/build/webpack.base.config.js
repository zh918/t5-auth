// const config = require('../config')
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 输出跟文件夹名称
const dist_name = 'dist'

module.exports = { 
    entry: {
        app: './src/main.js'
    },
    output: {
        filename:'[name].[chunkhash].js',
        path:path.resolve(__dirname,'..',dist_name),
        publicPath:''
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.join(__dirname,'../','src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test:/\.js$/,
                use:['babel-loader'],
                exclude:/node_modules/,
            },
            {
                test: /\.less$/,
                use:['style-loader','vue-style-loader','css-loader','less-loader'],
                exclude:/node_modules/,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',//path.resolve(__dirname, '../',dist_name,'/index.html'),
            template: path.resolve(__dirname,'../','entry/admin/','index.html'),
            inject: true,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true
              // more options:
              // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
          }),
    ]
}