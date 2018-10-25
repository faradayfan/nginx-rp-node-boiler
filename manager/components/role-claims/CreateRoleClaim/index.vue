<template>
  <div class="form-container">
    <form @submit.prevent="submit">
      <div 
        class="form-group">
        <label
          for="type">Role</label>
        <select
          id="type"
          v-model="roleClaim.role"
          class="form-control">
          <option 
            v-for="role in roles" 
            :key="role._id"
            :value="role._id"> {{ role.name }}</option>
        </select>
      </div>
      <div 
        class="form-group">
        <label
          for="type">Resource</label>
        <select
          id="type"
          v-model="roleClaim.resource"
          class="form-control">
          <option 
            v-for="resource in resources" 
            :key="resource._id"
            :value="resource._id"> {{ resource.name }}</option>
        </select>
      </div>
      <div 
        class="form-group">
        <label
          for="type">Claims</label>
        <select
          id="type"
          v-model="roleClaim.claims"
          class="form-control"
          multiple>
          <option 
            v-for="claim in claims" 
            :key="claim"> {{ claim }}</option>
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
      claims: ["create", "view", "edit", "delete", "list"],
      error: null,
      roleClaim: {
        role: "",
        resource: "",
        claims: []
      }
    };
  },
  computed: {
    ...mapGetters("roles", {
      roles: "roleList"
    }),
    ...mapGetters("resources", {
      resources: "resourceList"
    })
  },
  methods: {
    submit() {
      this.createRoleClaim(this.roleClaim)
        .then(() => {
          this.$router.push("/role-claims");
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
