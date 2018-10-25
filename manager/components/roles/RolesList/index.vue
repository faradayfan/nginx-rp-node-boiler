<template>
  <table class="table table-hover table-sm">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col"/>
        <th scope="col"/>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="role in roles" 
        :key="role._id">
        <td @click="viewClick(role)">{{ role._id }}</td>
        <td @click="viewClick(role)">{{ role.name }}</td>
        <td @click="editClick(role)">Edit</td>
        <td @click="deleteClick(role)">Delete</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td/>
        <td/>
        <td/>
        <td>
          <nuxt-link to="/role/create">Create</nuxt-link>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("roles", {
      roles: "roleList"
    })
  },
  methods: {
    viewClick(role) {
      this.$router.push(`/role/${role._id}`);
    },
    editClick(role) {
      this.$router.push(`/role/${role._id}/edit`);
    },
    deleteClick(role) {
      const decision = confirm(
        `Are you sure you want to delete ${role.rolename}`
      );
      if (decision) {
        return this.deleteRole(role._id).then(() => {
          return this.fetchRoleList();
        });
      }
    },
    ...mapActions("roles", ["fetchRoleList", "deleteRole"])
  }
};
</script>

<style scoped>
tbody tr:hover {
  cursor: pointer;
}
</style>
