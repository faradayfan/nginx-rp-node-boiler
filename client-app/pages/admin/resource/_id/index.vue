<template>
  <ViewResource/>
</template>

<script>
import ViewResource from "@/components/admin/resources/ViewResource";
export default {
  layout: "admin",
  components: { ViewResource },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return dispatch("admin/resources/fetchResource", id);
  }
};
</script>
