<template>
  <el-menu mode="vertical" class="el-menu-vertical-demo" background-color="#545c64"
           text-color="#fff" unique-opened active-text-color="#ffd04b"
           :default-active="$route.path" :collapse="isCollapse">
    <!-- <nav-menu ></nav-menu>-->
    <sidebar-item :routes="permission_routers"></sidebar-item>
  </el-menu>
</template>


<script>
  //  引入mapGetters 辅助函数
  import { mapGetters } from 'vuex'
  import SidebarItem from '@/components/common/SidebarItem'

  export default {
    components: {SidebarItem},
    computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'permission_routers',
        'sidebar'
      ]),
      isCollapse () {
        return !this.sidebar.opened
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .el-menu {
    min-height: 100%;
  }
</style>
