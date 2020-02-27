/*
 * @Description: webpack.prod.js
 * @Autor: kangpeng
 * @Date: 2020-02-26 10:59:03
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-26 10:59:03
 */
// 生产环境主要实现的是压缩代码、提取css文件、合理的sourceMap、分割代码
const path = require('path')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = WebpackMerge(webpackConfig, {
    mode: 'production',
    devtool: 'cheap-eval-source-map',
    plugins: [
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../public'),
            to: path.resolve(__dirname, '../dist')
        }])
    ],
    optimization: {
        minimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
                new OptimizeCssAssetsPlugin({})
            ],
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    libs: {
                        name: "chunk-libs",
                        test: /[\\/]node_modules[\\/]/,
                        priority: 10,
                        chunks: "initial"
                    }
                }
            }
        }
    }
})