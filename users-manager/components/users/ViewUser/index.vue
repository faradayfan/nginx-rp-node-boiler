<template>
  <div>
    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">Property</th>
          <th scope="col">value</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for=" (value, key) in user" 
          :key="key">
          <td>{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "users/user"
    })
  }
};
</script>

<style scoped>
</style>

