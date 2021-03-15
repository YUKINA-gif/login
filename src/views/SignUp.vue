<template>
  <div>
    <div class="card">
      <p>新規登録</p>
      <div class="form">
        <input placeholder="ユーザーネーム" type="text" v-model="name"/>
        <input placeholder="プロフィール" type="text" v-model="profile"/>
        <input placeholder="メールアドレス" type="email" v-model="email"/>
        <input placeholder="パスワード" type="password" v-model="password"/>
        <button @click="create">新規登録</button>
      </div>
    </div>
  </div>
</template>

<script>
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
      axios.post("https://warm-eyrie-05497.herokuapp.com/api/signup",{
        name:this.name,
        profile:this.profile,
        email:this.email,
        password:this.password
      })
      .then(response => {
        console.log(response);
        this.$router.replase("/home");
      })
      .catch(error =>{
        alert(error);
      });
    }
  },
};

</script>

<style scoped>
button {
  width: 100px;
  text-align: center;
  padding: 8px 0 10px;
  color: #fff;
  background-color: #84ebb2;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  border: none;
}
.card {
  margin: 100px auto;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
}
.card p {
  color: black;
  font-weight: bold;
  text-align: center;
}
input {
  margin-top: 15px;
  width: 80%;
  border-radius: 10px;
  padding: 10px;
  border: 2px solid rgba(154, 241, 113, 0.938);
  color: black;
  outline: none;
}
.form {
  text-align: center;
}
.form button {
  margin-top: 15px;
}
</style>