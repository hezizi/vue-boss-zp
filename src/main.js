import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import {
  Input,
  Button,
  RadioGroup,
  Radio,
  Message
} from 'iview';
import 'iview/dist/styles/iview.css';
Vue.component('Input', Input);
Vue.component('Button', Button);
Vue.component('RadioGroup', RadioGroup);
Vue.component('Radio', Radio);

// 全局注册Message
Vue.prototype.$Message = Message;
// Vue.prototype.$Message.config({
//   top: '100'
// })

import '@/assets/style/public.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");