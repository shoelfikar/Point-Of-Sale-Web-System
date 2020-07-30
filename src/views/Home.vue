<template>
  <div class="home">
    <Navbar />
    <Content />
  </div>
</template>

<script>
import Navbar from "../components/Home/Navbar";
import Content from "../components/Home/Content";

export default {
  name: "Home",
  components: {
    Navbar,
    Content
  }
};
</script>
<style lang="scss">
@import "../assets/scss/Home/_home.scss";
</style>
