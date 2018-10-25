<template>
  <div class="form-container">
    <form @submit.prevent="submit">
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      error: null,
      resource: {
        name: "",
        path: "",
        type: ""
      }
    };
  },
  methods: {
    submit() {
      console.log(this.resource);
      this.createResource(this.resource)
        .then(() => {
          this.$router.push("/resources");
        })
        .catch(error => {
          this.error = error;
        });
    },
    ...mapActions("resources", ["createResource"])
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
