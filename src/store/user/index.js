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
            console.log(res);
            resolve(res)
          })
          .catch(err => {
            console.log(err);
          });
      })
    }
  }
};
