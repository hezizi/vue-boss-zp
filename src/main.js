import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Input, Button } from 'iview';
import 'iview/dist/styles/iview.css';
Vue.component('Input', Input);
Vue.component('Button', Button);

import '@/assets/style/public.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
