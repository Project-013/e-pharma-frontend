<template>
  <div class="container pb-5 pt-3 mb-5">
    <Prescription /> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      chamber: {
        doctor_name: "",
        chamber_name: "",
        time: "",
      },
    };
  },
    beforeCreate() {
    if (this.$auth.$state.loggedIn == false) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
