<template>
  <div class="form-container">
    <form @submit.prevent="save">
      <div 
        class="form-group">
        <label
          for="type">Resource</label>
        <select
          id="type"
          v-model="roleClaim.resource._id"
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
          for="subject">Subject</label>
        <select
          id="subject"
          v-model="roleClaim.subject"
          class="form-control">
          <option 
            v-for="subject in subjects" 
            :key="subject"
            :value="subject"> {{ subject }}</option>
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
import { mapGetters, mapActions } from "vuex";
export default {
  data(context) {
    return {
      subjects: ["self", "role", "all"],
      claims: ["create", "view", "edit", "delete", "list"],
      error: null,
      roleClaim: {
        ...context.$store.state.roleClaims.roleClaim
      }
    };
  },
  computed: {
    ...mapGetters("roleClaims", { storeRoleClaim: "roleClaim" }),
    ...mapGetters("resources", {
      resources: "resourceList"
    })
  },
  methods: {
    ...mapActions("roleClaims", ["saveRoleClaim"]),
    save() {
      const obj = _.intersection(_.keysIn(this.roleClaim))
        .filter(k => !/^_.*/.test(`${k}`)) // remove private fields
        .filter(k => this.storeRoleClaim[k] != this.roleClaim[k]) // remove unchanged fields
        .reduce((a, c) => ({ ...a, [c]: this.roleClaim[c] }), {}); // build the final object

      if (_.keysIn(obj).length > 0)
        return this.saveRoleClaim({
          id: this.storeRoleClaim._id,
          roleClaim: obj
        })
          .then(() => {
            this.$router.push("/role-claims");
          })
          .catch(error => {
            this.error = error;
          });
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

