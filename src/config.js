import axios from 'axios';

// 添加请求拦截器
axios.interceptors.request.use(config => {
  this.$Spin.show();
  return config
})

// 添加响应拦截器
axios.interceptors.response.use(config => {
  this.$Spin.hide();
  return config
})