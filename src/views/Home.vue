<template>
  <div class="home">
    <Navbar />
    <Content />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Navbar from "../components/Home/Navbar";
import Content from "../components/Home/Content";

export default {
  name: "Home",
  components: {
    Navbar,
    Content
  },
  computed: {
    ...mapState('category', ['allCategory'])
  },
  methods: {
    ...mapActions('category', ['getAllCategory'])
  },
  mounted () {
    this.getAllCategory(localStorage.token)
  }
};
</script>
<style lang="scss">
@import "../assets/scss/Home/_home.scss";
</style>
