import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue';
import store from "../store/index";
import Profile from "../views/Profile.vue";
import Detail from '../views/Detail.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      requiresAuth: true,
      },
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component:Register,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth:true,
    }
  },
   {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
    props:true,
    meta: {
      requiresAuth:true,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) && !store.state.auth
  ) {
    // このルートはログインされているかどうか認証が必要です。record = ルートレコード、meta.requiresAuthは上記ルートで設定したmetaフィールド

    //store.state.authはstore index.jsに設定したstateのauth

    // もしされていないならば、ログインページにリダイレクトします。
    //fullPath = クエリやhashを含む全体のURL
    console.log(store.state.auth)
    next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
     //認証済み、または認証不要であればそのまま表示
    next();
  }
});
export default router;
