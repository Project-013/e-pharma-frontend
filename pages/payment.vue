<template>
  <div class="container">
    <PaymentDoctor />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.query.id);
  },
};
</script>

<style></style>
