<template>
  <div class="sidebar">
    <div class="side-menu items" @click="showProduct">
      <svg class="svg" width="40px" height="40px">
        <use xlink:href="../../assets/img/icon/items.svg#item"></use>
      </svg>
      <p>Product</p>
    </div>
    <div class="side-menu mycat" @click="showCategory">
      <svg class="svg" width="40px" height="40px" >
        <use xlink:href="../../assets/img/icon/list.svg#category"></use>
      </svg>
      <p>Category</p>
    </div>
    <div class="side-menu mycart" @click="showCart">
      <svg class="svg" width="40px" height="40px">
        <use xlink:href="../../assets/img/icon/shopping-cart.svg#shopping-cart"></use>
      </svg>
      <span v-if="cartItems.length !== 0">{{cartItems.length}}</span>
      <p>Cart Item</p>
    </div>
    <div class="side-menu cashier">
      <svg class="svg" width="40px" height="40px">
        <use xlink:href="../../assets/img/icon/shop.svg#cashier"></use>
      </svg>
      <p>Orders</p>
    </div>
    <div class="side-menu phone-cat">
      <svg class="svg" width="40px" height="40px" >
        <use xlink:href="../../assets/img/icon/list.svg#category"></use>
      </svg>
      <p>Category</p>
    </div>
    <div class="side-menu logout">
      <svg class="svg" width="40px" height="40px" @click="logout">
        <use xlink:href="../../assets/img/icon/logout.svg#logout"></use>
      </svg>
      <p>Logout</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Sidebar",
  computed: {
    ...mapState('product', ['cartItems'])
  },
  methods: {
    showCategory() {
      const category = document.querySelector('.category')
      const content = document.querySelector('.content-menu')
      category.classList.toggle('hide')
      content.classList.toggle('show')
    },
    showCart() {
      const cart = document.querySelector('.cart')
      const content = document.querySelector('.content-menu')
      cart.classList.add('show-cart')
      content.classList.add('phone-view')
    },
    showProduct() {
      const cart = document.querySelector('.cart')
      const content = document.querySelector('.content-menu')
      cart.classList.remove('show-cart')
      content.classList.remove('phone-view')
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem('refresh_token')
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/Home/_home.scss";
</style>
