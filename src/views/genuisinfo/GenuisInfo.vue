<template>
  <div class="">
    <NavBar><p slot="title">大佬信息完善</p></NavBar>
    <div class="content-wrapper df-aic df-jcc">
      <!-- 图像选择 -->
      <SelectAvatar />
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

export default {
  name: 'genuisinfo',
  data() {
    return {
      
    }
  },
  components: {
    NavBar,
    SelectAvatar
  },
  methods: {
    saveInfo() {
      
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