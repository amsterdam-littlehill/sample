import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import User from '@/components/user/User'
import UserProfile from '@/components/user/UserProfile'
import UserPost from '@/components/user/UserPost'
Vue.use(Router)
var a = "hello";

export default new Router({
  mode:'history',
  routes: [
    {
      path: '',/*默认路由*/
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
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/user/:id/profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/post 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/user/:id/post',
          component: UserPost
        }
      ]
    }

  ]
})
