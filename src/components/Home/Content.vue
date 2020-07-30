<template>
  <div class="content">
    <Sidebar />
    <MenuItem />
    <Cart />
  </div>
</template>

<script>
import Sidebar from "../Home/Sidebar";
import MenuItem from "../Home/MenuItem";
import Cart from "../Home/Cart";
export default {
  name: "Content",
  components: {
    Sidebar,
    MenuItem,
    Cart
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/Home/_home.scss";
</style>
