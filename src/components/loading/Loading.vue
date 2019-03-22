<template>
  <div class="loading df-aic df-jcc" v-if="this.$store.state.loading">
    <Icon 
      type="ios-loading" 
      size=18 
      class="demo-spin-icon-load"
    >
    </Icon>
    加载中...
  </div>
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {
      
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
    z-index: 99;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    margin-left: -40px;
    margin-top: -40px;
    color: #fff;
    background-color: rgba(51, 51, 51, .5);
    .demo-spin-icon-load {
      margin-bottom: 4px;
      font-size: 46px !important;
    }
  }
</style>