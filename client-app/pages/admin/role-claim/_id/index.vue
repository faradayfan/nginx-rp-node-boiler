<template>
  <ViewRoleClaim/>
</template>

<script>
import ViewRoleClaim from "@/components/admin/role-claims/ViewRoleClaim";
export default {
  layout: "admin",
  components: { ViewRoleClaim },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return dispatch("admin/roleClaims/fetchRoleClaim", id);
  }
};
</script>
