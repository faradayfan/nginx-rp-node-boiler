<template>
  <div class="container">
    <ObjectView :item="user" />
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import ObjectView from "@/components/Generic/ObjectView";
export default {
  components: { ObjectView },
  computed: {
    ...mapGetters("admin/users", {
      user: "user"
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

