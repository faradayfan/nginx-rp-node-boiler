<template>
  <div class="form-container">
    <form @submit.prevent="submit">
      <div 
        class="form-group">
        <label
          for="type">Role</label>
        <select
          id="type"
          v-model="roleClaim.type"
          class="form-control">
          <option>api</option>
        </select>
      </div>
      <div 
        class="form-group">
        <label
          for="type">Resource</label>
        <select
          id="type"
          v-model="roleClaim.type"
          class="form-control">
          <option>api</option>
        </select>
      </div>
      <div 
        class="form-group">
        <label
          for="type">Claims</label>
        <select
          id="type"
          v-model="roleClaim.type"
          class="form-control">
          <option>api</option>
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      error: null,
      roleClaim: {
        name: "",
        path: "",
        type: ""
      }
    };
  },
  methods: {
    submit() {
      console.log(this.roleClaim);
      this.createRoleClaim(this.roleClaim)
        .then(() => {
          this.$router.push("/role-claim");
        })
        .catch(error => {
          this.error = error;
        });
    },
    ...mapActions("roleClaims", ["createRoleClaim"])
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
