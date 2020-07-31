<template>
  <div class="navbar">
    <div class="navbar-items">
      <div class="menu-item">
        <img src="../../assets/img/icon/menu.svg" alt="Menu" />
      </div>
      <div class="title-item">
        <h1>Point Of Sale - System</h1>
      </div>
      <div class="profil-item">
        <p>{{username}}</p>
        <p class="profil-img">{{iconProfil}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Navbar",
  data () {
    return {
      iconProfil: ''
    }
  },
  computed: {
    ...mapState('user', ['username'])
  },
  methods: {
    profil() {
      this.iconProfil = this.username.slice(0,1).toUpperCase()
    }
  },
  mounted() {
    this.profil()
  }
};
</script>

<style lang="scss">
  @import "../../assets/scss/Home/_home.scss";
  @import "../../assets/scss/Home/_phone.scss";
  @import "../../assets/scss/Home/_tablet.scss";
</style>
