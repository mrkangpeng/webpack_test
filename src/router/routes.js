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
        name: 'pageOne',
        component: () => import('@/views/home/pageOne'),
        meta: {
          title: '页面一',
          icon: ''
        },
      },
      {
        path: '/pageTwo',
        name: 'pageTwo',
        component: () => import('@/views/home/pageTwo'),
        meta: {
          title: '页面二',
          icon: ''
        },
      },
      {
        path: '/pageThree',
        name: 'pageThree',
        component: () => import('@/views/home/pageThree'),
        meta: {
          title: '页面三',
          icon: ''
        },
      },
      {
        path: '/pageFour',
        name: 'pageFour',
        meta: {
          title: '页面四',
          icon: ''
        },
        redirect: '/pageFour_one',
        component: () => import('@/views/home/pageFour/pageFour'),
        children: [{
          path: '/pageFour_one',
          name: 'pageFour_one',
          meta: {
            title: '页面四_一',
            icon: ''
          },
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
      path: '/user/index',
      name: 'index',
      meta: {
        title: "用户一",
        icon: ""
      },
      component: () => import('@/views/user/index')
    }]
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {
      title: '管理',
      icon: 'el-icon-document'
    },
    component: () => import('@/layout/index'),
    children: [{
      path: '/admin/index',
      name: 'index',
      meta: {
        title: '管理一',
        icon: ''
      },
      component: () => import('@/views/admin/index')
    }]
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      title: '设置',
      icon: 'el-icon-setting'
    },
    component: () => import('@/layout/index'),
    children: [{
        path: '/setting/userInfo',
        name: 'userInfo',
        meta: {
          title: '基本信息',
          icon: ''
        },
        component: () => import('@/views/setting/userInfo')
      },
      {
        path: '/setting/modifyPwd',
        name: 'modifyPwd',
        meta: {
          title: '修改密码',
          icon: ''
        },
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