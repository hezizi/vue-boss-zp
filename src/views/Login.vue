<template>
  <div class="login">
    <Logo />
    <div class="input-group oh">
      <div class="input-item">
        <span class="ar">用户名：</span>
        <Input
          v-model="username"
          placeholder="请输入用户名"
          clearable 
        />
      </div>
      <div class="oh">
        <div class="input-item">
          <span class="ar">密码：</span>
          <Input
            v-model="password"
            type="password"
            placeholder="请输入用密码"
            clearable 
          />
        </div>
      </div>
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
  }
}
</script>

<style lang="scss" scoped>
  .input-group {
    padding: 0 20px;
    .input-item {
      display: flex;
      align-items: center;
      margin: 6px 0;
      span {
        min-width: 60px;
      }
    }
  }
</style>