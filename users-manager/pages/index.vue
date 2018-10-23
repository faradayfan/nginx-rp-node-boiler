<template>
  <div>
    home
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$router.push("/login");
  }
};
</script>
