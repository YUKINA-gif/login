<template>
  <div class="detail">
    <DetailHeader />
    
    <h2>投稿一覧</h2>
      <div class="profile">
        <Message :id="id" />

    <h2>コメント一覧</h2>
        <div class="message" v-for="(comment,index) in data" :key="index">
          <div class="flex">
            <p class="name">{{comment.comment_user.name}}</p>
          </div>
          <div>
            <p class="text">{{comment.comment.content}}</p>
          </div>
        </div>
        <p class="commentTag">コメントを送る</p>
        <input v-model="content" type="text" />

        <div @click="send">
          <button class="comment" @click="send">コメント</button>
        </div>
        <!-- <ShareMessage /> -->
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
      .post()
    }
  }
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
  margin-left: 10px;

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