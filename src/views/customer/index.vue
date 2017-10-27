<template>
  <div class="app-container" v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)">
    <el-input v-model="custId" size="small" placeholder="身份证号/用户号码/客户姓名" @blur="getCust">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <div v-text="cust_info"></div>
  </div>
</template>
<style>
  body {
    margin: 0;
  }
</style>
<script>
  import { getCust } from '@/api/cust'

  export default {
    data () {
      return {
        custId: '',
        loading: false,
        cust_info: ''
      }
    },
    methods: {
      getCust () {
        this.loading = true
        /* this.$axios.post(getCust(this.custId)).then((res) => {
           this.cust_info = res.data
           this.loading = false
         }).catch((error) => {
           console.log('客户定位失败:' + error)
           this.loading = false
         })*/
        /*Promise对象*/
        return new Promise((resolve, reject) => {
          getCust(this.custId).then(response => {
            debugger
            this.cust_info = response.data
            this.loading = false
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      }
    }

  }
</script>
