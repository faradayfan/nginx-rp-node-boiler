<template>
  <table class="table table-hover table-sm">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Role</th>
        <th scope="col">Resource</th>
        <th scope="col">Claims</th>
        <th scope="col"/>
        <th scope="col"/>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="roleClaim in roleClaims" 
        :key="roleClaim._id">
        <td @click="viewClick(roleClaim)">{{ roleClaim._id }}</td>
        <td @click="viewClick(roleClaim)">{{ roleClaim.role.name }}</td>
        <td @click="viewClick(roleClaim)">{{ roleClaim.resource.name }}</td>
        <td @click="viewClick(roleClaim)">{{ roleClaim.claims }}</td>
        <td @click="editClick(roleClaim)">Edit</td>
        <td @click="deleteClick(roleClaim)">Delete</td>
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
          <nuxt-link to="/role-claim/create">Create</nuxt-link>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("roleClaims", {
      roleClaims: "roleClaimList"
    })
  },
  methods: {
    viewClick(roleClaim) {
      this.$router.push(`/role-claim/${roleClaim._id}`);
    },
    editClick(roleClaim) {
      this.$router.push(`/role-claim/${roleClaim._id}/edit`);
    },
    deleteClick(roleClaim) {
      const decision = confirm(
        `Are you sure you want to delete ${roleClaim._id}`
      );
      if (decision) {
        return this.deleteRoleClaim(roleClaim._id).then(() => {
          return this.fetchRoleClaimList();
        });
      }
    },
    ...mapActions("roleClaims", ["fetchRoleClaimList", "deleteRoleClaim"])
  }
};
</script>

<style scoped>
tbody tr:hover {
  cursor: pointer;
}
</style>
