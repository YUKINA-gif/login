<template>
  <div id="Signup">
    <Header />
    
    <div class="card">
      <h2>新規作成</h2>
      <input type="name" v-model="name" placeholder="お名前">
      <input type="email" v-model="email" placeholder="メールアドレス">
      <input type="password" v-model="password" placeholder="パスワード">
      <textarea type="text" v-model="profile" placeholder="プロフィール"></textarea>
      <button @click="create">新規作成</button>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import axios from 'axios';
export default{
  data() {
    return {
      name:"",
      profile:"",
      email:"",
      password:"",
    };
  },
  methods: {
    create(){
      axios.post("https://warm-eyrie-05497.herokuapp.com/api/register",{
        name:this.name,
        profile:this.profile,
        email:this.email,
        password:this.password
      })
      .then(response => {
        console.log(response);
        this.$router.replace("/");
      })
      .catch(error =>{
        alert(error);
      });
    }
  },
  components:{
    Header
  }
};

</script>

<style scoped>
.card {
  margin: 120px auto;
  width: 350px;
}
.card h2 {
  color: gray;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}
input,textarea{
  margin: 20px auto;
  width: 350px;
  padding: 10px 0;
  border: 2px solid #bebebebb;
  border-radius: 5px;
  color: black;
  outline: none;
  font-size: 15px;
}
button{
  margin: 20px 75px;
  width: 200px;
  padding: 10px;
  border: 1px solid rgb(121, 201, 204);
  border-radius: 5px;
  background-color: rgb(121, 201, 204);
  color:#fff;
  font-weight: bold;
  cursor: pointer;
}
</style>