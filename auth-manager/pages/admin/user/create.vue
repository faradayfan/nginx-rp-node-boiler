<template>
  <CreateUser/>
</template>

<script>
import CreateUser from "@/components/users/CreateUser";
export default {
  layout: "admin",
  components: { CreateUser },
  middleware: "authenticated",
  fetch({ store: { dispatch } }) {
    return dispatch("roles/fetchRoleList");
  }
};
</script>