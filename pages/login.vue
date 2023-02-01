<template>
  <div class="center_box">
    <Login />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "স্বাস্থ্যসেবক || Login ",
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
