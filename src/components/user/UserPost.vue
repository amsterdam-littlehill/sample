<template>
  <div>{{$route.params.id}}的 【文章】</div>
</template>
<script>
  export default {
    name:'post',
    watch: {
      /*to 和 from 都是 路由信息对象*/
      '$route' (to, from) {
        console.log(to);
        console.log(from);
      }
    }
  }
</script>
