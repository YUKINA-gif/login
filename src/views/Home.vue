<template>
  <div class="home">
    <DetailHeader />
    <h2>ホーム</h2>
    <Message />
    <ShareMessage />
  </div>
</template>

<script>
import DetailHeader from '../components/DetailHeader';
import ShareMessage from '../components/ShareMessage';
import Message from '../components/Message';

export default{
  components:{
    DetailHeader,
    ShareMessage,
    Message
  },
}
</script>

<style scoped>

h2{
  font-size: 18px;
  margin: 10px 10px;
}

</style>
