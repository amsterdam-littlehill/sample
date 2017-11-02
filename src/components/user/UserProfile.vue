<template>
  <div>{{$route.params.id}} 【资料】</div>
</template>
<script>
  export default {
    name: 'profile',
    watch: {
      /*to 和 from 都是 路由信息对象*/
      '$route' ( to, from ) {
        console.log(to)
        console.log(from)
      }
    }
  }
</script>
