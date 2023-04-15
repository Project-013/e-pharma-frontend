<template>
  <div class="container mb-5 pb-5">
    <div class="row g-4 justify-content-center bg-white py-3">
      <div class="col-12">
        <div class="card p-3 h-100 text-center">
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
            width="55"
            height="55"
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
      <div class="col-12">
        <div class="card h-100 p-sm-3 p-1">
          <div class="row">
            <div class="col-md-8">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="p-2 m-0 nav-link active"
                    id="Orders-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Orders-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="Orders-tab-pane"
                    aria-selected="true"
                  >
                    <small class="">Orders</small>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="p-2 m-0 nav-link "
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    <small class="">Appoiment</small>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="p-2 m-0 nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    <small class="">Medicine</small>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="p-2 m-0 nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="contact-tab-pane"
                    aria-selected="false"
                  >
                    <small class="p-0 m-0">Diagnostic</small>
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="Orders-tab-pane"
                  role="tabpanel"
                  aria-labelledby="Orders-tab"
                  tabindex="0"
                >
                  <ProfileOrders />
                </div>
                <div
                  class="tab-pane fade"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabindex="0"
                >
                  <ProfileDoctorAppoiment />
                </div>
                <div
                  class="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabindex="0"
                >
                  <ProfileHomeMedicine />
                </div>
                <div
                  class="tab-pane fade"
                  id="contact-tab-pane"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                  tabindex="0"
                >
                  <ProfileMobileDiagnostic />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div v-for="blog in blogs" :key="blog.id">
                <Blog :blog="blog" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "স্বাস্থ্যসেবক || Profile",
    };
  },
  data() {
    return {
      blogs: [],
    };
  },
  methods: {
    async getBlogs() {
      await this.$axios
        .get(`blog/?user=${this.$auth.user.id}`)
        // .get(`blog/`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.blogs = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
  },
  mounted() {
    // this.$auth.fetchUser();
    this.getBlogs();
  },

  beforeCreate() {
    if (this.$auth.$state.loggedIn == false) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  small {
    font-size: 85% !important;
  }
}
</style>
