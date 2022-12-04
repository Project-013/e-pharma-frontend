<template>
  <header class="sticky-top">
    <nav
      class="navbar navbar-expand-lg navbar-white bg-white border-bottom py-1"
    >
      <div class="container">
        <NLink class="navbar-brand d-none d-md-block text-success" to="/">
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

        <a class="navbar-toggler border-0" @click="toggleNavbar" type="button">
          <img src="../static/img/icons/menu.svg" alt="me" width="30" />
        </a>

        <div
          class="collapse navbar-collapse order-1 order-lg-0"
          :class="show ? 'show' : 'hide'"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mx-auto mt-3 mt-lg-0">
            <li class="nav-item">
              <NLink class="nav-link" aria-current="page" to="/"> Home </NLink>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu">
                <li>
                  <NLink class="dropdown-item" to="/doctors">
                    Find Doctorts
                  </NLink>
                </li>

                <li>
                  <NLink class="dropdown-item" to="/nurse"> Find Nurse </NLink>
                </li>
                <li>
                  <NLink class="dropdown-item" to="/caregivers">
                    Find Caregivers
                  </NLink>
                </li>

                <li>
                  <NLink class="dropdown-item" to="/physiotherapist">
                    Find Physiotherapist
                  </NLink>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Doctors
              </a>
              <ul class="dropdown-menu">
                <li>
                  <NLink class="dropdown-item" to="/doctors">
                    Find Doctorts
                  </NLink>
                </li>
              </ul>
            </li>
            <li class="nav-item d-none">
              <NLink class="nav-link" to="/blog"> Blog </NLink>
            </li>
            <li class="nav-item">
              <NLink class="nav-link" to="/about"> What we are? </NLink>
            </li>
            <li class="nav-item">
              <NLink class="nav-link" to="/contact-us"> Contact us</NLink>
            </li>
          </ul>
        </div>
        <div class="d-flex justify-content-center">
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
      console.log(this.show);
      this.show = !this.show;
    },
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      console.log(this.show);
      this.show = false;
    },
  },
};
</script>
<style scoped>
.dropdown-item:hover,
.nav-item .nav-link:hover,
.nuxt-link-exact-active {
  color: var(--secondary-text) !important;
}

.navbar-nav {
  transition: all 0.3s ease !important;
}
</style>
