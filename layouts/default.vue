<template>
  <div class="root">
    <Header v-if="!$config.isApp" />
    <Navbar v-if="!$config.isApp" />
    <Nuxt />
    <Footer v-if="!$config.isApp" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
