/**
 * @desc mutation 
 * 只能处理同步操作，直接与state交互
 */

import * as type from './mutation-type';
// import { AUTH_SUCCESS, ERR_MSG } from './mutation-type';
import Utils from '@/utils/index';

export default {
  // 显示loading加载
  // loading(state, val) {
  //   state.loading = val;
  // },
  
  // 验证通过将用户信息保存到 state 中
  [type.AUTH_SUCCESS] (state, user) {
    localStorage.setItem('userId', user._id)
    state.user = {
      ...user, 
      redirectTo: Utils.getRedirectPath(user)
    };
  },
  // 验证失败将错误信息保存到 state 中
  [type.ERR_MSG] (state, msg) {
    // state.user.msg = msg;
    // Vue.set(state.user, 'msg', msg)
    state.user = {msg}
  }
}