<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <nuxt-link 
          class="navbar-brand" 
          to="/">Manager</nuxt-link>
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
                to="/users">Users</nuxt-link>
            </li>
            <li
              v-if="isAuthenticated"
              class="nav-item">
              <nuxt-link 
                class="nav-link" 
                to="/roles">Roles</nuxt-link>
            </li>
            <li
              v-if="isAuthenticated"
              class="nav-item">
              <nuxt-link 
                class="nav-link" 
                to="/resources">Resources</nuxt-link>
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
          <form 
            v-if="isAuthenticated"
            class="form-inline mt-2 mt-md-0">
            <input 
              class="form-control mr-sm-2" 
              type="text" 
              placeholder="Search" 
              aria-label="Search">
          </form>
        </div>
      </nav>
    </header>
    <div 
      id="content">
      <nuxt/>
    </div>
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
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
header {
  height: 56px;
}
#content {
  padding: 0;
  margin: 0;
}
</style>
