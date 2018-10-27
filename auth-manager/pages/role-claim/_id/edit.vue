<template>
  <EditRoleClaim/>
</template>

<script>
import EditRoleClaim from "@/components/role-claims/EditRoleClaim";
export default {
  components: { EditRoleClaim },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return Promise.all([
      dispatch("roleClaims/fetchRoleClaim", id),
      dispatch("resources/fetchResourceList")
    ]);
  }
};
</script>