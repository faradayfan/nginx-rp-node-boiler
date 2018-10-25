<template>
  <CreateRoleClaim/>
</template>

<script>
import CreateRoleClaim from "@/components/role-claims/CreateRoleClaim";
export default {
  components: { CreateRoleClaim },
  middleware: "authenticated"
};
</script>