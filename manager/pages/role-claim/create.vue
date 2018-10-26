<template>
  <CreateRoleClaim/>
</template>

<script>
import CreateRoleClaim from "@/components/role-claims/CreateRoleClaim";
export default {
  components: { CreateRoleClaim },
  middleware: "authenticated",
  fetch({ store: { dispatch } }) {
    return Promise.all([dispatch("resources/fetchResourceList")]);
  }
};
</script>