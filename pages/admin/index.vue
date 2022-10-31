<template>
  <h4>Admin panel</h4>
</template>

<script>
export default {
  beforeCreate() {
    if (this.$auth.user.is_admin === false) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
