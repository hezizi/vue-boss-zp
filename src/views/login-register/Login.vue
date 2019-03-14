<template>
  <div class="common-box login">
    <Logo />
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
import './common.scss';
import Logo from '@/components/logo/Logo';

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
    login() {
      console.log(this.username)
    },
    register() {
      this.$router.push('/register')
    }
  },
}
</script>

<style lang="" scoped>
  
</style>