<template>
  <UsersList users="userList"/>
</template>

<script>
import UsersList from "@/components/users/UsersList";
import { mapGetters } from "vuex";
export default {
  layout: "admin",
  components: { UsersList },
  middleware: "authenticated",
  fetch({ store: { dispatch } }) {
    return dispatch("users/fetchUserList");
  }
};
</script>
