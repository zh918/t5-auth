// 输出根目录
const dict_name = 'dist'

module.exports = {
    debugger: {
        env:{NODE_ENV:'"development"'},
        port: 9022,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/login',
        proxyTable: {},
        cssSourceMap: false
    },
    dev: {
        index: path.resolve(__dirname, '../'+distName+'/index.html'),
        assetsRoot: path.resolve(__dirname, '../'+distName),
        assetsSubDirectory: 'static',
        // assetsPublicPath: '/'+distName+'/',
        assetsPublicPath: '/',
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    test: {
        index: path.resolve(__dirname, '../'+distName+'/index.html'),
        assetsRoot: path.resolve(__dirname, '../'+distName),
        assetsSubDirectory: 'static',
        // assetsPublicPath: '/'+distName+'/',
        assetsPublicPath: '/',
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    uat: {
        index: path.resolve(__dirname, '../'+distName+'/index.html'),
        assetsRoot: path.resolve(__dirname, '../'+distName),
        assetsSubDirectory: 'static',
        // assetsPublicPath: '/'+distName+'/',
        assetsPublicPath: '/',
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    prod: {
        index: path.resolve(__dirname, '../'+distName+'/index.html'),
        assetsRoot: path.resolve(__dirname, '../'+distName),
        assetsSubDirectory: 'static',
        // assetsPublicPath: '/'+distName+'/',
        assetsPublicPath: '/',
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    }
}