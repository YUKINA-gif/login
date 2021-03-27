<template>
  <div id="header" class="flex">
    <h1>title</h1>
    <nav class="flex">
      <ul class="flex">
        <li @click="$router.push('/home')">ホーム</li>
        <li @click="$router.push('/profile')">プロフィール</li>
        <li @click="logout">ログアウト</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
methods:{
  logout(){
    this.$store.dispatch("logout");
  }
}
};
</script>
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
  font-weight: bold;
  cursor: pointer;
  margin-left: 30px;
}
</style>