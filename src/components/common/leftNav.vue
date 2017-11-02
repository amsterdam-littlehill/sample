<template>
  <!--必须要有一个根元素-->
  <div class="left-nav">
    <ul>
      <li>
        <i class="icon iconfont icon-brush"></i>
        <span>客户修改</span>
      </li>
      <li>
        <i class="icon iconfont icon-publishgoods_fill"></i>
        <span>购物车</span>
      </li>
      <li>
        <i class="icon iconfont icon-shoujichongzhi"></i>
        <span>手机重置</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  .left-nav {
    color: #fff;
    font-size: 10px;
    height: 100%;
    background-color: #1D8CE0;
    float: left;
    width: 5%;
  }

  .iconfont {
    font-size: 24px;
  }

  .left-nav ul {
    padding: 0;
    margin: 0;
  }

  .left-nav ul li {
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #a5bcff;
    padding: 10px;
  }
</style>
