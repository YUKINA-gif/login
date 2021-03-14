<template>
  <div>
    <div class="card">
      <p>新規登録</p>
      <div class="form">
        <input placeholder="ユーザーネーム" type="text" />
        <input placeholder="プロフィール" type="text" />
        <input placeholder="メールアドレス" type="email" />
        <input placeholder="パスワード" type="password" />
        <button @click="create">新規登録</button>
      </div>
    </div>
  </div>
</template>

<script>

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