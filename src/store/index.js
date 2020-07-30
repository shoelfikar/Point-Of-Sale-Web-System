import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import product from "./product";
import category from "./category";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  
  },
  actions: {
    
  },
  modules: {
    user,
    product,
    category
  }
});
