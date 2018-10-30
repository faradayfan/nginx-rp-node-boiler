<template>
  <EditResource/>
</template>

<script>
import EditResource from "@/components/resources/EditResource";
export default {
  layout: "admin",
  components: { EditResource },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return dispatch("resources/fetchResource", id);
  }
};
</script>