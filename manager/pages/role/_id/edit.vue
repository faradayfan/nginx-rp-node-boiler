<template>
  <EditRole/>
</template>

<script>
import EditRole from "@/components/roles/EditRole";
export default {
  components: { EditRole },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return dispatch("roles/fetchRole", id);
  }
};
</script>