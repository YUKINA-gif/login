<template>
  <div id="login">
    <header>
      <nav>
        <ul>
          <li @click="$router.push('/signup')">新規作成</li>
          <li  @click="$router.push('/')">ログイン</li>
        </ul>
      </nav>
      </header>

    <div class="card">
      <p>ログイン</p>
      <div class="form">
      <input type="email" name="email" placeholder="メールアドレス" v-model="email">
      <input type="password" name="password" placeholder="パスワード" v-model="password">
      <button @click="login">ログイン</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email:"",
      password:"",
    };
  },
  methods:{
    login(){
      this.$store.dispatch("login",{
        email:this.email,
        password:this.password
      });

    }
  }
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
  background-color:#fff;
  border-radius: 10px;
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

ul{
  display: flex;
  margin-left: 20px;
}
</style>