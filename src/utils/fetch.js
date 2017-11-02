import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  withCredentials: true, // 是否允许带cookie
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  timeout: 5000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  /*  if (config.method === 'post') {
   //为了避免qs格式化时对内层对象的格式化先把内层的对象转为
   data.strSQL = base64encode(data.strSQL);
   //由于使用的form-data传数据所以要格式化
   config.data = qs.stringify(config.data)
   }*/
  if (store.getters.token) {
    config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  debugger
  // Do something with request error
  console.log(error) // for debug
  return Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    debugger
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
