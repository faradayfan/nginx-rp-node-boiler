<template>
  <UsersList users="userList"/>
</template>

<script>
import UsersList from "@/components/admin/users/UsersList";
export default {
  layout: "admin",
  components: { UsersList },
  middleware: "authenticated",
  fetch({ store: { dispatch } }) {
    return dispatch("admin/users/fetchUserList");
  }
};
</script>
