<template>
  <div class="home">
    <Navbar />
    <Content />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from "../components/Home/Navbar";
import Content from "../components/Home/Content";

export default {
  name: "Home",
  components: {
    Navbar,
    Content
  },
  computed: {
    
  },
  methods: {
    ...mapActions('user', ['refreshToken']),
    refreshHandle(error) {
      if( error.response === 401) {
        this.refreshToken(localStorage.refresh_token)
      }
    }
  },
  mounted() {
    this.refreshHandle()
  }
};
</script>
<style lang="scss">
  @import "../assets/scss/Home/_home.scss";
  @import "../assets/scss/Home/_phone.scss";
  @import "../assets/scss/Home/_tablet.scss";
  @import "../assets/scss/_reset.scss";
</style>
