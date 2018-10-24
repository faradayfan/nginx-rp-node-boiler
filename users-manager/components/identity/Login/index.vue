<template>
  <div class="form-signin">
    <form @submit.prevent="submitLogin">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label
        for="username" 
        class="sr-only">Username</label>
      <input
        id="username" 
        v-model="username"
        type="text" 
        class="form-control" 
        placeholder="username" 
        required="" 
        autofocus="">
      <label 
        for="inputPassword" 
        class="sr-only">Password</label>
      <input
        id="inputPassword"
        v-model="password"
        type="password"
        class="form-control"
        placeholder="Password"
        required="">
      <button class="btn btn-lg btn-primary btn-block" >Sign in</button>
    </form>
    <div
      v-if="error"
      class="alert alert-danger" 
      role="alert">
      <strong>Error:</strong>{{ error.message }}
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      error: null,
      username: "",
      password: ""
    };
  },
  methods: {
    submitLogin() {
      this.login({ username: this.username, password: this.password })
        .then(() => {
          this.$router.push("/users");
        })
        .catch(error => (this.error = error));
    },
    ...mapActions("identity", ["login"])
  }
};
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

form {
  margin: 30px;
}
.form-container {
  max-width: 80%;
  margin: 50px auto;
}
.right {
  width: 100%;
  text-align: right;
}
</style>