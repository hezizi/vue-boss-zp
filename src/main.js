import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button, Alert } from 'iview';
import 'iview/dist/styles/iview.css';
Vue.component('Button', Button);
Vue.component('Alert', Alert);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
