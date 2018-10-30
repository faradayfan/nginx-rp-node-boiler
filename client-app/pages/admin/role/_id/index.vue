<template>
  <ViewRole/>
</template>

<script>
import ViewRole from "@/components/admin/roles/ViewRole";
export default {
  layout: "admin",
  components: { ViewRole },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return dispatch("admin/roles/fetchRole", id);
  }
};
</script>
