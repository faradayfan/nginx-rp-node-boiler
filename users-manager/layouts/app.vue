<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <nuxt-link 
          class="navbar-brand" 
          to="/">User Manager</nuxt-link>
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
            <li class="nav-item">
              <nuxt-link 
                class="nav-link" 
                to="/users">Users</nuxt-link>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <input 
              class="form-control mr-sm-2" 
              type="text" 
              placeholder="Search" 
              aria-label="Search">
          </form>
        </div>
      </nav>
    </header>
    <div id="content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapActions({
      logout: "identity/logout"
    }),
    ...mapGetters({
      isAuthenticated: "identity/isAuthenticated"
    })
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
#content {
  margin-top: 100px;
}
</style>
