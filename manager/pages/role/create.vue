<template>
  <CreateRole/>
</template>

<script>
import CreateRole from "@/components/roles/CreateRole";
export default {
  components: { CreateRole },
  middleware: "authenticated"
};
</script>