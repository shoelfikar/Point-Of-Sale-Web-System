<template>
  <div class="content">
    <Sidebar  />
    <Category />
    <MenuItem />
    <Cart />
  </div>
</template>

<script>
import Sidebar from "../Home/Sidebar";
import MenuItem from "../Home/MenuItem";
import Cart from "../Home/Cart";
import Category from '../Home/Category';
export default {
  name: "Content",
  components: {
    Sidebar,
    MenuItem,
    Cart,
    Category
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/Home/_home.scss";
</style>
