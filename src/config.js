import axios from 'axios';
import {
  Spin
} from 'iview';

// 添加请求拦截器
axios.interceptors.request.use(config => {
  Spin.show();
  // store.dispatch('showLoading', true)
  return config
})

// 添加响应拦截器
axios.interceptors.response.use(config => {
  Spin.hide();
  // store.dispatch('showLoading', false)
  return config
})