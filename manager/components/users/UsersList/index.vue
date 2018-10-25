<template>
  <table class="table table-hover table-sm">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Username</th>
        <th scope="col"/>
        <th scope="col"/>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in users" 
        :key="user._id">
        <td @click="viewClick(user)">{{ user._id }}</td>
        <td @click="viewClick(user)">{{ user.firstName }}</td>
        <td @click="viewClick(user)">{{ user.lastName }}</td>
        <td @click="viewClick(user)">{{ user.username }}</td>
        <td @click="editClick(user)">Edit</td>
        <td @click="deleteClick(user)">Delete</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td/>
        <td/>
        <td/>
        <td/>
        <td/>
        <td>
          <nuxt-link to="/user/create">Create</nuxt-link>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("users", {
      users: "userList"
    })
  },
  methods: {
    viewClick(user) {
      this.$router.push(`/user/${user._id}`);
    },
    editClick(user) {
      this.$router.push(`/user/${user._id}/edit`);
    },
    deleteClick(user) {
      const decision = confirm(
        `Are you sure you want to delete ${user.username}`
      );
      if (decision) {
        return this.deleteUser(user._id).then(() => {
          return this.fetchUserList();
        });
      }
    },
    ...mapActions("users", ["fetchUserList", "deleteUser"])
  }
};
</script>

<style scoped>
tbody tr:hover {
  cursor: pointer;
}
</style>
