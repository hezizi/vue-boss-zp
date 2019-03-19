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
      <!-- <h2>{{ user }}</h2> -->
    </div>
  </div>
</template>

<script>
import './common.scss';
import Logo from '@/components/logo/Logo';

import axios from 'axios';
import { mapState, mapActions } from 'vuex';

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
  
  computed: {
    ...mapState(['user'])
    // ...mapState({
    //   user: 'user'
    // })
  },
  // computed: mapState({
  //   // userI: 'user'
  //   userI: state => state.user
  // }),
  // computed: {
  //   userI() {
  //     return this.$store.state.user
  //   }
  // },

  methods: {
    ...mapActions(['userInfo']),
    login() {
      this.$router.push('/login')
    },
    register() {
      let { username, password, passwordSure, type } = this;
      if (!username) {
        alert('请填写用户名')
        return
      }
      if (!password) {
        alert('请设置密码')
        return
      }
      if (!passwordSure) {
        alert('请输入确认密码')
        return
      }
      axios
        .post('/api/register', {
          username,
          password,
          type
        })
        .then(res => {
          if (res.status === 200 && res.data.code === 0) {
            this.userInfo({ username, password, passwordSure, type });
          }
        })
        .catch(err => {
          console.log(err)
        })
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