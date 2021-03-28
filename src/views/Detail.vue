<template>
  <div class="detail">
    <DetailHeader />
    
    <h2>投稿一覧</h2>
      <div class="profile">
        <Message :id="id" />

    <h2>コメントを送る</h2>
        <div class="message" v-for="(comment,index) in data" :key="index">
          <div class="flex">
            <p class="name">{{comment.comment_user.name}}</p>
          </div>
          <div>
            <p class="text">{{comment.comment.content}}</p>
          </div>
        </div>
        <input v-model="content" type="text" />

        <div @click="send">
          <button class="comment" @click="send">コメント</button>
        </div>
        <button class="comment" @click="$router.push('/home')">戻る</button>
    </div>
    </div>
</template>

<script>
 import DetailHeader from '../components/DetailHeader';
 import Message from '../components/Message';
 import axios from 'axios';
export default {
 
  props:["id"],
  data() {
    return {
      content: "",
      data: "",
    };
  },
  components:{
    DetailHeader,
    Message
  },
  methods:{
    send(){
      axios
      .post("https://warm-eyrie-05497.herokuapp.com/api/comment",{
        share_id:this.id,
        user_id:this.$store.state.user.id,
        content:this.content,
      })
      .then((response) => {
        console.log(response);
        this.content = "";
        this.$router.go({
          path:this.$router.currentRoute.path,
          force:true,
        });
      });
    },
    comment(){
      axios
      .get("https://warm-eyrie-05497.herokuapp.com/api/shares/" + this.id)
      .then((response) => {
        this.data = response.data.comment;
      });
    },
  },
  created(){
    this.comment();
  },
  };
</script>

<style scoped>
h2{
  font-size: 18px;
  margin: 10px 10px;
}
.comment{
  padding: 3px 20px;
  background: rgb(121, 201, 204);
  color: #fff;
  outline: none;
  margin: 10px 0 0 10px;

}
.commentTag{
  margin: 30px 10px 5px 10px;
}
input{
  margin: 0 0 5px 10px;
  width: 60%;
  line-height: 1.3;
}
.message{
  width: 98%;
  margin:0 auto;
  height: auto;
  border: 1px solid darkgray;
  border-radius: 5px;
  line-height: 1.5;
}
</style>