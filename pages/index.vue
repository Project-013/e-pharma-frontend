<template>
  <div class="">
    <div class="">
      <Web class="d-none d-md-block"/>
      <App class="d-block d-md-none"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  mounted() {
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
