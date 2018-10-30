<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <nuxt-link 
          class="navbar-brand" 
          to="/">My Site</nuxt-link>
        <button 
          class="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarCollapse" 
          aria-controls="navbarCollapse" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"/>
        </button>
        <div
          id="navbarCollapse"
          class="collapse navbar-collapse" >
          <ul class="navbar-nav mr-auto">
            <li
              v-if="isAuthenticated"
              class="nav-item">
              <nuxt-link 
                class="nav-link" 
                to="/app">App</nuxt-link>
            </li>
            <li
              v-if="isAuthenticated"
              class="nav-item">
              <nuxt-link 
                class="nav-link" 
                to="/admin">Admin</nuxt-link>
            </li>
            <li 
              v-if="isAuthenticated"
              class="nav-item">
              <a 
                class="nav-link" 
                @click="submitLogout">Logout</a>
            </li>
            <li
              v-if="!isAuthenticated"
              class="nav-item">
              <nuxt-link 
                class="nav-link" 
                to="/login">Login</nuxt-link >
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("identity", {
      isAuthenticated: "isAuthenticated"
    })
  },
  methods: {
    ...mapActions("identity", ["logout"]),
    submitLogout() {
      this.logout().then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>


<style>
header {
  height: 56px;
}
</style>
