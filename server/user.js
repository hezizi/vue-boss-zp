const Router = require('koa-router');
const router = new Router();
const model = require('./model');
const User = model.getModel('user');

// // 注册
// router.get('/register', async ctx => {
//   ctx.body = ctx.request;
// })

// module.exports = router;


router.post('/register', async ctx => {
  const { username, password, type } = ctx.request.body;
  const findRes = await User.find({username});
  // 查询结果不为空时，提示邮箱已注册
  if (findRes.length) {
    ctx.status = 500;
    ctx.body = {code: 1, msg: '该用户已注册'};
    return
  }
  // 否则就保存注册信息
  const newUser = new User({
    username,
    password,
    type
  })
  newUser
    .save()
    .then(doc => {
      // ctx.body = doc
      return doc
    })
    .catch(() => {
      // ctx.body = {code: 1, msg: '后端出错了'}
      return {code: 1, msg: '后端出错了'}
    })

    ctx.body = {code: 0, data: newUser}
})

module.exports = router.routes();