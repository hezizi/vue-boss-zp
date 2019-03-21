<template>
  <div class="">
    <div class="selected-avatar df-jcc">
      <Avatar :src="selectedAvatar"></Avatar>
    </div>
    <Button type="primary" @click="modal = true">选择头像</Button>
    <Modal
      title="选择头像"
      v-model="modal"
      :mask-closable="false"
      @on-ok="ok"
      @on-cancel="cancle"
    >
      <div class="avatar-modal df">
        <div 
          class="avatar df-aic df-jcc cp"
          v-for="(item, index) in avatarList" 
          :key="item.id"
          :class="{active: current === index}"
          @click="selectAvatar(item, index)"
        >
          <img :src="item.pic" alt="">
          <p>{{item.text}}</p>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'selectavatar',
  data() {
    return {
      modal: false,
      current: -1,
      selectedAvatar: '',
      avatarList: [{
        id: 1,
        pic: require('../../assets/images/boy.png'),
        text: 'boy'
      },{
        id: 2,
        pic: require('../../assets/images/girl.png'),
        text: 'girl'
      },{
        id: 3,
        pic: require('../../assets/images/man.png'),
        text: 'man'
      },{
        id: 4,
        pic: require('../../assets/images/woman.png'),
        text: 'woman'
      },{
        id: 5,
        pic: require('../../assets/images/bull.png'),
        text: 'bull'
      },{
        id: 6,
        pic: require('../../assets/images/chick.png'),
        text: 'chick'
      },{
        id: 7,
        pic: require('../../assets/images/crab.png'),
        text: 'crab'
      },{
        id: 8,
        pic: require('../../assets/images/hedgehog.png'),
        text: 'hedgehog'
      }]
    }
  },
  // mounted() {
  //   this.getAvatarData()
  // },
  methods: {
    // getAvatarData() {
    //   axios
    //     .get('/api/avatarlist')
    //     .then(res => {
    //       let { avatarList } = res.data;
    //       this.avatarList = avatarList;
    //     })
    // }

    selectAvatar(item, index) {
      this.current = index;
      this.selectedAvatar = item.pic;
    },
    ok() {
      if (this.current !== -1) {
        return
      }
      this.modal = true;
      console.log(this.modal)
      this.$Message.info('请选择头像');
    },
    cancle() {
      this.current = -1;
      this.selectedAvatar = '';
    }
  },
}
</script>

<style lang="scss" scoped>
  .selected-avatar {
    margin-bottom: 12px;
  }
  .avatar-modal {
    flex-wrap: wrap;
    .avatar {
      flex-direction: column;
      padding: 4px;
      margin: 0 4px;
      width: 60px;
      border: 1px solid transparent;
      img {
        margin-bottom: 6px;
      }
      &:hover {
        border: 1px solid #eee;
      }
      &.active {
        background-color: #eee;
      }
    }
  }
</style>