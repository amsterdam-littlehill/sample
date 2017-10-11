<template>
  <div>
    <p>Hello,User {{$route.params.id}}!</p>
    <!--嵌套路由-->

    <router-link to="/profile">个人资料</router-link>
    <router-link to="/post">个人文章</router-link>
    <router-view></router-view>
  </div>


</template>
<script>
  export default {
    name: 'user',
    watch: {
      /*to 和 from 都是 路由信息对象*/
      '$route'(to, from) {
        console.log(to);
        console.log(from);
      }
    },
  }
</script>
