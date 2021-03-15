import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';
import router from '../router/index';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: "",
    auth:"",
  },
  mutations: {
    auth(state, payload) {
      state.auth = payload;
    },
    user(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async login({ commit },{ email, password }){
      const responseLogin = await axios.post(
        "https://warm-eyrie-05497.herokuapp.com/api/login",
        {
          email: email,
          password: password,
        },
      );
      const responseUser = await axios.get(
        "https://warm-eyrie-05497.herokuapp.com/api/user",
        {
          params: {
            email: email,
          },
        }
      );
      commit("auth", responseLogin.data.auth);
      commit("user", responseUser.data.data[0]);
      router.replace("/home");
    },
  },
  modules: {
  }
})
