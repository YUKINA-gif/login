<template>
  <div class="share">
    <div>
      <textarea v-model="share"></textarea>
    </div>
  
      <button @click="send">投稿</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      share:"",
    };
  },
  methods: {
    send(){
      if (this.share == "") {
        alert("シェアする内容を入力してください");
      }else{
        axios.post("https://warm-eyrie-05497.herokuapp.com/api/shares",{
          user_id:this.$store.state.user.id,
          share: this.share,
        })
        .then((response) => {
          console.log(response);
          alert("シェアしました");
          this.share = "";
          this.$router.go({
            path:this.$router.currentRoute.path,
            force:true,
          });
        });
      }
    },
  },
};
</script>

<style scoped>
textarea{
  margin-left: 1%;
  margin-top:20px;
}
button{
  margin: 10px 1%;
  padding: 3px 20px;
  background: rgb(121, 201, 204);
  color: #fff;
  outline: none;
}
</style>