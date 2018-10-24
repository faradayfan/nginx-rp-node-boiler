<template>
  <EditUser/>
</template>

<script>
import EditUser from "@/components/users/EditUser";
export default {
  components: { EditUser },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    dispatch("users/fetchUser", id);
  }
};
</script>