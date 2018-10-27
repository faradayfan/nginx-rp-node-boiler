<template>
  <div class="container">
    <ListView
      :items="roleClaims"
      :display-specifiers="displaySpecifiers"
      :view-click="viewClick"
      :edit-click="editClick"
      :delete-click="deleteClick"
      :create-click="createClick"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ListView from "../../Generic/ListView";
export default {
  components: { ListView },
  data: () => ({
    displaySpecifiers: [
      {
        key: "resource",
        label: "Resource",
        value: v => `${v.resource.name} (${v.resource.path})`
      },
      "subject",
      {
        key: "claims",
        label: "Claims",
        value: v => v.claims.join(", ")
      }
    ]
  }),
  computed: {
    ...mapGetters("roleClaims", {
      roleClaims: "roleClaimList"
    })
  },
  methods: {
    viewClick(roleClaim) {
      this.$router.push(`/role-claim/${roleClaim._id}`);
    },
    editClick(roleClaim) {
      this.$router.push(`/role-claim/${roleClaim._id}/edit`);
    },
    createClick() {
      this.$router.push(`/role-claim/create`);
    },
    deleteClick(roleClaim) {
      if (roleClaim.role) {
        alert("You cannot delete a claim that has an associating role");
      } else {
        const decision = confirm(
          `Are you sure you want to delete ${roleClaim._id}`
        );
        if (decision) {
          return this.deleteRoleClaim(roleClaim._id).then(() => {
            return this.fetchRoleClaimList();
          });
        }
      }
    },
    ...mapActions("roleClaims", ["fetchRoleClaimList", "deleteRoleClaim"])
  }
};
</script>

<style scoped>
.container {
  max-width: 70%;
  margin: 50px auto;
}
</style>