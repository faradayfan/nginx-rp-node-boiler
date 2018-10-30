<template>
  <RolesList roles="roleList"/>
</template>

<script>
import RolesList from "@/components/admin/roles/RolesList";
export default {
  layout: "admin",
  components: { RolesList },
  middleware: "authenticated",
  fetch({ store: { dispatch } }) {
    return dispatch("admin/roles/fetchRoleList");
  }
};
</script>
