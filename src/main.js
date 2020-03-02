/*
 * @Description: main.js
 * @Autor: kangpeng
 * @Date: 2020-02-25 16:11:56
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-02 14:26:15
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import echarts from 'echarts';
import Fragment from 'vue-fragment' // 解决element NavMenu折叠文字不隐藏问题，https://blog.csdn.net/pangji0417/article/details/93353327
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/normalize.css'
Vue.use(ElementUI)
Vue.use(Fragment.Plugin)
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')