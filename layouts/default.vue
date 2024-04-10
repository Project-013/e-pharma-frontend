<template>
  <div class="root">
    <div v-if="isApp">
      <!-- <Navbar /> -->
      <Navbar v-if="$auth.$state.loggedIn" />
      <Nuxt />
    </div>
    <div v-else>
      <Header />
      <Navbar />
      <Sidebar />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isApp() {
      return window.innerWidth < 767;
    },
  },
  mounted() {
    this.$store.dispatch("doctors/getDoctors");
    this.$store.dispatch("product/getProduct");
    this.$store.dispatch("product/getDrugs");
    this.$store.dispatch("prescription/getPrescriptionData");
    this.$store.dispatch("prescription/getPrescriptions");
    this.$store.dispatch("prescription/getDoctors");
    console.log("Called Data!");
    this.$auth.logout();
  },
};
</script>

<style scoped>
.nuxt_root {
  min-height: 100vh !important;
}
</style>
