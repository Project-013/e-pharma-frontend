<template>
  <section class="">
    <!-- <PartialsCarousel /> -->
    <PartialsBanner v-if="!$config.isApp" />
    <PartialsServices />
    <!-- <PartialsSpeciality /> -->
  </section>
</template>

<script>
export default {
  name: "IndexPage",

  mounted() {
    if (this.$route.query.redirect) {
      this.$router.push(this.$route.query.redirect);
    }
  },
  created() {
    console.log(window.location.host);
  },
};
</script>
