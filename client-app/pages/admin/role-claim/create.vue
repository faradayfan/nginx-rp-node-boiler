<template>
  <CreateRoleClaim/>
</template>

<script>
import CreateRoleClaim from "@/components/admin/role-claims/CreateRoleClaim";
export default {
  layout: "admin",
  components: { CreateRoleClaim },
  middleware: "authenticated",
  fetch({ store: { dispatch } }) {
    return dispatch("admin/resources/fetchResourceList");
  }
};
</script>