<template>
  <div class="container">
    <div class="row justify-content-center my-3 mb-5">
      <div class="col-lg-8 card p-3">
        <div class="text-center py-3">
          <img src="/img/icons/user_icon.svg" alt="user icon" width="80" />
          <h5 class="my-3">{{ $auth.user.full_name }}</h5>
        </div>
        <div class="my-3">
          <h5 class="small fw-bold mt-5">YOUR APPOINTMENTS</h5>
          <div
            class="alert alert-warning display-6 text-center py-3"
            role="alert"
          >
            Nothing Found!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    if (this.$auth.$state.loggedIn == false) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
