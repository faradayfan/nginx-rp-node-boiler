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
        class="form-group">
        <label
          for="resource">Role Claims</label>
        <select
          id="resource"
          v-model="role.roleClaims"
          class="form-control"
          multiple>
          <option 
            v-for="roleClaim in roleClaims" 
            :key="roleClaim._id"
            :value="roleClaim._id"> {{ roleClaim.resource.name }} ({{ roleClaim.resource.path }}) - {{ roleClaim.subject }} - {{ roleClaim.claims }}</option>
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
      role: {
        name: "",
        roleClaims: []
      }
    };
  },
  computed: {
    ...mapGetters("admin/roleClaims", {
      roleClaims: "roleClaimList"
    })
  },
  methods: {
    submit() {
      this.createRole(this.role)
        .then(() => {
          this.$router.push("/admin/roles");
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
