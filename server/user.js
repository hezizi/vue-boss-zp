const Router = require('koa-router');
const router = new Router();
// const model = require('./model');
// const User = model.getModel('user');

router.post('/login', ctx => {
  ctx.body = 'hahaha'
})

module.exports = router;