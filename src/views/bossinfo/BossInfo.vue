<template>
  <div class="">
    <NavBar><p slot="title">Boss信息完善</p></NavBar>
    <div class="content-wrapper df-aic df-jcc">
      <!-- 图像选择 -->
      <SelectAvatar @sendAvatar="receiveAvatar"/>
      <!-- 输入框组 -->
      <div class="input-group">
        <div class="input-item">
          <label>公司名称</label>
          <Input
            v-model="compony"
            placeholder="请输入公司名称"
            clearable 
          />
        </div>
        <div class="oh">
          <div class="input-item">
            <label>招聘职位</label>
            <Input
              v-model="title"
              placeholder="请输入招聘职位"
              clearable 
            />
          </div>
        </div>
        <div class="oh">
          <div class="input-item">
            <label>职位薪资</label>
            <Input
              v-model="money"
              placeholder="请输入职位薪资"
              clearable 
            />
          </div>
        </div>
        <div class="oh">
          <div class="input-item">
            <label>职位要求</label>
            <Input
              v-model="desc"
              type="textarea" 
              :autosize="{minRows: 4,maxRows: 6}"
              placeholder="请输入职位要求"
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

export default {
  name: 'bossinfo',
  data() {
    return {
      avatar: '',
      compony: '',
      title: '',
      money: '',
      desc: ''
    }
  },
  components: {
    NavBar,
    SelectAvatar
  },
  methods: {
    // 接收子组件传递过来的头像值
    receiveAvatar(val) {
      this.avatar = val
    },
    saveInfo() {
      let { avatar, compony, title, money, desc } = this;
      if (!avatar || !compony || !title || !money ||!desc) {
        this.$Message.info('信息请填写完整')
        return
      }
      
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