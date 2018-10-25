<template>
  <div class="form-container">
    <form @submit.prevent="save">
      <div 
        class="form-group">
        <label 
          for="email">Email address</label>
        <input 
          id="email"
          v-model="user.email"
          type="email" 
          class="form-control"
          placeholder="Enter email">
      </div>
      <div 
        class="form-group">
        <label 
          for="username">Username</label>
        <input 
          id="username"
          v-model="user.username"
          type="text" 
          class="form-control"
          placeholder="Username">
      </div>
      <div 
        class="form-group">
        <label 
          for="password">Password</label>
        <input 
          id="password"
          v-model="user.password"
          type="password" 
          class="form-control" 
          placeholder="Password">
      </div>
      <div 
        class="form-group">
        <label 
          for="firstName">First Name</label>
        <input 
          id="firstName"
          v-model="user.firstName"
          type="text" 
          class="form-control"
          placeholder="First Name">
      </div>
      <div 
        class="form-group">
        <label 
          for="lastName">Last Name</label>
        <input 
          id="lastName"
          v-model="user.lastName"
          type="text" 
          class="form-control"
          placeholder="Last Name">
      </div>
      <div 
        class="form-check">
        <input 
          id="admin"
          v-model="user.admin"
          type="checkbox" 
          class="form-check-input">
        <label 
          class="form-check-label" 
          for="admin">Admin</label>
      </div>
      <div 
        class="form-check">
        <input 
          id="active"
          v-model="user.active"
          type="checkbox" 
          class="form-check-input">
        <label 
          class="form-check-label" 
          for="active">Active</label>
      </div>
      <div
        class="right">
        <button 
          type="submit" 
          class="btn btn-primary">Submit</button>
      </div>
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
import { mapGetters, mapActions } from "vuex";
export default {
  data(context) {
    return {
      error: null,
      user: {
        ...context.$store.state.users.user,
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters("users", { storeUser: "user" })
  },
  methods: {
    ...mapActions("users", ["saveUser"]),
    save() {
      const obj = _.intersection(
        _.keysIn({ ...this.storeUser, password: "" }), // add in the password default value
        _.keysIn(this.user)
      )
        .filter(k => !/^_.*/.test(`${k}`)) // remove private fields
        .filter(k => this.storeUser[k] != this.user[k]) // remove unchanged fields
        .reduce((a, c) => ({ ...a, [c]: this.user[c] }), {}); // build the final object

      return this.saveUser({ id: this.storeUser._id, user: obj }).catch(
        error => {
          this.error = error;
        }
      );
    }
  }
};
</script>

<style scoped>
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

