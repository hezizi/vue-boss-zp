/**
 * @desc vuex action
 * 可以进行异步操作，commit mutation
 */


import { USER_INFO } from './mutation-type';

// 保存用户填写的相关信息
export default {
  userInfo({commit}, userInfo) {
    commit(USER_INFO, {userInfo})
  }
}