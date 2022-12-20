<template>
  <section class="">
    <PartialsBanner />
    <PartialsServices />
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
  },
};
</script>
