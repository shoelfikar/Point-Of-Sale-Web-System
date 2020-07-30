<template>
  <div class="container">
    <FormLogin />
    <Cover />
  </div>
</template>

<script>
import Cover from "../components/Login/Cover";
import FormLogin from "../components/Login/FormLogin";
export default {
  name: "Login",
  components: {
    FormLogin,
    Cover
  }
};
</script>

<style lang="scss">
@import "../assets/scss/Login/_login.scss";
@import "../assets/scss/_reset.scss";
</style>
