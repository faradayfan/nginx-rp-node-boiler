<template>
  <div class="container">
    <ObjectView :item="resource" />
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import ObjectView from "@/components/Generic/ObjectView";
export default {
  components: { ObjectView },
  computed: {
    ...mapGetters("admin/resource", {
      resource: "resource"
    })
  }
};
</script>

<style scoped>
.container {
  max-width: 70%;
  margin: 50px auto;
}
</style>

