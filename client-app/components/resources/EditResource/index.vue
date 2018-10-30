<template>
  <div class="form-container">
    <form @submit.prevent="save">
      <div 
        class="form-group">
        <label 
          for="name">Name</label>
        <input 
          id="name"
          v-model="resource.name"
          type="name" 
          class="form-control"
          placeholder="Enter name">
      </div>
      <div 
        class="form-group">
        <label 
          for="path">Path</label>
        <input 
          id="path"
          v-model="resource.path"
          type="path" 
          class="form-control"
          placeholder="Path">
      </div>
      <div 
        class="form-group">
        <label
          for="type">Type</label>
        <select
          id="type"
          v-model="resource.type"
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
      resource="alert">
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
      resource: {
        ...context.$store.state.resources.resource
      }
    };
  },
  computed: {
    ...mapGetters("resources", { storeResource: "resource" })
  },
  methods: {
    ...mapActions("resources", ["saveResource"]),
    save() {
      const obj = _.intersection(_.keysIn(this.resource))
        .filter(k => !/^_.*/.test(`${k}`)) // remove private fields
        .filter(k => this.storeResource[k] != this.resource[k]) // remove unchanged fields
        .reduce((a, c) => ({ ...a, [c]: this.resource[c] }), {}); // build the final object
      if (_.keysIn(obj).length > 0)
        return this.saveResource({ id: this.storeResource._id, resource: obj })
          .then(() => {
            this.$router.push("/admin/resources");
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

