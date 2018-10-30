<template>
  <ViewUser/>
</template>

<script>
import ViewUser from "@/components/users/ViewUser";
export default {
  layout: "admin",
  components: { ViewUser },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return dispatch("users/fetchUser", id);
  }
};
</script>
