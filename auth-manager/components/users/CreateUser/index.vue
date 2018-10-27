<template>
  <div class="form-container">
    <form @submit.prevent="submit">
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
          id="active"
          v-model="user.active"
          type="checkbox" 
          class="form-check-input">
        <label 
          class="form-check-label" 
          for="active">Active</label>
      </div>
      <div 
        class="form-group">
        <label
          for="resource">Roles</label>
        <select
          id="resource"
          v-model="user.roles"
          class="form-control"
          multiple>
          <option 
            v-for="role in roles" 
            :key="role._id"
            :value="role._id">{{ role.name }}</option>
        </select>
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
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      error: null,
      user: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        roles: [],
        active: true
      }
    };
  },
  computed: {
    ...mapGetters("roles", {
      roles: "roleList"
    })
  },
  methods: {
    submit() {
      this.createUser(this.user)
        .then(() => {
          this.$router.push("/users");
        })
        .catch(error => {
          this.error = error;
        });
    },
    ...mapActions("users", ["createUser"])
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
