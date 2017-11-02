<template>
  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left"
             label-width="0px"
             class="card-box login-form">
      <h3 class="title">Login</h3>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <icon-svg icon-class="icon-kefuyouxian"/>
        </span>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="username"/>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <icon-svg icon-class="icon-mima"></icon-svg>
        </span>
        <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password"
                  autoComplete="on"
                  placeholder="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click.native.prevent="handleLogin">
          Sign in
        </el-button>
        <el-button @click.native.prevent="resetForm">重置</el-button>
        <el-button type="info" :loading="loading2" @click.native.prevent="loginDefault">默认登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { isvalidUsername } from '@/utils/validate'

  export default {
    name: 'login',
    data () {
      const validateUsername = ( rule, value, callback ) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      }
      const validatePass = ( rule, value, callback ) => {
        if (value.length < 5) {
          callback(new Error('密码不能小于5位'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [{required: true, trigger: 'blur', validator: validateUsername}],
          password: [{required: true, trigger: 'blur', validator: validatePass}]
        },
        loading: false,
        loading2: false
      }
    },
    methods: {
      loginDefault () {
        //  默认密码登录
        this.loginForm = {'username': 'admin', 'password': 'admin'}
        debugger
        this.loading2 = true
        /*  dispatch action 中定义的方法*/
        this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
          this.loading2 = false
          /*  this.$router.push(location) 跳转链接*/
          this.$router.push({path: '/'})
        }).catch(() => {
          this.loading2 = false
        })
      },
      handleLogin () {
        //  element-ui 表单自定义校验
        debugger
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            /*  dispatch action 中定义的方法*/
            this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
              this.loading = false
              /*  this.$router.push(location) 跳转链接*/
              this.$router.push({path: '/'})
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            this.loading = false
            return false
          }
        })
      },
      resetForm () {
        this.$refs.loginForm.resetFields()//  表单重置
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../../styles/mixin";

  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;
  .login-container {
    @include relative;
    height: 100vh;
    background-color: $bg;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
    }
    .thirdparty-button {
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }
</style>
