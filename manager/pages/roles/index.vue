<template>
  <RolesList roles="roleList"/>
</template>

<script>
import RolesList from "@/components/roles/RolesList";
import { mapGetters } from "vuex";
export default {
  components: { RolesList },
  middleware: "authenticated",
  fetch({ store: { dispatch } }) {
    return dispatch("roles/fetchRoleList");
  }
};
</script>
