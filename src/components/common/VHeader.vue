<!--公用头部-->
<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar"></hamburger>
    <div class="avatar-wrapper">
      <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
    </div>
    <el-dropdown class="avatar-container" >
      <span class="el-dropdown-link">用户名：<el-tag class="userName" type="gray" :name="name" >{{name}}</el-tag></span>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class='inlineBlock' to="/">
          <el-dropdown-item>
            首页
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided><span @click="logout" style="display:block;">退出登录</span></el-dropdown-item>
      </el-dropdown-menu>

    </el-dropdown>
  </el-menu>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    .hamburger-container {
      line-height: 58px;
      height: 50px;
      float: left;
      padding: 0 10px;
    }
    .userName {
      position: relative;
      color: #13ce66;
      margin-top: 15px;
    }
    .avatar-wrapper {
      margin-top: 5px;
      display: inline-block;
      position: absolute;
      right: 150px;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
    .avatar-container {
      cursor: pointer;
      height: 50px;
      display: inline-block;
      position: absolute;
      right: 10px;

    }
  }
</style>

<script>
  import {mapGetters} from 'vuex'
  import Hamburger from '@/components/common/Hamburger'

  export default {
    name: 'header',
    components: {
      Hamburger
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'name',
        'avatar'
      ])
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('ToggleSideBar')
      },
      logout() {
        this.$store.dispatch('LogOut').then(() => {
          this.$router.push({path: '/login'})
          //location.reload()// 为了重新实例化vue-router对象 避免bug
        })
      }
    }
  }
</script>
