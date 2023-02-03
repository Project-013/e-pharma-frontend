<template>
  <header class="sticky-top">
    <div
      class="navbar border-bottom bg-light d-flex justify-content-start d-none"
    >
      <a
        class="navbar-toggler border-0 me-1"
        @click="toggleNavbar"
        type="button"
      >
        <!-- <img src="../static/img/icons/menu.svg" alt="me" width="30" /> -->
        <i class="icofont-navigation-menu"></i>
      </a>
      <NLink class="navbar-brand text-success" to="/">
        <img
          src="~/static/img/logo.png"
          alt="sasthosebok.com"
          class="d-none d-md-block"
          width="55"
        />
      </NLink>
    </div>
    <nav
      class="navbar navbar-expand-md navbar-white bg-light border-bottom py-1 d-none d-md-block"
    >
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <a
            class="navbar-toggler border-0 me-1"
            @click="toggleNavbar"
            type="button"
          >
            <!-- <img src="../static/img/icons/menu.svg" alt="me" width="30" /> -->
            <i class="icofont-navigation-menu"></i>
          </a>
          <NLink class="navbar-brand text-success" to="/">
            <img
              src="~/static/img/logo.png"
              alt="sasthosebok.com"
              class=""
              width="55"
            />
          </NLink>
        </div>

        <div
          class="collapse navbar-collapse order-1 order-md-0"
          id="navbarSupportedContent"
        >
          <NavItem class="mx-auto" />
        </div>
        <div class="ms-auto d-flex justify-content-center d-none d-md-block">
          <template v-if="$auth.loggedIn">
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
                  src="../static/img/icons/user_icon.svg"
                  alt="user icon"
                  width="35"
                />
              </a>
              <ul class="dropdown-menu" aria-labelledby="">
                <li v-if="this.$auth.user && this.$auth.user.is_admin">
                  <NuxtLink to="/admin" class="dropdown-item">
                    <i class="icofont-dashboard me-1"></i>Admin Dashboard
                  </NuxtLink>
                </li>
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
          </template>
          <template v-else>
            <div>
              <NuxtLink class="" to="/login">
                <small class="btn btn-outline-dark btn-sm"
                  ><i class="icofont-sign-in"></i> Login
                </small>
              </NuxtLink>
              <NuxtLink class="" to="/register">
                <small class="btn btn-dark btn-sm p"
                  ><i class="icofont-sign-in"></i> Register</small
                >
              </NuxtLink>
            </div>
          </template>
        </div>
      </div>
    </nav>
    <div class="mobile_nav d-block d-md-none">
      <nav class="nav shadow-lg">
        <NuxtLink
          :to="$auth.loggedIn ? '/profile' : '/login?redirect=/profile'"
          class="nav-link text-muted"
        >
          <i class="icofont-ui-user text-muted"></i>
          <span class="small fw-semibold text-muted">My Account</span>
        </NuxtLink>

        <NuxtLink to="/" class="nav-link text-muted">
          <i class="icofont-home text-muted"></i>
          <span class="small fw-semibold text-muted">Home</span>
        </NuxtLink>

        <NuxtLink to="/notifications" class="nav-link text-muted">
          <i class="icofont-notification text-muted"></i>
          <span class="small text-muted fw-semibold">Notification</span>
        </NuxtLink>

        <!-- <NuxtLink to="/bmi" class="nav-link text-dark">
          <i class="icofont-calculations"></i>
          <span class="small">BMI</span>
        </NuxtLink> -->
      </nav>
      <div style="z-index:1000" :class="show ? 'modal-backdrop fade show' : ''"></div>
      <div
      style="z-index:9000"
        class="offcanvas offcanvas-end w-50"
        :class="show ? 'show' : 'hide'"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close ms-auto"
            @click="toggleNavbar"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="card h-100 p-0 m-0 border-0">
            <div class="top card-body d-flex flex-column p-1">
              <NuxtLink class="text-muted fw-semibold pb-3 app-nav-item" to="/">
                <i class="icofont-home me-2"></i>Home
              </NuxtLink>
              <NuxtLink
                class="text-muted fw-semibold pb-3 app-nav-item"
                v-if="$auth.loggedIn"
                to="/profile"
              >
                <i class="icofont-user me-2 small"></i>My account
              </NuxtLink>
              <NuxtLink
                to="/bmi"
                class="text-muted fw-semibold pb-3 app-nav-item"
              >
                <i class="icofont-calculations me-2"></i>BMI Calculator
              </NuxtLink>
              <NuxtLink
                class="text-muted fw-semibold pb-3 app-nav-item"
                to="/work"
              >
                <i class="icofont-plus-circle me-2"></i>Work With us
              </NuxtLink>
              <NuxtLink
                class="text-muted fw-semibold pb-3 app-nav-item"
                to="/career"
              >
                <i class="icofont-search-job me-2"></i>Career
              </NuxtLink>
              <NuxtLink
                class="text-muted fw-semibold pb-3 app-nav-item"
                to="/blog"
              >
                <i class="icofont-blogger me-2"></i>Blog
              </NuxtLink>
              <NuxtLink
                class="text-muted fw-semibold pb-3 app-nav-item"
                to="/faq"
              >
                <i class="icofont-support-faq me-2"></i>FAQs
              </NuxtLink>
            </div>
            <div
              class="bottom card-footer p-1 mb-5 border-0 bg-white"
              v-if="$auth.loggedIn"
            >
              <hr class="text-muted" />
              <a
                class="pointer text-muted fw-semibold pb-3 app-nav-item"
                @click="$auth.logout()"
              >
                <i class="icofont-logout me-2"></i>Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a
      href="tel:+8801959970664"
      class="d-flex align-items-center __call d-none"
    >
      <img src="/img/icons/call.gif" class="rounded-circle" width="50" />
    </a>

    <div class="mobile_header shadow d-block d-md-none p-2 pb-3">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <p class="text-light my-0 py-0 small">Hello,</p>

          <template v-if="$auth.loggedIn">
            <span class="small text-light fw-semibold fw-italic my-0 py-0"
              >{{ $auth.user.full_name }}!</span
            >
          </template>
          <template v-else>
            <span class="small text-light fw-italic fw-semibold my-0 py-0"
              >Sir!</span
            >
          </template>
        </div>
        <div class="d-flex">
          <NuxtLink to="/notifications" class="mx-3 position-relative">
            <i class="icofont-notification text-light h5"></i>
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              0
              <span class="visually-hidden">unread messages</span>
            </span>
          </NuxtLink>

          <a class="nav-link mx-2" @click="toggleNavbar">
            <i class="icofont-navigation-menu text-light h5"></i>
          </a>
        </div>
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
  mounted() {},
};
</script>
<style scoped>
.app-nav-item {
  font-size: 12px !important;
  transition: padding ease-in 0.4s;
}
.app-nav-item:hover {
  padding-left: 10px;
  color: #084092 !important;
}

.mobile_nav .nav-link {
  color: black !important;
}
.dropdown-item:hover,
.nav-item .nav-link:hover,
.nuxt-link-exact-active {
  color: var(--secondary-text) !important;
}
.__call {
  bottom: 70px;
  left: 15px;
  width: fit-content;
  position: fixed;
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .__call {
    bottom: 15px;
    left: 15px;
  }
}

.tawk-mobile {
  display: none !important;
  background: rebeccapurple !important;
}
.mobile_header {
  background: #084092;
  border-radius: 0 0 20px 20px;
}
</style>
