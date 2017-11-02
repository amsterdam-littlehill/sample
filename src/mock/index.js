import Mock from 'mockjs'
import loginAPI from './login'
import custAPI from './cust'

Mock.setup({
  timeout: '350-600'
})
// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)
//  拦截客户定位
Mock.mock(/\/cust\/qry/, 'post', custAPI.getCust)

export default Mock
