<template>
  <div class="container">
    <ObjectView :item="roleClaim" />
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import ObjectView from "@/components/Generic/ObjectView";
export default {
  components: { ObjectView },
  computed: {
    ...mapGetters("admin/roleClaims", {
      roleClaim: "roleClaim"
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

