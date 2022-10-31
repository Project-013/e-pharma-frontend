<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-white bg-white border-bottom">
      <div class="container">
        <NLink class="navbar-brand text-success" to="/">
          <img src="../static/img/logo.png" alt="sasthosebok.com" width="50" />
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

        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="../static/img/icons/menu.svg" alt="me" width="30" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mt-4 mt-lg-0">
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
                  <NLink class="dropdown-item" to="/call-doctors">
                    Call Doctorts
                  </NLink>
                </li>
                <li>
                  <NLink class="dropdown-item" to="/caregivers">
                    Find Caregivers
                  </NLink>
                </li>
                <li>
                  <NLink class="dropdown-item" to="/caregivers">
                    Find Nurse
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
                <li>
                  <NLink class="dropdown-item" to="/call-doctors">
                    Call Doctorts
                  </NLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <NLink class="nav-link" to="/blog"> Blog </NLink>
            </li>
            <li class="nav-item">
              <NLink class="nav-link" to="/about"> What we are? </NLink>
            </li>
            <li class="nav-item">
              <NLink class="nav-link" to="/contact-us"> Contact us</NLink>
            </li>
          </ul>
          <div class="ms-auto">
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
                <ul
                  class="dropdown-menu dropdown-menu-end mt-3"
                  aria-labelledby=""
                >
                  <li>
                    <NuxtLink to="/profile" class="dropdown-item">
                      Profile
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="profile/setting" class="dropdown-item">
                      Settings
                    </NuxtLink>
                  </li>
                  <div class="dropdown-divider"></div>
                  <li>
                    <a
                      style="cursor: pointer"
                      class="dropdown-item pointer"
                      @click="$auth.logout()"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </span>
            </template>
            <template v-else>
              <div class="ms-auto">
                <NuxtLink class="" to="/login">
                  <small class="btn btn-outline-dark btn-sm px-4">Login </small>
                </NuxtLink>
                <NuxtLink class="" to="/register">
                  <small class="btn btn-dark btn-sm px-3">Register</small>
                </NuxtLink>
              </div>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>
<style>
.navbar-nav li {
  margin: 0 5px;
}
.dropdown-menu {
  width: fit-content !important;
}
.dropdown:hover > .dropdown-menu {
  display: block !important;
}
.navbar-nav li a {
  font-weight: 500;
  color: #4a6f8a;
  text-transform: capitalize;
}
.nav-link,
.dropdown-item {
  font-size: 13.5px !important;
}
.navbar-nav li a:hover {
  color: #0046c0;
}
.nuxt-link-exact-active {
  color: #0046c0;
}
</style>
