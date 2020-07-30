<template>
  <div class="container-login">
    <header class="header">
      <h1>Point Of Sale - System</h1>
    </header>
    <form class="form-login" @submit="login">
      <div class="login-title">
        <h1>Login</h1>
        <p>Welcome, Please Login <br />to your account!</p>
      </div>
      <div class="form-group">
        <label for="">Email</label>
        <input type="text" placeholder="Email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="">Password</label>
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <button type="submit" class="btn-login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormLogin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      this.$store.dispatch("user/login", {
        email: this.email,
        password: this.password
      })
      .then(res => {
        console.log(res)
        this.$router.push("/");
      })
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/Login/_login.scss";
</style>
