const Router = require('koa-router');
const router = new Router();
const model = require('./model');
const User = model.getModel('user');

// // 注册
// router.get('/register', async ctx => {
//   ctx.body = ctx.request;
// })

// module.exports = router;

/**
 * @route POST /pi/login
 * @desc 注册接口地址 保存注册信息
 */
router.post('/register', async ctx => {
  const { username, password, type } = ctx.request.body;
  const findRes = await User.find({username});
  // 查询结果不为空时，提示邮箱已注册
  if (findRes.length) {
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
      ctx.body = doc
      // return doc
    })
    .catch(() => {
      ctx.body = {code: 1, msg: '后端出错了'}
      // return {code: 1, msg: '后端出错了'}
    })

    ctx.body = {code: 0, data: newUser}
})


/**
 * @route POST /pi/login
 * @desc 登录接口地址 放回token 
 */
router.post('/login', async ctx => {
  const { username, password } = ctx.request.body;
  let loginRes = await User.find({username, password});
  if (!loginRes.length) {
    ctx.body = {code: 1, msg: '用户名或密码错误, 请重新输入'}
    return
  }
  ctx.body = {code: 0, data: loginRes}
})


router.get('/delete', async ctx => {
  let res = await User.deleteMany({});
  ctx.body = res
})

module.exports = router.routes();