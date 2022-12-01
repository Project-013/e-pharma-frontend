<template>
  <div class="container">
    <div class="row justify-content-center my-3 mb-5">
      <div class="col-lg-9 card shadow p-3">
        <div class="text-center py-3">
          <img src="/img/icons/user_icon.svg" alt="user icon" width="80" />
          <h5 class="my-3">{{ $auth.user.full_name }}</h5>
        </div>
        <hr />
        <ProfileDoctorAppoiment />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},

  beforeCreate() {
    if (this.$auth.$state.loggedIn == false) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
