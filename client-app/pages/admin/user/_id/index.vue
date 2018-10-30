<template>
  <ViewUser/>
</template>

<script>
import ViewUser from "@/components/admin/users/ViewUser";
export default {
  layout: "admin",
  components: { ViewUser },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return dispatch("admin/users/fetchUser", id);
  }
};
</script>
