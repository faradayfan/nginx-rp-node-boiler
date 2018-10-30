<template>
  <CreateRole/>
</template>

<script>
import CreateRole from "@/components/admin/roles/CreateRole";
export default {
  layout: "admin",
  components: { CreateRole },
  middleware: "authenticated",
  fetch({ store: { dispatch } }) {
    return Promise.all([
      dispatch("admin/roleClaims/fetchRoleClaimList"),
      dispatch("admin/users/fetchUserList")
    ]);
  }
};
</script>