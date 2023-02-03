<template>
  <div class="mb-5">
    <div class="pb-3">
      <PartialsPartners />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return {
      title: "স্বাস্থ্যসেবক || Work with us ",
    };
  },

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
