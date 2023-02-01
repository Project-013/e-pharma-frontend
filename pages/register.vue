<template>
  <div class="center_box">
    <Register />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "স্বাস্থ্যসেবক || Register ",
    };
  },
  beforeCreate() {
    if (this.$auth.$state.loggedIn) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
