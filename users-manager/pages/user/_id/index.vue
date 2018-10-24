<template>
  <ViewUser/>
</template>

<script>
import ViewUser from "@/components/users/ViewUser";
export default {
  components: { ViewUser },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    dispatch("users/fetchUser", id);
  }
};
</script>
