<template>
  <div>
    <!-- {{ $auth.$state.loggedIn }} -->
    <h4>Messages</h4>
  </div>
</template>

<script>
export default {
  name: "Messages",
  layout: "admin",
  beforeCreate() {
    if (!this.$auth.$state.loggedIn || this.$auth.user.is_admin === false) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
