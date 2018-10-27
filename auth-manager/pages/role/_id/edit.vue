<template>
  <EditRole/>
</template>

<script>
import EditRole from "@/components/roles/EditRole";
export default {
  components: { EditRole },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return Promise.all([
      dispatch("roles/fetchRole", id),
      dispatch("roleClaims/fetchRoleClaimList"),
      dispatch("users/fetchUserList")
    ]);
  }
};
</script>