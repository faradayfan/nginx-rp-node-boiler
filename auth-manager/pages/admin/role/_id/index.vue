<template>
  <ViewRole/>
</template>

<script>
import ViewRole from "@/components/roles/ViewRole";
export default {
  layout: "admin",
  components: { ViewRole },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return dispatch("roles/fetchRole", id);
  }
};
</script>
