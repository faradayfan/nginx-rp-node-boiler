<template>
  <CreateResource/>
</template>

<script>
import CreateResource from "@/components/resources/CreateResource";
export default {
  components: { CreateResource },
  middleware: "authenticated"
};
</script>