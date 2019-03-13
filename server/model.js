// const mongoose = require('mongoose');

// // mongoose连接mongodb数据库, 数据库名为 vue-boss
// mongoose.connect('mongodb://localhost:27017/vue-boss');
// mongoose.connection.on('connected', () => {
//   console.log('mongodb数据库连接成功!!!');
// })

// const models = {
//   user: {
//     'username': {
//       type: String,
//       required: true
//     },
//     'password': {
//       type: String,
//       required: true
//     },
//     'type': {
//       type: String,
//       required: true
//     },
//     // 头像
//     'avator': {
//       type: String
//     },
//     // 简介
//     'desc': {
//       type: String
//     },
//     // 职位名
//     'title': {
//       type: String
//     },
//     'company': {
//       type: String
//     },
//     'money': {
//       type: String
//     }
//   }
// }

// for (const m in models) {
//   mongoose.model(m, new mongoose.Schema(models[m]))
// }

// module.exports = {
//   getModel(name) {
//     return mongoose.model(name)
//   }
// }