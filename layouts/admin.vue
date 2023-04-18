<template>
  <div class="root ">
      <AdminNavbar />
      <Nuxt style="margin-left:210px"/>
  </div>
</template>

<script>
export default {
  computed: {
  },
  mounted() {
    this.$store.dispatch("doctors/getDoctors");
    this.$store.dispatch("product/getProduct");
    console.log("Called Data!");
  },
};
</script>

<style scoped>
.nuxt_root {
  min-height: 100vh !important;
}
</style>
