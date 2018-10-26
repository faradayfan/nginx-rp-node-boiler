<template>
  <CreateRole/>
</template>

<script>
import CreateRole from "@/components/roles/CreateRole";
export default {
  components: { CreateRole },
  middleware: "authenticated",
  fetch({ store: { dispatch } }) {
    return Promise.all([
      dispatch("roleClaims/fetchRoleClaimList"),
      dispatch("users/fetchUserList")
    ]);
  }
};
</script>