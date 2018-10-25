<template>
  <CreateRoleClaim/>
</template>

<script>
import CreateRoleClaim from "@/components/role-claims/CreateRoleClaim";
export default {
  components: { CreateRoleClaim },
  middleware: "authenticated",
  fetch({ store: { dispatch } }) {
    return Promise.all([
      dispatch("roles/fetchRoleList"),
      dispatch("resources/fetchResourceList")
    ]);
  }
};
</script>