import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    allCategory: []
  },
  mutations: {
    getCategory(state, data) {
      state.allCategory = data;
    }
  },
  actions: {
    getAllCategory(context, token) {
      axios
        .get(
          process.env.VUE_APP_BASE_URL + "merchant/2/outlet/1/category", {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        )
        .then(res => {
          console.log(res.data.data)
          context.commit("getCategory", res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
  }
}