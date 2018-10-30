<template>
  <div class="container">
    <ListView
      :items="users"
      :display-specifiers="['username', 'firstName', 'lastName']"
      :view-click="viewClick"
      :edit-click="editClick"
      :delete-click="deleteClick"
      :create-click="createClick"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ListView from "@/components/Generic/ListView";
export default {
  components: { ListView },
  computed: {
    ...mapGetters("users", {
      users: "userList"
    })
  },
  methods: {
    viewClick(user) {
      this.$router.push(`/admin/user/${user._id}`);
    },
    editClick(user) {
      this.$router.push(`/admin/user/${user._id}/edit`);
    },
    createClick() {
      this.$router.push("/admin/user/create");
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
.container {
  max-width: 70%;
  margin: 50px auto;
}
</style>

