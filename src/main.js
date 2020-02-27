/*
 * @Description: main.js
 * @Autor: kangpeng
 * @Date: 2020-02-25 16:11:56
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-27 10:55:20
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/normalize.css'
Vue.use(ElementUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')