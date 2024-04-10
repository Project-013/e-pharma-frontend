<template>
  <div>
    <AppRegister v-if="!$auth.$state.loggedIn" />
    <div v-else>
      <PartialsTopInfo />
      <CommonSection />
    </div>
    <!-- <PartialsTopInfo />
    <CommonSection /> -->
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$auth.$state.user.phone.includes(1713364704)) {
      console.log("Called! app");

      this.$nextTick(() => {
        console.log("Called! app 2");

        this.$nuxt.$loading.start();
        setTimeout(() => this.$nuxt.$loading.finish(), 15000);
      });
    } else {
      this.$nextTick(() => {
        console.log("Called! app 2");

        this.$nuxt.$loading.start();
        setTimeout(() => this.$nuxt.$loading.finish(), 3000);
      });
    }
  },
  beforeCreate() {
    if (this.$auth.$state.loggedIn) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
