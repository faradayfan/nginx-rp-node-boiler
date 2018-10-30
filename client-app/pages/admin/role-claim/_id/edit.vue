<template>
  <EditRoleClaim/>
</template>

<script>
import EditRoleClaim from "@/components/admin/role-claims/EditRoleClaim";
export default {
  layout: "admin",
  components: { EditRoleClaim },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return Promise.all([
      dispatch("admin/roleClaims/fetchRoleClaim", id),
      dispatch("admin/resources/fetchResourceList")
    ]);
  }
};
</script>