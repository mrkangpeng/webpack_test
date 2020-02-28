/*
 * @Description: router/index.js
 * @Autor: kangpeng
 * @Date: 2020-02-26 14:11:42
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-28 11:57:20
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)
const router = new Router({
    mode: 'hash',
    routes
})
// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuto) {
//         let userName = Cookies.get('userName')
//         if (userName) {
//             next()
//         } else {
//             next({
//                 path: '/login',
//             })
//         }
//     }
// })
export default router