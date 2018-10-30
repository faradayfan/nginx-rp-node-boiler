<template>
  <div class="container">
    <ListView
      :items="roles"
      :display-specifiers="displaySpecifiers"
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
  data: () => ({
    displaySpecifiers: ["name"]
  }),
  computed: {
    ...mapGetters("admin/roles", {
      roles: "roleList"
    })
  },
  methods: {
    viewClick(role) {
      this.$router.push(`/admin/role/${role._id}`);
    },
    editClick(role) {
      this.$router.push(`/admin/role/${role._id}/edit`);
    },
    createClick() {
      this.$router.push(`/admin/role/create`);
    },
    deleteClick(role) {
      const decision = confirm(
        `Are you sure you want to delete ${role.rolename}`
      );
      if (decision) {
        return this.deleteRole(role._id).then(() => {
          return this.fetchRoleList();
        });
      }
    },
    ...mapActions("roles", ["fetchRoleList", "deleteRole"])
  }
};
</script>

<style scoped>
.container {
  max-width: 70%;
  margin: 50px auto;
}
</style>
