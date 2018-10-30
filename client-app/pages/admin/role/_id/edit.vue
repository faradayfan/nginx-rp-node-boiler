<template>
  <EditRole/>
</template>

<script>
import EditRole from "@/components/admin/roles/EditRole";
export default {
  layout: "admin",
  components: { EditRole },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return Promise.all([
      dispatch("admin/roles/fetchRole", id),
      dispatch("admin/roleClaims/fetchRoleClaimList"),
      dispatch("admin/users/fetchUserList")
    ]);
  }
};
</script>