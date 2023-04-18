<template>
  <div>
    <AppRegister v-if="!$auth.$state.loggedIn" />
    <div v-else>
      <PartialsTopInfo />
      <CommonSection />
    </div>
  </div>
</template>

<script>
export default {
   mounted(){
    console.log("Called! app");
  },
  beforeCreate() {
    if (this.$auth.$state.loggedIn) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
