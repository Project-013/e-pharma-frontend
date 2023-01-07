<template>
  <div class="container mb-3">
    <div class="row g-4 justify-content-center bg-white py-3">
      <div class="col-lg-4">
        <div class="card p-3 h-100">
          <div class="d-flex justify-content-end p-0 m-0">
            <div class="p-0 m-0">
              <NuxtLink
                class="dropdown-item text-dark small"
                to="/profile/Setting"
              >
                <i class="icofont-edit text-primary small"></i>
              </NuxtLink>
            </div>
          </div>
          <img
            src="/img/icons/user_icon.svg"
            class="d-block mx-auto"
            alt="user icon"
            width="80"
          />
          <h5 class="mt-4">
            {{ $auth.user.full_name }} ({{ $auth.user.user_type }})
          </h5>
          <p class="my-0 small fw-semibold">
            <i class="icofont-ui-message me-1 text-primary"></i>
            {{ $auth.user.email }}
          </p>
          <p class="my-0 small fw-semibold">
            <i class="icofont-ui-call text-primary"></i> {{ $auth.user.phone }}
          </p>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card h-100 p-3">
          <ProfileDoctorAppoiment />
          <ProfileHomeMedicine />
          <ProfileMobileDiagnostic />
        </div>
 
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
