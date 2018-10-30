<template>
  <ResourcesList resources="resourceList"/>
</template>

<script>
import ResourcesList from "@/components/admin/resources/ResourcesList";
export default {
  layout: "admin",
  components: { ResourcesList },
  middleware: "authenticated",
  fetch({ store: { dispatch } }) {
    return dispatch("admin/resources/fetchResourceList");
  }
};
</script>
