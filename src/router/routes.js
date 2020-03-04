/*
 * @Description: routers.js
 * @Autor: kangpeng
 * @Date: 2020-02-26 14:23:25
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-03 18:03:34
 */
const routes = [{
    path: '/',
    name: 'home',
    redirect: 'pageOne',
    meta: {
      title: '主页',
      requireAuth:true,
      icon: 'el-icon-location'
    },
    component: () => import('@/layout/index'),
    children: [{
        path: '/pageOne',
        name: 'pageOne',
        component: () => import('@/views/home/pageOne'),
        meta: {
          title: '页面一',
          requireAuth:true,
          icon: ''
        },
      },
      {
        path: '/pageTwo',
        name: 'pageTwo',
        component: () => import('@/views/home/pageTwo'),
        meta: {
          title: '页面二',
          requireAuth:true,
          icon: ''
        },
      },
      {
        path: '/pageThree',
        name: 'pageThree',
        component: () => import('@/views/home/pageThree'),
        meta: {
          title: '页面三',
          requireAuth:true,
          icon: ''
        },
      },
      {
        path: '/pageFour',
        name: 'pageFour',
        meta: {
          title: '页面四',
          requireAuth:true,
          icon: ''
        },
        redirect: '/pageFour_one',
        component: () => import('@/views/home/pageFour/pageFour'),
        children: [{
          path: '/pageFour_one',
          name: 'pageFour_one',
          meta: {
            title: '页面四_一',
            requireAuth:true,
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
      requireAuth:true,
      icon: "el-icon-menu"
    },
    component: () => import('@/layout/index'),
    children: [{
      path: '/user/index',
      name: 'index',
      meta: {
        title: "用户一",
        requireAuth:true,
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
      requireAuth:true,
      icon: 'el-icon-document'
    },
    component: () => import('@/layout/index'),
    children: [{
      path: '/admin/index',
      name: 'index',
      meta: {
        title: '管理一',
        requireAuth:true,
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
      requireAuth:true,
      icon: 'el-icon-setting'
    },
    component: () => import('@/layout/index'),
    children: [{
        path: '/setting/userInfo',
        name: 'userInfo',
        meta: {
          title: '基本信息',
          requireAuth:true,
          icon: ''
        },
        component: () => import('@/views/setting/userInfo')
      },
      {
        path: '/setting/modifyPwd',
        name: 'modifyPwd',
        meta: {
          title: '修改密码',
          requireAuth:true,
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