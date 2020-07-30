import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    errorMsg: ""
  },
  mutations: {
    getMsg(state, data) {
      state.errorMsg = data;
    }
  },
  actions: {
    login(data) {
      return new Promise(resolve => {
        axios
          .post(process.env.VUE_APP_BASE_URL + "auth/login", data)
          .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.data.access_token.token)
            localStorage.setItem("refresh_token", res.data.data.access_token.refresh_token)
            resolve(res)
          })
          .catch(err => {
            console.log(err);
          });
      })
    }
  }
};
