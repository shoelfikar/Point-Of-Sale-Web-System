import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);


export default {
  namespaced: true,
  state: {
    allProduct: []
  },
  mutations: {
    getMenu(state, data) {
      state.allProduct = data;
    }
  },
  actions: {
    getAllMenu(context,token) {
      axios
        .get(
          process.env.VUE_APP_BASE_URL + "merchant/2/outlet/1/category/56/product?page=1&limit=10&active=true",{
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        )
        .then(res => {
          context.commit("getMenu", res.data.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
  }
}