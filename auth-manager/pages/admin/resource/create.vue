<template>
  <CreateResource/>
</template>

<script>
import CreateResource from "@/components/resources/CreateResource";
export default {
  layout: "admin",
  components: { CreateResource },
  middleware: "authenticated"
};
</script>