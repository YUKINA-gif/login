<template>
  <div id="profile">
    <DetailHeader />
    
    <h2>プロフィール</h2>
    
      <div class="profile">
        <div class="flex">
          <p class="profileName">{{ name }}</p>
          
          <button class="createButton" @click="edit">変更する</button>
        </div>
      
      <p v-if="active">{{ profile }}</p>
      <input type="text" v-model="profile" v-else />
    </div>
    <h2>投稿一覧</h2>
    <Message />
    <ShareMessage />
  </div>
</template>

<script>
import DetailHeader from '../components/DetailHeader';
import Message from '../components/Message';
import ShareMessage from '../components/ShareMessage';
import axios from 'axios';

export default {
  components:{
    DetailHeader,
    Message,
    ShareMessage
  },
  data() {
    return {
      active:true,
      name:this.$store.state.user.name,
      profile:this.$store.state.user.profile,
    };
  },
  methods: {
    edit(){
      if(!this.active){
        axios.put("https://warm-eyrie-05497.herokuapp.com/api/user",{
          email:this.$store.state.user.email,
          profile:this.profile,
        })
        .then((response) => {
          this.store.dispatch("changeUserData",{
            profile:this.profile,
          });
          console.log(response);
        });
      }
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
.profile{
  width: 95%;
  margin:0 auto 20px auto;
  height: auto;
  border: 1px solid darkgray;
  border-radius: 5px;
  line-height: 1.3;
  padding: 10px 20px;
}
.icon,.likelength{
  width: 20px;
  color: #fff;
  line-height: 1.3;  
}
.likelength{
  padding-left: 5px;
}
.icon{
  margin-left: 10px;
  cursor: pointer;
}
img:nth-last-child(2){
  margin-right: 10px;
}
.flex{
  display: flex;
  justify-content: space-between;
}
.profileName{
  font-weight: bold;
}
h2{
  font-size: 18px;
  margin: 10px 10px;
}
.createButton{
  padding: 3px 20px;
  background: rgb(121, 201, 204);
  color: #fff;
  outline: none;
}
</style>