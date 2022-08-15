<template>
  <div class="root">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.root {
  position: relative;
  min-height: 100vh;
}
Footer {
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
