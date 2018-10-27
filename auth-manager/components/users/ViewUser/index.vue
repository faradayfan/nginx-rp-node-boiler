<template>
  <div class="container">
    <ObjectView :item="user" />
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import ObjectView from "../../Generic/ObjectView";
export default {
  components: { ObjectView },
  computed: {
    ...mapGetters({
      user: "users/user"
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

