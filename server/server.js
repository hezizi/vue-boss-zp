/* eslint-disable no-console */
const Koa = require('koa');
const app = new Koa();
const router = require('./user');

app.use(router.routes())

app.listen(5000, () => {
  console.log('服务已启动')
})