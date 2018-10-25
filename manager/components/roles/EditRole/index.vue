<template>
  <div class="form-container">
    <form @submit.prevent="save">
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
import { mapGetters, mapActions } from "vuex";
export default {
  data(context) {
    return {
      error: null,
      role: {
        ...context.$store.state.roles.role
      }
    };
  },
  computed: {
    ...mapGetters("roles", { storeRole: "role" })
  },
  methods: {
    ...mapActions("roles", ["saveRole"]),
    save() {
      const obj = _.intersection(_.keysIn(this.role))
        .filter(k => !/^_.*/.test(`${k}`)) // remove private fields
        .filter(k => this.storeRole[k] != this.role[k]) // remove unchanged fields
        .reduce((a, c) => ({ ...a, [c]: this.role[c] }), {}); // build the final object
      if (_.keysIn(obj).length > 0)
        return this.saveRole({ id: this.storeRole._id, role: obj })
          .then(() => {
            this.$router.push("/roles");
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

