<template>
  <header class="sticky-top" style="z-index: 99999">
    <div>
      <nav class="navbar navbar-expand-sm bg-light border-bottom">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div class="d-flex justify-content-center align-items-center">
              <div class="me-3">
                <NLink class="btn btn-sm btn-outline-secondary" to="/">
                  View website
                </NLink>
              </div>

              <div v-if="$auth.loggedIn">
                <span class="dropdown text-light">
                  <a
                    class="dropdown-toggle text-dark border rounded p-2 text-decoration-none"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span style="font-size: 14px">
                      welcome

                      <small class="" style="font-weight: 500; color: #084298"
                        >{{ $auth.user.full_name }} </small
                      >!
                    </span>

                    <img
                      src="@/static/img/icons/user_icon.svg"
                      alt="user icon"
                      width="35"
                    />
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="">
                    <li>
                      <NuxtLink to="/profile" class="dropdown-item">
                        <i class="icofont-ui-user me-1"></i>Profile
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/profile/setting" class="dropdown-item">
                        <i class="icofont-gear me-1"></i>Settings
                      </NuxtLink>
                    </li>
                    <div class="dropdown-divider"></div>
                    <li>
                      <a
                        style="cursor: pointer"
                        class="dropdown-item pointer"
                        @click="$auth.logout()"
                      >
                        <i class="icofont-logout me-1"></i>Logout
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="admin_menu card h-100 bg-light p-0 m-0 border-0 shadow">
      <NLink class="text-dark bg-light border-bottom p-3 mb-2" to="/admin">
        <img
          src="~/static/img/logo.png"
          alt="sasthosebok.com"
          class=""
          width="35"
        />
        <span class="text-muted fw-semibold"> Admin Dashboard</span>
      </NLink>
      <!-- <hr class="mt-0 mb-4" /> -->
      <div class="top card-body d-flex flex-column p-1">
        <NuxtLink class="text-muted fw-semibold app-nav-item" to="/admin">
          <i class="icofont-dashboard me-2"></i>Dashboard
        </NuxtLink>
        <NuxtLink
          to="/admin/customers"
          class="text-muted fw-semibold app-nav-item"
        >
          <i class="icofont-users me-2"></i>Customers
        </NuxtLink>
        <NuxtLink
          class="text-muted fw-semibold app-nav-item"
          to="/admin/analytics"
        >
          <i class="icofont-chart-histogram me-2"></i>Analytics
        </NuxtLink>
        <NuxtLink
          class="text-muted fw-semibold app-nav-item"
          to="/admin/messages"
        >
          <i class="icofont-ui-messaging me-2"></i>Messages
        </NuxtLink>
        <NuxtLink
          class="text-muted fw-semibold app-nav-item"
          to="/admin/reports"
        >
          <i class="icofont-exclamation-tringle me-2"></i>Reports
        </NuxtLink>
        <NuxtLink
          class="text-muted fw-semibold app-nav-item"
          to="/admin/doctors"
        >
          <i class="icofont-doctor-alt me-2"></i>Doctors
        </NuxtLink>
        <NuxtLink class="text-muted fw-semibold app-nav-item" to="/admin/shop">
          <i class="icofont-cart me-2"></i>Shop
        </NuxtLink>

        <NuxtLink
          class="text-muted fw-semibold app-nav-item"
          to="/admin/partners"
        >
          <i class="icofont-ui-user-group me-2"></i>Partners
        </NuxtLink>
        <NuxtLink
          class="text-muted fw-semibold app-nav-item"
          to="/admin/guidelines"
        >
          <i class="icofont-ebook me-2"></i>Guidelines
        </NuxtLink>
        <NuxtLink class="text-muted fw-semibold app-nav-item" to="/admin/blog">
          <i class="icofont-blogger me-2"></i>Blog
        </NuxtLink>
        <NuxtLink class="text-muted fw-semibold app-nav-item" to="/admin/faq">
          <i class="icofont-support-faq me-2"></i>FAQs
        </NuxtLink>
      </div>
      <div
        class="bottom card-footer p-1 ps-3 mb-3 border-0 bg-white"
        v-if="$auth.loggedIn"
      >
        <hr class="text-muted" />
        <a
          class="pointer text-muted fw-semibold p-3 small"
          @click="$auth.logout()"
        >
          <i class="icofont-logout me-2"></i>Logout
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {
    getTotalItem() {
      return this.$store.getters["product/items"].length;
    },
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
  },
  watch: {
    $route(to, from) {
      this.show = false;
    },
  },
  // mounted() {
  //   this.$store.dispatch("doctors/getDoctors");
  //   this.$store.dispatch("product/getProduct");
  //   console.log("Called Navbar!");
  // },
};
</script>
<style scoped>
i {
  font-size: 22px !important;
}
.admin_menu {
  height: 100vh;
  /* width: 700px!important; */
  top: 0;
  position: fixed;
}
.dropdown-item:hover,
.nav-item .nav-link:hover,
.nuxt-link-exact-active {
  /* color: var(--secondary-text) !important; */
  color: #0d6efd !important;
  padding-left: 10px;
  background: #ededf1;
  border-left: 3px solid #084092;
}
.app-nav-item {
  width: 200px;
  font-size: 13.5px !important;
  transition: all ease-in-out 0.3s;
  margin-bottom: 1px;
  padding: 10.5px 16px;
}
.app-nav-item:hover {
  padding-left: 25px;
  color: #084092 !important;
  background: #e2e3f0;
  border-left: 3px solid #084092;
}

/* .mobile_nav .nav-link {
  color: black ;
} */

.__call {
  bottom: 70px;
  left: 15px;
  width: fit-content;
  position: fixed;
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

.mobile_header {
  background: #084092;
  /* border-radius: 0 0 20px 20px; */
  border-radius: 100% 0% 100% 0% / 0% 65% 35% 100%;
}
</style>
