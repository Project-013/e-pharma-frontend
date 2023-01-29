<template>
  <div class="center_box">
    <div class="pb-3 ">
      <Accept v-if="!$auth.loggedIn" class="d-block d-sm-none"/>
      <PartialsCarousel/>
      <PartialsServices />
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
      setTimeout(() => this.$nuxt.$loading.finish(), 5)
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
