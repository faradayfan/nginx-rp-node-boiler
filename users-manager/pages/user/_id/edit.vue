<template>
  <EditUser/>
</template>

<script>
import EditUser from "@/components/users/EditUser";
export default {
  components: { EditUser },
  layout: "app",
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    dispatch("users/fetchUser", id);
  }
};
</script>