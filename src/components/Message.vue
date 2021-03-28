<template>
  <div>
    <div class="post" v-for="(value,index) in shares" :key="index">
      <div class="message">
        <p class="text name">{{ value.name }}</p>
        <p class="text">{{ value.item.share }}</p>
        <div class="flex">
          <img 
            class="icon"
            src="../assets/heart.png"
            alt="いいね"
            @click="fav(index)"
          />
          <p class="likelength">{{ value.like.length }}</p>
          <img
            class="icon"
            src="../assets/detail.png"
            alt="返信"
            @click="$router.push({path:'/detail/' + value.item.id,
            params: { id: value.item.id },})" 
            v-if="profile"
          />
          <img
            class="icon"
            src="../assets/cross.png"
            alt="削除"
            @click="del(index)" 
            v-if="path && profile"
          />
        </div>

        
      </div>
    </div>
   </div>
</template>

<script>
import axios from 'axios';
export default {
  props:["id"],
  data() {
    return {
      shares: [],
      path:true,
      profile:true,
    };
    
  },
    methods: {
      fav(index){
        const result = this.shares[index].like.some((value) => {return value.user_id == this.$store.state.user.id});
        
        // some() 特定のデータが含まれているかどうか調べる
       if (result) {
         this.shares[index].like.forEach((element) => {
           if (element.user_id == this.$store.state.user.id) {axios({
             method: "delete",
             url: "https://warm-eyrie-05497.herokuapp.com/api/like",
             data: {
               share_id:this.shares[index].item.id,
               user_id:this.$store.state.user.id,
             },
             }).then((response) => {
               console.log(response);
               this.$router.go({
                 path:this.$router.currentRoute.path,
                 force: true,
               });
             });
           }
         });
       }else{
         axios.post("https://warm-eyrie-05497.herokuapp.com/api/like",{
          share_id:this.shares[index].item.id,
          user_id:this.$store.state.user.id,
         })
          .then((response) => {
            console.log(response);
            this.$router.go({
            path:this.$router.currentRoute.path,
            force: true,
          });
        });
      }
    },
    del(index){
      axios.delete("https://warm-eyrie-05497.herokuapp.com/api/shares/" + 
      this.shares[index].item.id
      ).then((response) => {
        console.log(response);
        this.$router.go({
        path: this.$router.currentRoute.path,
        force: true,
      });
      });
    },
    async getShares() {
      let data = [];
      const shares = await axios.get(
        "https://warm-eyrie-05497.herokuapp.com/api/shares"
      );
      for (let i = 0; i < shares.data.data.length; i++) {
        await axios
          .get(
            "https://warm-eyrie-05497.herokuapp.com/api/shares/" + shares.data.data[i].id
          )
      .then((response) => {
        if (this.$route.name == "profile") {
          if (response.data.item.user_id == this.$store.state.user.id) {
                data.push(response.data);
              }
            } else if (this.$route.name == "detail") {
              if (response.data.item.id == this.id) {
                data.push(response.data);
              }
            } else {
              data.push(response.data);
            }
          });
      }
      this.shares = data;
      console.log(this.shares);
    },
  },
  created() {
    if (this.$route.name === "home") {
      this.path = false;
    }
    if (this.$route.name === "detail") {
      this.profile = false;
    }
    this.getShares();
  },
  
};
</script>


<style scoped>
.message{
  width: 98%;
  margin:0 auto;
  height: auto;
  border: 1px solid darkgray;
  border-radius: 5px;
  line-height: 1.5;
}
.text{
  padding: 10px 20px 5px;
}
.icon,.likelength{
  width: 20px;
  background: rgb(121, 201, 204);
  color: #fff;
  line-height: 1.3;  
}
.likelength{
  padding-left: 5px;
}
.icon{
  margin-left: 20px;
  cursor: pointer;
}
img:nth-last-child(2){
  margin-right: 10px;
}
.flex{
  display: flex;
  background: rgb(121, 201, 204);
}
.name{
  font-weight: bold;
}
h2{
  font-size: 18px;
  margin: 10px 10px;
}
.post{
  margin-bottom: 10px;
}
</style>