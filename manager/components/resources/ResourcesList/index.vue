<template>
  <table class="table table-hover table-sm">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col"/>
        <th scope="col"/>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="resource in resources" 
        :key="resource._id">
        <td @click="viewClick(resource)">{{ resource._id }}</td>
        <td @click="viewClick(resource)">{{ resource.name }}</td>
        <td @click="editClick(resource)">Edit</td>
        <td @click="deleteClick(resource)">Delete</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td/>
        <td/>
        <td/>
        <td>
          <nuxt-link to="/resource/create">Create</nuxt-link>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("resources", {
      resources: "resourceList"
    })
  },
  methods: {
    viewClick(resource) {
      this.$router.push(`/resource/${resource._id}`);
    },
    editClick(resource) {
      this.$router.push(`/resource/${resource._id}/edit`);
    },
    deleteClick(resource) {
      const decision = confirm(
        `Are you sure you want to delete ${resource.resourcename}`
      );
      if (decision) {
        return this.deleteResource(resource._id).then(() => {
          return this.fetchResourceList();
        });
      }
    },
    ...mapActions("resources", ["fetchResourceList", "deleteResource"])
  }
};
</script>

<style scoped>
tbody tr:hover {
  cursor: pointer;
}
</style>
