/**
 * @desc getters
 * 获取状态
 */

export default {
  getErrMsg({user}) {
    return user.msg
  },
  getUserInfo({user}) {
    return user
  },
}