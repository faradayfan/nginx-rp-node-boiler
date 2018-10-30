<template>
  <ViewResource/>
</template>

<script>
import ViewResource from "@/components/resources/ViewResource";
export default {
  layout: "admin",
  components: { ViewResource },
  middleware: "authenticated",
  fetch({ store: { dispatch }, params: { id } }) {
    return dispatch("resources/fetchResource", id);
  }
};
</script>
