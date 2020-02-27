/*
 * @Description: vue.config.js
 * @Autor: kangpeng
 * @Date: 2020-02-26 14:27:59
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-26 14:39:02
 */
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src')) 
  }
};