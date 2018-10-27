<template>
  <EditResource/>
</template>

<script>
import EditResource from "@/components/resources/EditResource";
export default {
  components: { EditResource },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return dispatch("resources/fetchResource", id);
  }
};
</script>