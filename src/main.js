import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import {
  Input,
  Button,
  RadioGroup,
  Radio,
  Message,
  Modal,
  Icon,
  Avatar,
  // Spin
} from 'iview';
import 'iview/dist/styles/iview.css';
Vue.component('Input', Input);
Vue.component('Button', Button);
Vue.component('RadioGroup', RadioGroup);
Vue.component('Radio', Radio);
Vue.component('Modal', Modal);
Vue.component('Icon', Icon);
Vue.component('Avatar', Avatar);

// 全局注册Message
Vue.prototype.$Message = Message;
// Vue.prototype.$Message.config({
//   top: '100'
// })
// Vue.prototype.$Spin = Spin;

import '@/assets/style/public.scss';
import './config';

// 全局路由守卫
// 注意：参数 to from next 顺序严格要求
router.beforeEach((to, from, next) => {
  console.log(to, from)
  // 如果进入的目标 路由对象不是login或register，则判断是否有用户信息，没有则进行注册
  if (to.path !== '/login' && to.path !== '/register' && to.path !== '/') {
    // 没有用户id，则跳转登录页面
    if (!store.getters.getUserId) {
      next('/')
      return
    }
    // 如果未匹配到路由
    if (!to.name) {
      next({path: from.path})
      return
    }
    next()
    return
  }
  next()
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");