<template>
  <div class="loading">
    <Icon 
      type="ios-loading" 
      size=18 
      class="demo-spin-icon-load"
      v-if="show"
    >
    </Icon>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
  .demo-spin-col{
    height: 100px;
    position: relative;
    border: 1px solid #eee;
  }
  .loading {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    margin-left: -20px;
    margin-top: -20px;
  }
</style>