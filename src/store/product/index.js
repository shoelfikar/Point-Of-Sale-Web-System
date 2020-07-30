import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);


export default {
  namespaced: true,
  state: {
    allProduct: [],
    cartItems: [],
    total: 0,
    ppn: 0,
    subTotal: 0
  },
  mutations: {
    GET_MENU(state, data) {
      state.allProduct = data;
    },
    ADD_TO_CART(state, data) {
      const items = state.cartItems.find(
        item => item.data.id === data.data.id
      );
      if (!items) {
        state.cartItems.unshift(data);
      }
    },
    INCREMENT(state, data) {
      let items = state.cartItems.find(
        item => item.data.id === data.data.id
      );
      if (items) {
        items.count += 1;
      }
    },
    DECREMENT(state, data) {
      let items = state.cartItems.find(
        item => item.data.id === data.data.id
      );
      if (items) {
        if (items.count <= 1) {
          state.cartItems = state.cartItems.filter(
            item => item !== items
          );
        } else {
          items.count -= 1;
        }
      }
    },
    TOTAL_CART (state) {
      let cart = []
      cart = state.cartItems;
      const total = [];
      if (state.totalBayar !== 0) {
        for (let i = 0; i < cart.length; i++) {
          total.push(cart[i].data.price * state.cartItems[i].count);
        }
        state.total = total.reduce((a, b) => a + b, 0);
      } else {
        state.total = 0;
      }
    },
    PPN (state) {
      state.ppn = state.total * 0.1;
    },
    SUB_TOTAL (state) {
      state.subTotal = state.total + state.ppn
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
          context.commit("GET_MENU", res.data.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
  }
}