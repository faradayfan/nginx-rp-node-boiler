<template>
  <EditResource/>
</template>

<script>
import EditResource from "@/components/admin/resources/EditResource";
export default {
  layout: "admin",
  components: { EditResource },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return dispatch("admin/resources/fetchResource", id);
  }
};
</script>