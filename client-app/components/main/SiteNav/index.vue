<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <nuxt-link 
          class="navbar-brand" 
          to="/"><i class="fas fa-asterisk"/></nuxt-link>
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
          </ul>
          <ul class="navbar-nav my-2 my-lg-0">
            <li
              v-if="isAdmin && isAuthenticated"
              class="nav-item">
              <nuxt-link 
                class="nav-link" 
                to="/admin"><i class="fas fa-cogs"/></nuxt-link>
            </li>
            <li 
              v-if="isAuthenticated"
              class="nav-item">
              <nuxt-link 
                class="nav-link" 
                to="/profile"><i class="fas fa-user-circle"/></nuxt-link >
            </li>
            <li 
              v-if="isAuthenticated"
              class="nav-item">
              <nuxt-link 
                class="nav-link" 
                to="/logout"><i class="fas fa-sign-out-alt"/></nuxt-link >
            </li>
            <li
              v-if="!isAuthenticated"
              class="nav-item">
              <nuxt-link 
                class="nav-link" 
                to="/login"><i class="fas fa-sign-in-alt"/></nuxt-link >
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
      isAuthenticated: "isAuthenticated",
      isAdmin: "isAdmin"
    })
  }
};
</script>


<style>
header {
  height: 56px;
}
</style>
