<template>
  <RoleClaimsList/>
</template>

<script>
import RoleClaimsList from "@/components/role-claims/RoleClaimsList";
import { mapGetters } from "vuex";
export default {
  components: { RoleClaimsList },
  middleware: "authenticated",
  fetch({ store: { dispatch } }) {
    return dispatch("roleClaims/fetchRoleClaimList");
  }
};
</script>
