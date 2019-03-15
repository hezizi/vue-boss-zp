/* eslint-disable no-console */
// const Koa = require('koa');
// const app = new Koa();
// const router = require('./user');

// // 使用 router.prefix 可以在请求路由地址前面加上 /api
// router.prefix('/api')

// app.use(router.routes(), router.allowedMethods())

// app.listen(5000, () => {
//   console.log('服务已启动')
// })


const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser())

// 引入user.js
const user = require('./user');
// 当访问localhost:5000/api 开头的接口时就会去user.js中进行匹配
router.use('/api', user)

// 配置路由
app.use(router.routes(), router.allowedMethods())

app.listen(5000, () => {
  console.log('服务已启动')
})