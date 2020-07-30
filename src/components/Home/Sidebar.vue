<template>
  <div class="sidebar">
    <div class="side-menu items">
      <svg class="svg" width="40px" height="40px">
        <use xlink:href="../../assets/img/icon/items.svg#item"></use>
      </svg>
      <p>Product</p>
    </div>
    <div class="side-menu" @click="showCategory">
      <svg class="svg" width="40px" height="40px" >
        <use xlink:href="../../assets/img/icon/list.svg#category"></use>
      </svg>
      <p>Category</p>
    </div>
    <div class="side-menu cashier">
      <svg class="svg" width="40px" height="40px">
        <use xlink:href="../../assets/img/icon/shop.svg#cashier"></use>
      </svg>
      <p>Orders</p>
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
export default {
  name: "Sidebar",
  methods: {
    showCategory() {
      const category = document.querySelector('.category')
      const content = document.querySelector('.content-menu')
      category.classList.toggle('hide')
      content.classList.toggle('show')
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
