/**
 * @desc vuex action
 * 可以进行异步操作，commit mutation
 */

import axios from 'axios';

import { AUTH_SUCCESS, ERR_MSG } from './mutation-type';

// 保存用户填写的相关信息
export default {
  userInfo({commit}, userInfo) {
    let { username, password, passwordSure, type } = userInfo;
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
    axios
      .post('/api/register', {
        username,
        password,
        type
      })
      .then(res => {
        // 验证成功 commit 验证成功的 mutation
        if (res.status === 200 && res.data.code === 0) {
          commit(AUTH_SUCCESS, res.data.data)
        } else {
          // commit 验证失败的 mutation
          commit(ERR_MSG, res.data.msg)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}