/**
 * @desc mutation 
 * 只能处理同步操作，直接与state交互
 */

import { AUTH_SUCCESS, ERR_MSG } from './mutation-type';

export default {
  // 验证通过将用户信息保存到 state 中
  [AUTH_SUCCESS] (state, user) {
    state.user = {...user, msg: '注册成功'}
  },
  // 验证失败将错误信息保存到 state 中
  [ERR_MSG] (state, msg) {
    // state.user.msg = msg;
    // Vue.set(state.user, 'msg', msg)
    state.user = {msg}
  }
}