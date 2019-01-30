import axios from 'axios'
// import { Message } from 'element-react';

// axios 的另一种使用方法
// import store from '../store'
// Vue.prototype.$ajax = axios
// export function test(name) {
  // const url = `http://www.baidu.com?name=${name}`
  // return axios.get(url) // get
  // return axios.post(url, name,  // post name为对象 || json对象
  // { headers: {'Content-Type': 'application/json'} }) // json格式
  // { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }) // 表单提交
// }

// 创建axios实例
const service = axios.create({
  baseURL: 'http://music.itinga.cn', // api的base_url
  timeout: null               // 请求超时时间
})

// request 拦截器
service.interceptors.request.use(config => {
  // 请求之前要做的事情
  // if (token) {
  //  config.headers['X-Token'] = store.getters.token
  // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(response => response, error => {
  console.log('err' + error)
  // Message({
  //   message: error.message,
  //   type: 'error',
  //   duration: 1 * 1000
  // })
  return Promise.reject(error)
})

export default service
