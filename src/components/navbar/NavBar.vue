<template>
  <div class="">
    <div class="navbar df-aic df-jcc">
      <div class="navbar-left"><Icon type="ios-arrow-back" /></div>
      <div class="navbar-title">
        <!-- slot 作用：将父组件使用了slot属性并且值为title的内容分发到该slot标签中 -->
        <slot name="title"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    height: 45px;
    font-size: 18px;
    color: #fff;
    background-color: #108ee9;
    .navbar-left {
      position: absolute;
      left: 10px;
      font-size: 22px;
    }
  }
</style>