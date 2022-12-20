<template>
  <header class="sticky-top">
    <nav
      class="navbar navbar-expand-md navbar-white bg-white border-bottom py-1 d-none d-md-block"
    >
      <div class="container">
        <NLink class="navbar-brand text-success" to="/">
          <img src="~/static/img/logo.png" alt="sasthosebok.com" width="55" />
          <!-- <p class="small ms-2" style="font-size: 15px">
            জরুরী মুহুর্তে, <br />
            জীবনের প্রয়োজনে
          </p> -->
        </NLink>

        <!-- <button
          class="border-0 d-lg-none bg-white p-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <img src="../static/img/icons/menu.svg" alt="me" width="30" />
        </button> -->

        <a
          class="navbar-toggler border-0 d-none"
          @click="toggleNavbar"
          type="button"
        >
          <img src="../static/img/icons/menu.svg" alt="me" width="30" />
        </a>

        <div
          class="collapse navbar-collapse order-1 order-md-0"
          id="navbarSupportedContent"
        >
          <NavItem class="mx-auto" />
        </div>
        <div class="ms-auto d-flex justify-content-center">
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
            <div class="">
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
          :to="$auth.loggedIn ? '/profile' : '/login'"
          class="nav-link text-dark"
        >
          <i class="icofont-ui-user"></i>
          <span class="small">Profile</span>
        </NuxtLink>
        <NuxtLink
          :to="$auth.loggedIn ? '/profile/setting' : '/login'"
          class="nav-link text-dark"
        >
          <i class="icofont-gear"></i>
          <span class="small">Setting</span>
        </NuxtLink>

        <a class="nav-link" v-if="$route.path != '/'" @click="$router.go(-1)">
          <i class="icofont-arrow-left"></i>
          <span class="small">Back</span>
        </a>
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
          <div class="ms-auto d-flex justify-content-center">
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
              <div class="">
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
          <NavItem />
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
  mounted() {
  },
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
</style>
