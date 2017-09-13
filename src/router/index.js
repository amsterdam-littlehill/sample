import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)
var a="hello";
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      data:{
        data:a
      }
    }
  ]
})
