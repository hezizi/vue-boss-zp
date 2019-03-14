const Router = require('koa-router');
const router = new Router();
// const model = require('./model');
// const User = model.getModel('user');

router.get('/login', async ctx => {
  ctx.body = 'hahaha'
})

module.exports = router;