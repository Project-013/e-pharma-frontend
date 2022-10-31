<template>
  <section class="">
    <PartialsCarousel />
    <PartialsServices />
    <PartialsSpeciality />
  </section>
</template>

<script>
export default {
  name: "IndexPage",

  mounted() {
    console.log(this.$route.query);
    if (this.$route.query.redirect) {
      this.$router.push(this.$route.query.redirect);
    }
  },
};
</script>
