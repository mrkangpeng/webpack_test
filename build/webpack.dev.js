/*
 * @Description: webpack.dev.js
 * @Autor: kangpeng
 * @Date: 2020-02-26 10:57:36
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-26 15:01:56
 */
// 开发环境主要实现的是热更新,不要压缩代码，完整的sourceMap
const Webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
module.exports = WebpackMerge(webpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 3000,
        hot: true,
        contentBase:'../dist',
    },
    plugins:[
        new Webpack.HotModuleReplacementPlugin()
    ]
})