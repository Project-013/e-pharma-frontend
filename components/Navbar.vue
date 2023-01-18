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
        <h5
          style="font-weight: 500; color: #084298"
          class="text-uppercase fw-bold d-block d-md-none my-0 py-0"
        >
          sasthosebok.com
        </h5>
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
      <nav class="nav">
        <NuxtLink to="/" class="nav-link text-dark">
          <i class="icofont-home"></i>
          <span class="small">Home</span>
        </NuxtLink>
        <NuxtLink
          :to="$auth.loggedIn ? '/profile' : '/login?redirect=/profile'"
          class="nav-link text-dark"
        >
          <i class="icofont-ui-user"></i>
          <span class="small">Profile</span>
        </NuxtLink>
        <NuxtLink
          :to="
            $auth.loggedIn
              ? '/profile/setting'
              : '/login?redirect=/profile/setting'
          "
          class="nav-link text-dark"
        >
          <i class="icofont-gear"></i>
          <span class="small">Setting</span>
        </NuxtLink>
        <NuxtLink to="/bmi" class="nav-link text-dark">
          <i class="icofont-calculations"></i>
          <span class="small">BMI</span>
        </NuxtLink>

        <a class="nav-link" @click="toggleNavbar">
          <i class="icofont-navigation-menu"></i>
          <span class="small">Menu</span>
        </a>
      </nav>

      <div
        class="offcanvas offcanvas-end w-75"
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
          <template v-if="$auth.loggedIn">
            <h5 class="mb-3">Welcome!</h5>

            <h3 class="" style="font-weight: 500; color: #084298">
              {{ $auth.user.full_name }}
            </h3>
            <hr />

            <ul class="list-group mt-5">
              <li
                class="list-group-item"
                v-if="this.$auth.user && this.$auth.user.is_admin"
              >
                <NuxtLink to="/admin">
                  <i class="icofont-dashboard me-1"></i>Admin Dashboard
                </NuxtLink>
              </li>

              <li class="list-group-item">
                <a class="pointer" @click="$auth.logout()">
                  <i class="icofont-logout me-1"></i>Logout
                </a>
              </li>
            </ul>
          </template>
          <template v-else>
            <div class="mt-5">
              <h5 class="mb-3">Welcome!</h5>
              <NuxtLink class="d-block" to="/login">
                <small class="btn btn-outline-dark btn-sm w-100"
                  ><i class="icofont-sign-in"></i> Login
                </small>
              </NuxtLink>

              <p class="text-center small my-2">or</p>
              <NuxtLink class="d-block" to="/register">
                <small class="btn btn-dark btn-sm w-100"
                  ><i class="icofont-sign-in"></i> Register</small
                >
              </NuxtLink>
            </div>
          </template>
          <ul class="list-group mt-5">

            <li class="list-group-item">
              <NuxtLink to="/work">
               Work With us
              </NuxtLink>
            </li>

            <li class="list-group-item">
              <NuxtLink to="/career">
               Career
              </NuxtLink>
            </li>
            <li class="list-group-item">
              <NuxtLink to="/faq">
               FAQs
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <a href="tel:+8801959970664" class="d-flex align-items-center __call">
      <img src="/img/icons/call.gif" class="rounded-circle" width="50" />
    </a>
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
  right: 10px;
  width: fit-content;
  position: fixed;
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .__call {
    bottom: 15px;
  }
}
</style>
