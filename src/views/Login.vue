<template>
  <div class="login">
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

<style lang="scss" scoped>
  .login {
    height: calc(100vh);
    background-image: url('../assets/images/bg-boss.jpg');
    background-size: cover;
    .input-group {
      max-width: 500px;
      margin: auto;
      padding: 20px;
      box-shadow: 0 0 20px rgba(255, 255, 255, .3);
      .input-item {
        margin: 6px 0 10px;
        label {
          display: inline-block;
          margin-bottom: 6px;
          color: #fff;
        }
      }
      button {
        height: 40px;
        margin: 10px 0;
        font-size: 16px;
      }
    }
  }
</style>