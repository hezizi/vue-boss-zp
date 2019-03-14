/* eslint-disable no-console */
const Koa = require('koa');
const app = new Koa();
const router = require('./user');

// 使用 router.prefix 可以在请求路由地址前面加上 /api
router.prefix('/api')
app.use(router.routes(), router.allowedMethods())

app.listen(5000, () => {
  console.log('服务已启动')
})