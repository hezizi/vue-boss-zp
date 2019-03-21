<template>
  <div class="">
    <Button type="primary" @click="modal = true">选择头像</Button>
    <Modal
      title="选择头像"
      v-model="modal"
      :mask-closable="false"
    >
      
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'selectavatar',
  data() {
    return {
      modal: false
    }
  },
  
}
</script>

<style lang="scss" scoped>
  
</style>