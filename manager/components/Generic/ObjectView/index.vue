<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for=" (value, key) in item" 
        :key="key">
        <td>
          <pre>{{ key }}:</pre>
        </td>
        <td>
          <pre>{{ typeof value == 'object' ? JSON.stringify(value, null, 2) : value }}</pre>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 70%;
  margin: 50px auto;
}
</style>

