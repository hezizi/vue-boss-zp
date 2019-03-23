<template>
  <div class="common-box login">
    <!-- <Logo /> -->
    <div class="input-group oh">
      <div class="input-item">
        <label>用户名：</label>
        <Input
          v-model="username"
          placeholder="请输入用户名"
          clearable 
        />
      </div>
      <div class="oh">
        <div class="input-item">
          <label>密码：</label>
          <Input
            v-model="password"
            type="password"
            placeholder="请输入用密码"
            clearable 
          />
        </div>
      </div>
      <Button type="primary" long @click="login">登录</Button>
      <Button type="default" long @click="register">注册</Button>
    </div>
  </div>
</template>

<script>
import '@/assets/style/input.scss';
import './common.scss';

import Logo from '@/components/logo/Logo';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    Logo
  },
  methods: {
    ...mapActions(['loginAction']),
    ...mapGetters(['getErrMsg']),
    async login() {
      const { username, password } = this;
      await this.loginAction({ username, password });
      // 如果登录成功，跳转到相应的路由
      if (!this.getErrMsg()) {
        let { redirectTo } = this.$store.state.user;
        this.$router.push(redirectTo)
        return
      }
      // 如果有errMsg，则提示报错信息
      this.$Message.info(this.getErrMsg())
    },
    register() {
      this.$router.push('/register')
    }
  },
}
</script>

<style lang="" scoped>
  
</style>