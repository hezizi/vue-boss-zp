<template>
  <div class="">
    <NavBar><p slot="title">大佬信息完善</p></NavBar>
    <div class="content-wrapper df-aic df-jcc">
      <!-- 图像选择 -->
      <SelectAvatar @sendAvatar="receiveAvatar"/>
      <!-- 输入框组 -->
      <div class="input-group">
        <div class="input-item">
          <label>求职岗位</label>
          <Input
            v-model="title"
            placeholder="请输入求职岗位"
            clearable 
          />
        </div>
        <div class="oh">
          <div class="input-item">
            <label>个人简介</label>
            <Input
              v-model="desc"
              type="textarea" 
              :autosize="{minRows: 4,maxRows: 6}"
              placeholder="请输入个人简介"
              clearable 
            />
          </div>
        </div>
        <Button type="primary" long @click="saveInfo">确定</Button>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/style/input.scss';

import NavBar from '@/components/navbar/NavBar';
import SelectAvatar from '@/components/select-avatar/SelectAvatar';

import { mapActions } from 'vuex';

export default {
  name: 'genuisinfo',
  data() {
    return {
      avatar: '',
      title: '',
      desc: ''
    }
  },
  components: {
    NavBar,
    SelectAvatar
  },
  methods: {
    ...mapActions(['completeInfo']),
      // 接收子组件传递过来的头像值
    receiveAvatar(val) {
      this.avatar = val
    },
    async saveInfo() {
      let { avatar, title, desc } = this;
      if (!avatar || !title || !desc) {
        this.$Message.info('信息请填写完整')
        return
      }
      await this.completeInfo({ avatar, title, desc })
      // 获取vuex中的redirectTo值，根据redirectTo来跳转页面
      let { redirectTo } = this.$store.state.user;
      this.$router.push(redirectTo)
    }
  },
}
</script>

<style lang="scss" scoped>
  .content-wrapper {
    flex-direction: column;
    height: calc(100vh - 45px);
    background-color: #f5f5f9;
    label {
      color: #666;
    }
  }
</style>