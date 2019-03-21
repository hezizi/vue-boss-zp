<template>
  <div class="">
    <NavBar><p slot="title">Boss信息完善</p></NavBar>
    <div class="content-wrapper df-aic df-jcc">
      <SelectAvatar />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar';
import SelectAvatar from '@/components/select-avatar/SelectAvatar';

export default {
  name: 'bossinfo',
  data() {
    return {
      
    }
  },
  components: {
    NavBar,
    SelectAvatar
  }
}
</script>

<style lang="scss" scoped>
  .content-wrapper {
    height: calc(100vh - 45px);
  }
</style>