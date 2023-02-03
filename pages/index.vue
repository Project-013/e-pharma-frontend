<template>
  <div class="mb-5 pb-5">
      <Web class="d-none d-md-block"/>
      <App class="d-block d-md-none"/>

  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: window.innerWidth<576?"app":"default",

  mounted() {
    console.log(window.innerWidth==575);
    if (this.$route.query.redirect) {
      this.$router.push(this.$route.query.redirect);
    }
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 100)
    })

  },
  created() {
  },
};
</script>

<style scoped>
.box {
  height: 1000px;
}
</style>
