<template>
  <div id="header" class="flex">
    <h1>title</h1>
    <nav class="flex">
      <ul class="flex">
        <li @click="$router.push('/signup')">新規登録</li>
        <li @click="$router.push('/')">ログイン</li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
#header{
  background-color: rgb(121, 201, 204);
  color: #fff;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
}
.flex{
  display: flex;
  justify-content: space-between;
}
h1{
  font-size: 25px;
}
li{
  margin-left: 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>