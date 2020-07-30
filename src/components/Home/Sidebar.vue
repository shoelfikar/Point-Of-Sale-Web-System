<template>
  <div class="sidebar">
    <div class="side-menu items">
      <svg class="svg" width="40px" height="40px">
        <use xlink:href="../../assets/img/icon/items.svg#item"></use>
      </svg>
    </div>
    <div class="side-menu category">
      <svg class="svg" width="40px" height="40px">
        <use xlink:href="../../assets/img/icon/list.svg#category"></use>
      </svg>
    </div>
    <div class="side-menu cashier">
      <svg class="svg" width="40px" height="40px">
        <use xlink:href="../../assets/img/icon/shop.svg#cashier"></use>
      </svg>
    </div>
    <div class="side-menu logout">
      <svg class="svg" width="40px" height="40px">
        <use xlink:href="../../assets/img/icon/logout.svg#logout"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style lang="scss">
@import "../../assets/scss/Home/_home.scss";
</style>
