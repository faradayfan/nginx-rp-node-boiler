<template>
  <ul class="nav nav-tabs">
    <li
      v-for="item in navElements"
      :key="item.path"
      class="nav-item">
      <nuxt-link 
        :to="item.path"
        class="nav-link">{{ item.label }}</nuxt-link>
    </li>
  </ul>
</template>


<script>
export default {
  props: {
    navElements: {
      type: Array,
      default: () => []
    }
  }
};
</script>
