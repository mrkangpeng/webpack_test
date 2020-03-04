/*
 * @Description: router/index.js
 * @Autor: kangpeng
 * @Date: 2020-02-26 14:11:42
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-03 18:02:27
 */
import Vue from 'vue'
import Cookies from 'js-cookie'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)
const router = new Router({
    mode: 'hash',
    routes
})
router.beforeEach((to, from, next) => {
    const token = Cookies.get('token')
    if (to.matched.some(record => record.meta.requireAuth)) {
        if (token) {
            next()
        } else {
            next('./login')
        }
    } else {
        next()
    }
})
export default router