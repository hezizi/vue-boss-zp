/**
 * @desc vuex action
 * 可以进行异步操作，commit mutation
 */

import axios from 'axios';

import { AUTH_SUCCESS, ERR_MSG } from './mutation-type';

export default {
  // 显示loading加载
  // showLoading({commit}, val) {
  //   commit('loading', val)
  // },
  
  // 注册action
  async registerAction({commit}, user) {
    const { username, password, passwordSure, type } = user;
    if (!username) {
      commit(ERR_MSG, '请填写用户名')
      return
    }
    if (!password) {
      commit(ERR_MSG, '请设置密码')
      return
    }
    if (!passwordSure) {
      commit(ERR_MSG, '请输入确认密码')
      return
    }
    if (password !== passwordSure) {
      commit(ERR_MSG, '请填写两次密码不一致，请重新输入用户名')
      return
    }
    const res = await axios.post('/api/register', {
      username,
      password,
      type
    })
    if (res.status === 200 && res.data.code === 0) {
      commit(AUTH_SUCCESS, res.data.data)
    } else {
      commit(ERR_MSG, res.data.msg)
    }
  },
  // 保存用户完善信息action
  async completeInfoAction({commit}, completeInfo) {
    const res = await axios.post('/api/completeinfo', completeInfo)
    if (res.status === 200 && res.data.code === 0) {
      commit(AUTH_SUCCESS, res.data.data)
      return
    } 
    commit(ERR_MSG, res.data.msg)
  },
  // 登录action
  async loginAction({commit}, user) {
    const { username, password } = user;
    if (!username) {
      commit(ERR_MSG, '请输入用户名')
      return
    }
    if (!password) {
      commit(ERR_MSG, '请输入密码')
      return
    }
    const res = await axios.post('/api/login', user);
    if (res.status === 200 && res.data.code === 0) {
      commit(AUTH_SUCCESS, res.data.data)
      return
    }
    commit(ERR_MSG, res.data.msg)
  }
}