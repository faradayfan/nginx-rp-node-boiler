
<template>
  <div>logout</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  beforeMount() {
    this.logout().then(() => {
      this.$router.push("/login");
    });
  },
  methods: {
    ...mapActions("identity", ["logout"])
  }
};
</script>
