<template>
  <CreateUser/>
</template>

<script>
import CreateUser from "@/components/admin/users/CreateUser";
export default {
  layout: "admin",
  components: { CreateUser },
  middleware: "authenticated",
  fetch({ store: { dispatch } }) {
    return dispatch("admin/roles/fetchRoleList");
  }
};
</script>