<template>
  <div>
    home
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log(this);
    this.$router.push("/login");
  }
};
</script>
