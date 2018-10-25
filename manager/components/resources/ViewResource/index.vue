<template>
  <div class="container">
    <ul class="list-group">
      <li 
        v-for=" (value, key) in resource" 
        :key="key"
        class="list-group-item">{{ key }}: {{ value }}</li>
    </ul>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      resource: "resources/resource"
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

