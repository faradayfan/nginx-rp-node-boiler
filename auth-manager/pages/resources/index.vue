<template>
  <ResourcesList resources="resourceList"/>
</template>

<script>
import ResourcesList from "@/components/resources/ResourcesList";
import { mapGetters } from "vuex";
export default {
  components: { ResourcesList },
  middleware: "authenticated",
  fetch({ store: { dispatch } }) {
    return dispatch("resources/fetchResourceList");
  }
};
</script>
