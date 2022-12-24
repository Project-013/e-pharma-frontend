<template>
  <div class="center_box">
    <div class="pb-3 ">
      <PartialsCarousel/>
      <PartialsServices />
      <PartialsPartners />
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
  },
  created() {},
};
</script>

<style scoped>
.box {
  height: 1000px;
}
</style>
