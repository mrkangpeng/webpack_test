/*
 * @Description: router/index.js
 * @Autor: kangpeng
 * @Date: 2020-02-26 14:11:42
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-26 16:13:08
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: () => import('@/layout/index')
        },
        {
            path: '/404',
            name:'404',
            component: () => import('@/views/404'),
        },
        {
            path: "/login",
            name: 'Login',
            component: () => import('@/views/login/index')
        },
    ]
})

export default router