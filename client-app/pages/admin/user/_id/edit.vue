<template>
  <EditUser/>
</template>

<script>
import EditUser from "@/components/admin/users/EditUser";
export default {
  layout: "admin",
  components: { EditUser },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return Promise.all([
      dispatch("admin/users/fetchUser", id),
      dispatch("admin/roles/fetchRoleList")
    ]);
  }
};
</script>