<template>
  <div class="common-box register">
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
      <div class="oh">
        <div class="input-item">
          <label>确认密码：</label>
          <Input
            v-model="passwordSure"
            type="password"
            placeholder="请输入确认密码"
            clearable 
          />
        </div>
      </div>
      <RadioGroup v-model="type">
        <Radio class="radio df df-aic" label="Boss"></Radio>
        <Radio class="radio df df-aic" label="大佬"></Radio>
      </RadioGroup>
      <Button type="primary" long @click="register">注册</Button>
      <Button type="default" long @click="login">登录</Button>
    </div>
  </div>
</template>

<script>
import './common.scss';
import Logo from '@/components/logo/Logo';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'register',
  data() {
    return {
      username: '',
      password: '',
      passwordSure: '',
      type: 'Boss'
    }
  },
  components: {
    Logo
  },
  methods: {
    ...mapActions(['userInfo']),
    ...mapGetters(['getErrMsg']),
    login() {
      this.$router.push('/login')
    },
    register() {
      let { username, password, passwordSure, type } = this;
      this.userInfo({ username, password, passwordSure, type });
      if (!this.getErrMsg()) {return}
      this.$Message.info(this.getErrMsg())
    }
  },
}
</script>

<style lang="scss" scoped>
  .ivu-radio-group {
    display: flex;
    margin: 6px 0;
    .radio {
      margin-right: 20px;
      font-size: 16px;
      color: #fff;
    }
  }
</style>