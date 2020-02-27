/*
 * @Description: vuex
 * @Autor: kangpeng
 * @Date: 2020-02-27 10:53:02
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-27 14:01:56
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import setSideBarState from './modules/setSideBarState'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        setSideBarState
    },
    getters
});
export default store