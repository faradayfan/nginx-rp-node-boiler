<template>
  <RoleClaimsList/>
</template>

<script>
import RoleClaimsList from "@/components/admin/role-claims/RoleClaimsList";
export default {
  layout: "admin",
  components: { RoleClaimsList },
  middleware: "authenticated",
  fetch({ store: { dispatch } }) {
    return dispatch("admin/roleClaims/fetchRoleClaimList");
  }
};
</script>
