<template>
  <div class="root">
    <Header />
    <Navbar />
    <Sidebar />
    <Nuxt class="" />
    <Footer />
  </div>
</template>

<script>
export default {
    mounted(){
    console.log("Called");
  }
};
</script>

<style scoped>
.nuxt_root {
  min-height: 100vh !important;
}
</style>
