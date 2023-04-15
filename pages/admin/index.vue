<template>
 <div>
  {{$auth.$state.loggedIn}}
 </div>
</template>

<script>
export default {
  beforeCreate() {
    if (!this.$auth.$state.loggedIn || this.$auth.user.is_admin === false) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
