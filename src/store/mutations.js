/**
 * @desc mutation 
 * 只能处理同步操作，直接与state交互
 */


import { USER_INFO } from './mutation-type';

export default {
  [USER_INFO] (state, user) {
    state.user = user
  }
}