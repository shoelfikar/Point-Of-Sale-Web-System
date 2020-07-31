<template>
  <div class="cover">
    <div class="img-cover"></div>
  </div>
</template>

<script>
export default {
  name: "Cover"
};
</script>

<style lang="scss">
@import "../../assets/scss/Login/_login.scss";
@import "../../assets/scss/Login/_phone.scss";
@import "../../assets/scss/Login/_tablet.scss";
.img-cover {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/backgroundnew.png");
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
