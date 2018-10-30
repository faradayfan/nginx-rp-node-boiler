<template>
  <div class="container">
    <ListView
      :items="resources"
      :display-specifiers="['name', 'type', 'path']"
      :view-click="viewClick"
      :edit-click="editClick"
      :delete-click="deleteClick"
      :create-click="createClick"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ListView from "@/components/Generic/ListView";
export default {
  components: { ListView },
  computed: {
    ...mapGetters("admin/resources", {
      resources: "resourceList"
    })
  },
  methods: {
    viewClick(resource) {
      this.$router.push(`/admin/resource/${resource._id}`);
    },
    editClick(resource) {
      this.$router.push(`/admin/resource/${resource._id}/edit`);
    },
    createClick() {
      this.$router.push(`/admin/resource/create`);
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
    ...mapActions("admin/resources", ["fetchResourceList", "deleteResource"])
  }
};
</script>

<style scoped>
.container {
  max-width: 70%;
  margin: 50px auto;
}
</style>