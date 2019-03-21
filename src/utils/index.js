export default {
  /**
   * 根据用户信息，返回跳转地址
   * @param {string} type 
   * @param {string} avatar 
   */
  getRedirectPath({ type, avatar }) {
    let url = (type === 'boss') ? '/boss' : '/genuis';
    if (!avatar) {
      url += 'info'
    }
    return url
  }
}
