<template>
  <div class="container">
    <ObjectView :item="role" />
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import ObjectView from "../../Generic/ObjectView";
export default {
  components: { ObjectView },
  computed: {
    ...mapGetters({
      role: "roles/role"
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
