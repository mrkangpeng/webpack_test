/*
 * @Description: routers.js
 * @Autor: kangpeng
 * @Date: 2020-02-26 14:23:25
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-28 16:08:38
 */
const routes = [{
        path: '/',
        name: 'home',
        redirect: 'pageOne',
        meta: {
            title: '主页',
            icon: 'el-icon-location'
        },
        component: () => import('@/layout/index'),
        children: [{
                path: '/pageOne',
                name: '页面一',
                component: () => import('@/views/home/pageOne')
            },
            {
                path: '/pageTwo',
                name: '页面二',
                component: () => import('@/views/home/pageTwo')
            },
            {
                path: '/pageThree',
                name: '页面三',
                component: () => import('@/views/home/pageThree')
            },
            {
                path: '/pageFour',
                name: '页面四',
                redirect: '/pageFour_one',
                component: () => import('@/views/home/pageFour/pageFour'),
                children: [{
                    path: '/pageFour_one',
                    name: '页面四_一',
                    component: () => import('@/views/home/pageFour/index')
                }]
            }
        ]
    },
    {
        path: '/user',
        name: 'user',
        meta: {
            title: "用户",
            icon: "el-icon-menu"
        },
        component: () => import('@/layout/index'),
        children: [{
            path: 'index',
            name: '用户子页面',
            component: () => import('@/views/user/index')
        }]
    },
    {
        path: '/admin',
        name: 'admin',
        meta: {
            title:'管理',
            icon:'el-icon-document'
        },
        component: () => import('@/layout/index'),
        children: [{
            path: 'index',
            name: '管理子页面',
            component: () => import('@/views/admin/index')
        }]
    },
    {
        path: '/setting',
        name: 'setting',
        meta:{
            title:'设置',
            icon:'el-icon-setting'
        },
        component: () => import('@/layout/index'),
        children: [{
                path: 'userInfo',
                name: '基本信息',
                component: () => import('@/views/setting/userInfo')
            },
            {
                path: 'modifyPwd',
                name: '修改密码',
                component: () => import('@/views/setting/modifyPwd')
            }
        ]
    },
    {
        path: '*',
        name: '404',
        component: () => import('@/views/404'),
        hidden: true
    },
    {
        path: "/login",
        name: '登录',
        component: () => import('@/views/login/index'),
        hidden: true
    },
]

export default routes