<template>

  <div id="app">
    <!--使用router-link组件来导航-->
    <!--通过传入的'to'属性指定链接-->
    <!--<router-link>默认会渲染成一个<a>标签-->
    <!--<router-link to="/example" class="icon iconfont icon-brush">例子</router-link>
    <router-link to="/user/bar" class="icon iconfont icon-brush">bar</router-link>
    <router-link to="/user/foo" class="icon iconfont icon-brush">foo</router-link>-->
    <!--路由出口-->
    <!--路由匹配到的组件将渲染在这里-->
    <!--侧边栏-->
    <!--<left-nav></left-nav>-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }

</script>

<style lang="scss">
  // 全局自定义的css样式
  @import './styles/index.scss';
</style>
