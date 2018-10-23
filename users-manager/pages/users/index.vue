<template>
  <UsersList users="userList"/>
</template>

<script>
import UsersList from "@/components/users/UsersList";
import { mapGetters } from "vuex";
export default {
  components: { UsersList },
  layout: "app",
  middleware: "authenticated",
  fetch({ store: { dispatch } }) {
    dispatch("users/fetchUserList");
  }
};
</script>
