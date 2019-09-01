const Router = require('koa-router');
const router = new Router();
const model = require('./model');
const User = model.getModel('user');
const _filter = {'password': 0, '__v': 0};

// // 注册
// router.get('/register', async ctx => {
//   ctx.body = ctx.request;
// })

// module.exports = router;


router.get('/delete', async ctx => {
  const res = await User.deleteMany({});
  ctx.body = res;
})


/**
 * @route POST /api/login
 * @desc 注册接口地址 保存注册信息
 */
router.post('/register', async ctx => {
  const { username, password, type } = ctx.request.body;
  const findRes = await User.find({username});
  // 查询结果不为空时，提示用户已注册
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
      ctx.body = doc;
      // return doc
    })
    .catch(() => {
      ctx.body = {code: 1, msg: '后端出错了'}
      // return {code: 1, msg: '后端出错了'}
    })
    const { _id } = newUser;
    // 设置cookies
    ctx.cookies.set('userId', _id);
    ctx.body = {code: 0, data: {username, type, _id}}
})


/**
 * @route POST /api/login
 * @desc 登录接口地址 放回token
 */
router.post('/login', async ctx => {
  const { username, password } = ctx.request.body;
  const loginRes = await User.find({username, password}, _filter);
  if (!loginRes.length) {
    ctx.body = {code: 1, msg: '用户名或密码错误, 请重新输入'}
    return
  }
  ctx.body = {code: 0, data: loginRes[0]}
})


/**
 * @route GET /api/completeinfo
 * @desc 用户信息完善头像选择
 */
router.post('/completeinfo', async ctx => {
  const userId = ctx.cookies.get('userId');
  if (!userId) {
    return
  }

  /**
   * findByIdAndUpdate()
   * @params userId _id
   * @params ctx.request.body 需要修改的数据
   */
  const res = await User.findByIdAndUpdate(userId, ctx.request.body);
  const data = Object.assign({}, {
    username: res.username,
    type: res.type
  }, ctx.request.body)
  ctx.body = {code: 0, data};
})


/**
 * @route GET /api/avatarlist
 * @desc 用户信息完善头像选择
 */
const avatarList = require('../src/api/avatarlist.json');
router.get('/avatarlist', async ctx => {
  ctx.body = avatarList
})



module.exports = router.routes();
