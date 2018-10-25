<template>
  <div class="form-container">
    <form @submit.prevent="submit">
      <div 
        class="form-group">
        <label 
          for="name">Name</label>
        <input 
          id="name"
          v-model="role.name"
          type="name" 
          class="form-control"
          placeholder="Enter name">
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      error: null,
      role: {
        name: ""
      }
    };
  },
  methods: {
    submit() {
      this.createRole(this.role)
        .then(() => {
          this.$router.push("/roles");
        })
        .catch(error => {
          this.error = error;
        });
    },
    ...mapActions("roles", ["createRole"])
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
