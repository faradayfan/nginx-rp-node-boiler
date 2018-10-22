<template>
  <section class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Username</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="user in userList" 
          :key="user._id">
          <th scope="row">{{ user._id }}</th>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.username }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  layout: "app",
  middleware: "authenticated",
  computed: {
    ...mapGetters({
      userList: "users/userList"
    })
  },
  fetch({ store: { dispatch } }) {
    dispatch("users/fetchUserList");
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
