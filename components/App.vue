<template>
  <div>
    <AppRegister v-if="!$auth.$state.loggedIn" />
    <div v-else>
      <PartialsTopInfo />
      <PartialsServices />
      <PartialsCount />
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    if (this.$auth.$state.loggedIn) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
