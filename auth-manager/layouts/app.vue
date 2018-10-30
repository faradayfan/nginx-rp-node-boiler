<template>
  <div>
    <SiteNav />
    <SubNav :nav-elements="mainNav"/>
    <div 
      id="content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import SiteNav from "@/components/main/SiteNav";
import SubNav from "@/components/Generic/SubNav";
export default {
  components: { SubNav, SiteNav },
  data() {
    return {
      mainNav: []
    };
  }
};
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

#content {
  padding: 0;
  margin: 0;
}
</style>
