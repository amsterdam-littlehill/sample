import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/common/Layout'
const _import = require('./_import_' + process.env.NODE_ENV)
/*import Hello from '@/components/Hello'*/
/*import User from '@/components/user/User'
import UserProfile from '@/components/user/UserProfile'
import UserPost from '@/components/user/UserPost'*/

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will no redirct in the levelbar
 * noDropdown : if `noDropdown:true` will has no submenu
 * meta : { role: ['admin'] }  will control the page role
 **/
Vue.use(Router);
//公用页面，首页和登录页和一些不用权限的公用页面
export const constantRouterMap = [
  {path: '/login', component: _import('login/index'), hidden: true}, //hidden 为自定义属性
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: '首页',
    icon:'icon-shouye',
    hidden: true,
    children: [{path: 'index', component: _import('epIndex/index')}]
  }
];
/*var a = "hello";*/
export default new Router({
  mode: 'history',
  routes: constantRouterMap
});
export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    icon: 'icon-quanxian',
    meta: {role: ['admin']},
    noDropdown: true,
    children: [{path: 'index', component: _import('permission/index'), name: '权限测试页', meta: {role: ['admin']}}]
  },
  {
    path: '/customer',
    component: Layout,
    redirect: '/customer/index',
    icon: 'icon-quanxian',
    meta: {role: ['admin']},
    noDropdown: true,
    children: [{path: 'index', component: _import('customer/index'), name: '客户定位', meta: {role: ['admin']}}]
  }
];
/*export default new Router({
  mode:'history',
  routes: [
    {
      path: '',/!*默认路由*!/
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/home',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      children: [
        {
          path:'',
          component: UserPost
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-views> 中
          path: '/user/:id/profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/post 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-views> 中
          path: '/user/:id/post',
          component: UserPost
        }
      ]
    }

  ]
})*/
