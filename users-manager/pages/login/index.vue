<template>
  <form @submit.prevent="submitLogin">
    <div class="form-signin">
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
    </div>
  </form>
</template>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>


<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submitLogin() {
      this.login({ username: this.username, password: this.password }).then(
        () => {
          this.$router.push("/users");
        }
      );
    },
    ...mapActions("identity", ["login"])
  }
};
</script>

