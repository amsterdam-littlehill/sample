/*
* 入口 加载组件 初始化
* */


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from './utils/fetch'
import router from './router'
import store from 'store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './icons' // icon
import './mock'  // 该项目所有请求使用mockjs模拟
import './permission' // 权限

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = Axios
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
