import axios from 'axios'
axios.defaults.baseURL = 'http://open.duyiedu.com'
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // console.log(config);
  config.params = {
    ...config.params,
    appkey: 'x649615715_1573181074066'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
export default axios
