<template>
  <div class="root">
    <Navbar v-if="$auth.$state.loggedIn"/>
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nuxt_root{
   min-height: 100vh!important;
}

</style>
