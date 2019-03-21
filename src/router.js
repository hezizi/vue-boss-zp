import Vue from "vue";
import Router from "vue-router";
import Login from "./views/login-register/Login";
import Register from "./views/login-register/Register";
import BossInfo from "./views/bossinfo/BossInfo";
import GenuisInfo from "./views/genuisinfo/GenuisInfo";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/bossinfo",
      name: "bossinfo",
      component: BossInfo
    },
    {
      path: "/genuisinfo",
      name: "genuisinfo",
      component: GenuisInfo
    }
  ]
});
