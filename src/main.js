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
router.beforeEach((to, next, from) => {
  // 如果进入的目标 路由对象不是login或register，则判断是否有用户信息，没有则进行注册
  if (to.path !== '/login' || to.path !== '/register') {

  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");