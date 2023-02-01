<template>
  <div>
    <Register v-if="!$auth.loggedIn" />
    <div v-else>
      <PartialsServices />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
