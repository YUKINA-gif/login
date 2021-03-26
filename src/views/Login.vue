<template>
  <div id="Login">
    <Header />
    
    <div class="card">
      <h2>ログイン</h2>
      <input type="email" v-model="email" placeholder="メールアドレス">
      <input type="password" v-model="password" placeholder="パスワード">
      <button @click="login">ログイン</button>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
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
input {
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