<template>
  <div class="">
    <Button type="primary" @click="modal = true">选择头像</Button>
    <Modal
      title="选择头像"
      v-model="modal"
      :mask-closable="false"
    >
      <div class="avatar-wrapper df">
        <div 
          class="avatar df-aic df-jcc cp"
          v-for="item in avatarList" :key="item.id"
        >
          <img :src="item.pic" alt="">
          <p>{{item.text}}</p>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'selectavatar',
  data() {
    return {
      modal: false,
      avatarList: [{
        id: 1,
        pic: require('../../assets/images/boy.png'),
        text: 'boy'
      },{
        id: 2,
        pic: require('../../assets/images/girl.png'),
        text: 'girl'
      },{
        id: 1,
        pic: require('../../assets/images/boy.png'),
        text: 'boy'
      },{
        id: 2,
        pic: require('../../assets/images/girl.png'),
        text: 'girl'
      },{
        id: 1,
        pic: require('../../assets/images/boy.png'),
        text: 'boy'
      },{
        id: 2,
        pic: require('../../assets/images/girl.png'),
        text: 'girl'
      },{
        id: 1,
        pic: require('../../assets/images/boy.png'),
        text: 'boy'
      },{
        id: 2,
        pic: require('../../assets/images/girl.png'),
        text: 'girl'
      },{
        id: 1,
        pic: require('../../assets/images/boy.png'),
        text: 'boy'
      },{
        id: 2,
        pic: require('../../assets/images/girl.png'),
        text: 'girl'
      },{
        id: 1,
        pic: require('../../assets/images/boy.png'),
        text: 'boy'
      },{
        id: 2,
        pic: require('../../assets/images/girl.png'),
        text: 'girl'
      },]
    }
  },

}
</script>

<style lang="scss" scoped>
  .avatar-wrapper {
    .avatar {
      flex-direction: column;
      flex-wrap: wrap;
      padding: 4px;
      margin: 0 4px;
      // width: 60px;
      flex: 1;
      border: 1px solid transparent;
      img {
        margin-bottom: 6px;
      }
      &:hover {
        border: 1px solid #eee;
      }
    }
  }
</style>