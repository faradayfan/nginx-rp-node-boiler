<template>
  <div class="form-container">
    <form @submit.prevent="save">
      <div 
        class="form-group">
        <label
          for="type">Role</label>
        <select
          id="type"
          v-model="roleClaim.role"
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
          v-model="roleClaim.resource"
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
          v-model="roleClaim.claims"
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
import { mapGetters, mapActions } from "vuex";
export default {
  data(context) {
    return {
      error: null,
      roleClaim: {
        ...context.$store.state.roleClaims.roleClaim
      }
    };
  },
  computed: {
    ...mapGetters("roleClaims", { storeRoleClaim: "roleClaim" })
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
            this.$router.push("/role-claim");
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

