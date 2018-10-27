<template>
  <ViewRoleClaim/>
</template>

<script>
import ViewRoleClaim from "@/components/role-claims/ViewRoleClaim";
export default {
  components: { ViewRoleClaim },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return dispatch("roleClaims/fetchRoleClaim", id);
  }
};
</script>
