<template>
  <div class="container">
    <ObjectView :item="roleClaim" />
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import ObjectView from "../../Generic/ObjectView";
export default {
  components: { ObjectView },
  computed: {
    ...mapGetters({
      roleClaim: "roleClaims/roleClaim"
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

