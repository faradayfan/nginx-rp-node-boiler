<template>
  <CreateUser/>
</template>

<script>
import CreateUser from "@/components/users/CreateUser";
export default {
  components: { CreateUser },
  middleware: "authenticated"
};
</script>