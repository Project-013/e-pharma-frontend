<template>
  <div class="mb-5 pb-5">
    <!-- <Web class="d-none d-md-block"/>
      <App class="d-block d-md-none"/> -->
    <App v-if="isApp" />
    <Web v-else />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  // layout: window.innerWidth<576?"app":"default",
  computed: {
    isApp() {
      return window.innerWidth < 767;
    },
  },

  mounted() {
    if (this.$route.query.redirect) {
      this.$router.push(this.$route.query.redirect);
    }
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 1)
    // })
  },
};
</script>

<style scoped></style>
